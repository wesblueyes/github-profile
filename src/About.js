import React, { Component } from 'react'

class About extends Component {

  render () {
    return <div className='About'>
      {this.props.name}
      {this.props.location}
      <a href={'https://github.com/${this.props.login}'}>{this.props.login}</a>
      </div>
  }
}

export default About
