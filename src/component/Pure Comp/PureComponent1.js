import React, { PureComponent } from 'react'

export class PureCmponent extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
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

    // shouldComponentUpdate(nextProps){
    //     return nextProps.name !== this.props.name
    // }

  render() {
    console.log("........name props rendering")
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    )
  }
}

export default PureCmponent
