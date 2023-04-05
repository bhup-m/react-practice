import React,{useContext} from 'react'
import UserContext from './UseContext'

function ChildA() {
    const user = useContext(UserContext)
  return (
    <div>
      {user}
    </div>
  )
}

export default ChildA
