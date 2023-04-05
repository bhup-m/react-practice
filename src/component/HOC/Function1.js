import React,{useState} from 'react'
import updateComp from './withCount';

const Function1 = ({count,handleInc}) => {
    // const [count,setCount] = useState(0);
    // const handleInc = ()=>{
    //     setCount(count=>count+1);
    // }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleInc}>Count Inc</button>
    </div>
  )
}

export default updateComp(Function1)
