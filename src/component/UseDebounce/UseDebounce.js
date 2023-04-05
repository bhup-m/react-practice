import React,{useEffect, useState} from 'react'

const UseDebounce = (value,delay) => {
    const [debounce,setDebounce] = useState(value)

    useEffect(()=>{
       const timer=setTimeout(()=>{
            setDebounce(value)
        },delay)
        return()=>{
            clearTimeout(timer)
        }
    },[value,delay])
    
  return UseDebounce
}

export default UseDebounce
