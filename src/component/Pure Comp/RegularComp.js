import React, { Component } from 'react'

export class RegularComp extends Component {
  render() {
    console.log("********** Regular comp")
    return (
      <div>
        Regular component {this.props.name}
      </div>
    )
  }
}

export default RegularComp
