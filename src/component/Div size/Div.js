import React, { useState } from 'react'
const box={height:"200px",
width:"200px",
backgroundColor:"red"}



const Div = () => {
    const[size,setSize] = useState(box)
    const[toggle,setToggle] = useState(false)

  return (
    <>
    <div style={size}>
      Box 1
    </div>

    <button onClick={()=>setSize({
    height:"400px",
    width:"400px",
    backgroundColor:"blue"

})}> Increase size</button>
    </>
  )
}

export default Div
