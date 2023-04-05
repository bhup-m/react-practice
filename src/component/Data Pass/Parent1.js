import React, { useState } from 'react'
import Child1 from './Child1'

export default function Parent1() {
    const [data,setData] = useState("")
    
    const childToParent=(childdata)=>{
        setData(childdata)
    }
  return (
    <div>
        <h1>{data}</h1>
      <Child1 childToParent={childToParent}/>
    </div>
  )
}
