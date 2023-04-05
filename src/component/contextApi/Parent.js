import React, { createContext } from 'react'
import Child from './Child'
const data = createContext()
const data1 = createContext()

const Parent = () => {
  return (
    <div>
      <data.Provider value="Sunny">
        <data1.Provider value="male">
        <Child/>
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default Parent
export {data,data1}
