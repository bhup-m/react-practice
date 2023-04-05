import React, { Component } from 'react'

export class Mounting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 10
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         count: 1000
    //     }
    // }
    // el = document.createElement("section")

    componentDidMount() {
        // document.querySelector("body").appendChild(this.el)
        console.log('componentDidMount() lifecycle invoked');
        this.setState({ count: 2000 })
    }
    render() {
        console.log('Render componentDidMount lifecycle')
        return (
            <div>
                my count is {this.state.count}
            </div>
        )
    }
}

export default Mounting

// ------ getDerivedStateFromProps () ---------------//
//this method is called before the component is mounted to the DOM. By returning an object, we update the state of the component before it is even rendered.

//The method name getDerivedStateFromProps comprises five words: get derived state from props. Essentially, static getDerivedStateFromProps allows a component to update its internal state in response to a change in props.

//---------- componentDidMount()  --------------//

//use the componentDidMount lifecycle method to grab a DOM node from the component tree immediately after it’s mounted.

//componentDidMount() is a hook that gets invoked right after a React component has been mounted aka after the first render() lifecycle.

// first is count is printed, Right after that print  it will trigger the componentDidMount() lifecycle, and check if that component has componentDidMount() method to run any side effects the developer wants.

//In my componentDidMount() method, I’m telling React to update the state of the component.


//In this case componentDidMount() will ONLY run once.
