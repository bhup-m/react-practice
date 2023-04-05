import React,{useState} from 'react'
import updateComp from './withCount'

const Function2 = ({count,handleInc}) => {
    // const [count,setCount] = useState(0)

    // const handleInc=()=>{
    //     setCount(count=>count+1);
    // }
  return (
    <div>
      <p>{count}</p>
      <button onMouseOver={handleInc}>Hover Inc</button>
    </div>
  )
}

export default updateComp(Function2)
