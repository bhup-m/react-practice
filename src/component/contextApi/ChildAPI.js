import React from 'react'
import {data1,data} from './Parent'

const ChildAPI = () => {

  return (
    <div>
      {<data.Consumer>{
        (name)=>{
            return(
                <data1.Consumer>
                    {(gender)=>{
                        return(<h1>{name} {gender}</h1>)
                    }}
                </data1.Consumer>
            )
        }
        }
        </data.Consumer>}
    </div>
  )
}

export default ChildAPI
