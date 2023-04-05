import React, { Component } from "react";
import Name from "./Name";

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: true
    };
  }

  render() {
    return (
      <>
        <button onClick={()=>{this.setState({change:!this.state.change})}}>Click Me</button>
        <p>Hiii</p>
        {this.state.change ? (<Name data="Welcome"/>) :( <Name data="Guest"/>)}
      </>
    );
  }
}

export default Sample;