import React, { Component } from 'react'

class LightSwitch extends Component{
  state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render(){
    return (
    <div>
        <p> The ligth switch is <b> { this.state.active ? 'on' : 'off' }</b></p>
        <button onClick={this.toggle}> Toggle </button>
    </div>
    )
  }
}

export default LightSwitch