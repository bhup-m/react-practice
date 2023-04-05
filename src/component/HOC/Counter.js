import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class Counter extends Component {    
  render() {
    const {count,incrementCount,name} = this.props
    return (
        
      <div>
        <h3>{count}</h3>
        {/* <button onClick={()=>this.incrementCount()}>Click {this.state.count} times</button> */}
        <button onClick={incrementCount}>{name} Click {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(Counter)


