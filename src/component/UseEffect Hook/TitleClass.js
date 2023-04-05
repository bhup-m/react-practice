import React, { Component } from 'react'

export class TitleClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         name:""
      }
    }
    incrementcount = ()=>{
        this.setState({
            count : this.state.count +1
        })
    }
    componentDidMount(){
        document.title = `You clicked ${this.state.count}`
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            console.log("updating document title")
        document.title = `You clicked ${this.state.count}`
        }
        
    }
    
  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
        <button onClick={this.incrementcount}>Click me {this.state.count}</button>
      </div>
    )
  }
}

export default TitleClass
