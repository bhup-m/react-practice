import React, { useState } from 'react'
import ChildCol from './ChildCol'

export default function ParentCol() {
    const [color,setColor] = useState('black')

    const changeColor = ()=>{
        setColor("red")
    }
  return (
    <div>

      <ChildCol color={color}/>
      <button onClick={()=>changeColor()}>Click Me</button>
    </div>
  )
}
