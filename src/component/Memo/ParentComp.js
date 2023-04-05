import React, { Component } from 'react'
import Memo from './Memo'

export class ParentComp extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Sunny"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Sunny"
            })
        },2000)
    }
  render() {
    console.log("********** Parent comp")
    return (
      <div>
        Parent component
        <Memo name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
