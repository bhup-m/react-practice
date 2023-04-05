import React, { Component } from 'react'

export class Event extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isToggleOn:true
      };

      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.setState(prevState=>({
            isToggleOn:!prevState.isToggleOn
        }))
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.isToggleOn?(<p>On</p>):(<p>Off</p>)}</button>
      </div>
    )
  }
}

export default Event
