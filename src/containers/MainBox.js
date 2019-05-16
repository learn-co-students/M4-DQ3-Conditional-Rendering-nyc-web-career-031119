import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {page: ""}

  onPageChange = (page) => {
    console.log(page);
    this.setState({page: page})
  }

  render() {

    console.log("the current state is: ", this.state.page)

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    let displayPage;
    const detailsToDisplay = <div>Please Select a Page to View!</div>


    switch (this.state.page) {
      case "profile":
        displayPage = <Profile />
        break;
      case "photo":
        displayPage = <Photos />
        break;
      case "cocktail":
        displayPage = <Cocktails />
        break;
      case "pokemon":
        displayPage = <Pokemon />
        break;
      default:
        displayPage = detailsToDisplay
        break;
    }

    return (
      <div>
        <MenuBar onPageChange={this.onPageChange} activePage={this.state.page}/>
        {displayPage}
      </div>
    )
  }

}

export default MainBox
