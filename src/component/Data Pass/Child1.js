import React from 'react'

export default function Child1({childToParent}) {
    const data = "This is data from child to parent "
  return (
    <div>
      <button onClick={()=>childToParent(data)}>Click me</button>
    </div>
  )
}
