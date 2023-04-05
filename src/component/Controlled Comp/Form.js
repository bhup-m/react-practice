import React, { useState } from 'react'

function Form() {
    const[name,setName] = useState("sunny")

    const handleChange=(e)=>{
        setName(e.target.value)
    }
    
    const length  = name.length
    const countWord = (str)=>{
       return str.split(' ').filter(n=> n !== '').length
    }
    console.log(countWord(name))
  return (
    <div>
      <input type='text' value={name} onChange={handleChange}/>
      <p>I type : {name}</p>
      <p>No of words : {countWord(name)}</p>
      <p>No of characters : {length}</p>
    </div>
  )
}

export default Form
