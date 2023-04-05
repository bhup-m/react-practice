import React from 'react'

export default function Child2({childToParent}) {
  return (
    <div>
      <button onClick={()=>childToParent()}>click me</button>
    </div>
  )
}
