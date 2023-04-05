import React, { Component } from 'react'

export default class extends Component {
    constructor(name) {
        super(name);
        this.state = {
            name: 'Bhupendra'
        }
    }
    handleChange(name) {
        this.setState({
            name: "Sunny"
        });


    }

    render() {
        return (
            <div>
                <h3>My name is {this.state.name}</h3>
                <button onClick={this.handleChange.bind(this)}>Click to change</button>
            </div>
        )
    }
}

// Stateful component has state object .
// Stateless component doesn't has state object
// In above ex stateful component own its own state object and is dependent on its properties

//A stateful component is always a class component. It is created by extending the React.Component class. A stateful component is dependent on it’s state object and can change it’s own state. The component re-renders based on changes to it’s state, and may pass down properties of it’s state to child components as properties on a props object.

//When would you use a stateful component?

//When building element that accepts user input
//or element that is interactive on page
//When dependent on state for rendering, such as, fetching data before rendering
//When dependent on any data that cannot be passed down as props

// Example 1: Program to demonstrate the creation of a class-based component.

import React, { Component } from "react";

class Sample extends Component {
  constructor(props) {
    super();
    this.state = {
      change: true
    };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ change: !this.state.change });
          }}
        >
          {" "}
          Click Me
        </button>
        {this.state.change ? <h1>Welcome</h1> : <h1>Guest</h1>}
      </>
    );
  }
}

