import React,{useState} from 'react'

function UseState() {
    const [name,setName] = useState("sunny")
    const [age,setAge] = useState(0)

    const handleChange =(e)=>{
        (e.target.name)==='name'?setName(e.target.value):setAge(e.target.value)
    }

    const handleClick=()=>{
        setAge(age + 1)
    }

  return (
    <div>
      <input type='text' name='name' value={name} onChange={handleChange}/>
      <input type='text' value={age} onChange={handleChange}/>
      <button onClick={handleClick}>Increase</button>
      <button onClick={()=>{setAge(0)}}>Reset</button>
      <p>My name is {name} and my age is {age}</p>
    </div>
  )
}

export default UseState
