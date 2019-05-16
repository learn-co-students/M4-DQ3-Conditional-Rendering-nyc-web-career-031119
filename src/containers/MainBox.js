import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {page: <p>nah</p>};

  //this one

  profileClick = () => {
    this.setState({page: Profile()});
  };

  cameraClick = () => {
    this.setState({page: Photos()});
  };

  drinksClick = () => {
    this.setState({page: Cocktails()});
  };

  pkmnClick = () => {
    this.setState({page: <Pokemon/>});
  };


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <span>Hi, I'm a div!</span>

    return (
      <div>
        <MenuBar profileClick={this.profileClick} cameraClick={this.cameraClick} drinksClick={this.drinksClick} pkmnClick={this.pkmnClick}
        />
        {this.state.page}
      </div>
    )
  }

}

export default MainBox
