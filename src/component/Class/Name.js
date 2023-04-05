import React, { Component } from "react";


class Name extends Component {
    
  render() {
    const {data} = this.props
    return (
      <>
        <h1>{data}</h1>
        <h2> This data passed from parent.... </h2>
      </>
    );
  }
}

export default Name;
