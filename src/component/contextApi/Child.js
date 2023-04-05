import React from 'react'
import { data,data1 } from './Parent'

const Child = () => {
  return (
    <div>
      <data.Consumer>
        {(name)=>{
          return(
            <data1.Consumer>
              {(gender)=>{
                return(
                  <h1>My name is {name} and my gender is {gender}</h1>
                )
              }}
            </data1.Consumer>
          )
        }}
      </data.Consumer>
    </div>
  )
}

export default Child
// currying 
// time opetimization 10 sec mini sec
//