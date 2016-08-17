import React, { Component } from 'react'
import Avatar from './Avatar'
import Followers from './Followers'
import About from './About'
import 'whatwg-fetch'
import Bio from './Bio'
import Repos from './Repos'
import './App.css'

class App extends Component {

  constructor () {
    super()
    this.state = {
      user: 'wesblueyes',
      userData: {}
    }
  }

  componentDidMount () {
    fetch(`https://api.github.com/users/${this.state.user}?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4`)
      .then((resp) => { return resp.json() })
      .then((data) => {
        this.setState({ userData: data })
      })
  }

  render () {
    return <div className='App'>
    <div className='topAbout'>
      <Avatar id={this.state.userData.id} />
      <h1><About name={this.state.userData.name} /></h1>
      <h2><About location={this.state.userData.location} /></h2>
      <Bio bio={this.state.userData.bio} />
      <h2 className='Portfolio'>View Portfolio:</h2><Bio blog={this.state.userData.blog} />
      </div>
      <h2><About login={this.state.userData.login} /></h2>
      <h3>Repository</h3><Repos url={this.state.userData.repos_url} />
      <h3>Followers</h3><Followers url={this.state.userData.followers_url} />
    </div>
  }
}

export default App
