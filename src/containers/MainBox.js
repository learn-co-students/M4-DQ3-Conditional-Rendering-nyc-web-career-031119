import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
constructor(props) {
  super(props)
  this.state = {}
}

  onProfileClick = (e) => {
    e.preventDefault()
    console.log('works')
    this.setState({
      page: <Profile/>
    })
  }

  onPhotoClick = () => {
    this.setState({
      page: Photos()
    })
  }

  onCocktailClick = () => {
    this.setState({
      page: Cocktails()
    })
  }

  onPokeClick = () => {
    this.setState({
      page: <Pokemon />
    })
  }



  render() {

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <div>
          <MenuBar onProfileClick={this.onProfileClick} onPhotoClick={this.onPhotoClick} onCocktailClick={this.onCocktailClick} onPokeClick={this.onPokeClick} />
           {detailsToDisplay}
        </div>
        <div>
        {this.state.page}
        </div>
      </div>
    )
  }

}

export default MainBox
