import React,{useRef} from 'react'
import User from './User'

const ForwardRef = () => {
    const inputRef = useRef()
    console.log(inputRef)
    
    const updateRef=()=>{
        inputRef.current.value= '100'
        inputRef.current.style.color = 'red'
        inputRef.current.focus()
    }
  return (
    <div>
        <User ref={inputRef} />
      <button onClick={updateRef}>Update Ref</button>
    </div>
  )
}

export default ForwardRef


// useState returns 2 properties or an array. One is the value or state and the other is the function to update the state. In contrast, useRef returns only one value which is the actual data stored. When the reference value is changed, it is updated without the need to refresh or re-render.

// forwarding refs means passing refs through a component to one of its child.