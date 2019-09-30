import React, { Component } from 'react'
import User from './User'

class UserBoard extends Component {

  render() {
    return (
      <div>
        <h1> { this.props.content }</h1>
        <p>
          <User name='Vie' />
          <User name='Belle' />
          <User name='Mika' />
          <User name='Munchie' />
          <User name='Peaches' />
        </p>
      </div>
    )
  }
}

export default UserBoard