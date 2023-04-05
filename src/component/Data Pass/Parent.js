import React,{useState} from 'react'
import Child from './Child'


export default function Parent() {
    const [data,setData] = useState('')

    const parentToChild = () =>{
        setData("This is Date from Parent to child")
    }
  return (
    <div>
      <Child parentToChild={data}/>
      <div>
        <button onClick={()=>parentToChild()}>Click Me</button>
      </div>
    </div>
  )
}
