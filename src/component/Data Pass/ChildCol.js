import React from 'react'

export default function ChildCol({color}) {
  return (
    <div>
      <button style={{color}}>My Color is changed by parent </button>
    </div>
  )
}
