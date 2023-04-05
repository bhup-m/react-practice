import React from 'react'
import { memo } from 'react'

const Child = (learning) => {
    console.log("Child comp..")
  return (
    <div>
      Child Component
    </div>
  )
}

export default memo (Child)
