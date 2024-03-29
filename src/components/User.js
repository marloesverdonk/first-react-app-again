import React, { Component } from 'react'

class User extends Component {
  state = { present : true }
    
  toggle = () => {
    this.setState({
      present: !this.state.present
    })

  }

  render(){
    return(
      <div>
        <p> User: <b>{this.props.name}{this.state.present}</b> </p>
        <p> {this.props.name} is <b>{ this.state.present ? '' : 'not' }</b> present</p>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    )
  }
}

export default User


