import React from 'react'
import {useState,useEffect,useRef} from 'react'

const Ref = () => {
    const [number,setNumber] = useState(0)
    const prevRef = useRef();

    const handleClick=()=>{
        setNumber(prevState=>prevState+1);
    }

    useEffect(()=>{
        prevRef.current = number
    },[number])

  return (
    <div>
       <h2>Prev Number = {prevRef.number}</h2> 
      <h3>Count = {number}</h3>
      <button onClcik={handleClick}></button>
    </div>
  )
}

export default Ref
