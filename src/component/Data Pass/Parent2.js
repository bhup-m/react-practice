import React from 'react'
import Child2 from './Child2'

export default function Parent2() {
    const childToParent = ()=>{
        alert("Hii from child component")
    }
  return (
    <div>
      <Child2 childToParent={childToParent}/>
    </div>
  )
}
