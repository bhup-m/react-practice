import React,{useState,useCallback} from 'react'
import Child from './Child';

const UseCallback = () => {
    const [add,setAdd] = useState(0);
    const [count,setCount] = useState(0);

    const Learnig = useCallback( ()=>{

    },[count])

  return (
    <div>
      <Child learning={Learnig}/>
      <h1>{add}</h1>
      <button onClick={()=>setAdd(add+1)}>add</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+2)}>count</button>
    </div>
  )
}

export default UseCallback
