import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class Hover extends Component {
  render() {
    const {count,incrementCount,name} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>{name} Hovered {count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(Hover)
