import React, { Component } from 'react'

const UpdatedComponent = OriginalComponent =>{
    class NewComponent extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count : 0
            }
          }
          
          incrementCount = ()=>{
              this.setState(prevState=>{
                  // count : this.state.count + 1
                  return {count:prevState.count +1}
              })
              console.log(this.state.count)
          }
        render() {
          return <OriginalComponent name="Sunny" count={this.state.count} incrementCount={this.incrementCount}/>
        }
      }
      
      return NewComponent
}

export default UpdatedComponent

