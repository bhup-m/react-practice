import React, { Component } from 'react'

export class Updating extends Component {
    constructor(props){
        super(props)
        this.state = {
            boxSize:"normal"
        }
        this.boxRefboxRef = React.createRef();
    }

    boxes = {
        small: {
          height: 60,
          width: 60,
          backgroundColor: "yellow"
        },
        normal: {
          height: 120,
          width: 120,
          backgroundColor: "red"
        },
        big: {
          height: 180,
          width: 180,
          backgroundColor: "blue"
        }
    }

    handleClick = value => () => this.setState({ boxSize: value });

    getSnapshotBeforeUpdate() {
        // Let componentDidUpdate know whether to override the box
        // color or not.
        return {
          overrideBoxColor: this.boxRef.current.offsetHeight > 120
        };
      }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Override the box ref directly
        if (snapshot.overrideBoxColor) {
          this.boxRef.current.style.backgroundColor = '#000';
        }
      }

  render() {
    return (
      <>
        <div>
          <button onClick={this.handleClick("small")}>Shrink</button>
          <button onClick={this.handleClick("normal")}>Normal</button>
          <button onClick={this.handleClick("big")}>Size up</button>
        </div>
        <div ref={this.boxRef} style={this.boxes[this.state.boxSize]} />
      </>
    )
  }
}

export default Updating
