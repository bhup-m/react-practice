import React from 'react'

import { useState } from 'react'

const Function1 = ({title,children}) => {
    const [isActive,setIsActive] = useState(false)
  return (
    <>
      <h2>{title}</h2>
      {
        isActive?(<p>{children}</p>):(<button onClick={()=>setIsActive(true)}>Show</button>)
      }
    </>
  )
}

export default Function1
