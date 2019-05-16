import React from 'react'
import MenuBar from '../components/MenuBar.js'
import {Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(){
    super()
    this.state = {
      type: ""
    }
  }

  clickHandler = (e) =>{
    // detailsToDisplay =
    this.setState({type: e.target.id})
    // debugger
  }

  handlesCondish = () =>{

    if (this.state.type === 'profile'){
      console.log("prof");
      return <Profile />

    }else if (this.state.type === 'photo'){
      console.log("phot");
      return <Photos />
    }else if (this.state.type === 'cocktail'){
      console.log("co");
      return <Cocktails />
    }else if (this.state.type === 'pokemon'){
      console.log("poke");
      return <Pokemon/>
    }
  }


  render() {

    /*Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?  */


    console.log(this.state)
    const detailsToDisplay = <div>{this.handlesCondish()|| "i am div"}</div>

    return (
      <div>
        <MenuBar giveItToEm={this.clickHandler}/>
        {detailsToDisplay}

      </div>
    )
  }

}

export default MainBox
