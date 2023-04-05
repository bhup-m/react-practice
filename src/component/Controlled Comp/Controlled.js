import React, { useState } from 'react'

function Controlled() {
    const [name,setName] = useState("Sunny")
    const [pass,setPass] = useState("")

    const handleChange = (e)=>{
        if(e.target.name==="firstname"){
            const capName = (e.target.value).toUpperCase()
            setName(capName)
        }
        else{
            setPass(e.target.value)
        }
    }

  return (
    <div>
      <form>
        <label>Name</label>
        <input type='text' name="firstname" value={name} onChange={handleChange}/>
        <input type='text' name="password" value={pass} onChange={handleChange}/>
      </form>
    </div>
  )
}

export default Controlled

// A component that controls input elements in form on subsequent user input , every state mutation will have associated handler function .

// uncontrolled components are store their own state internally and we query the dom using ref to find its current value when we need it.
