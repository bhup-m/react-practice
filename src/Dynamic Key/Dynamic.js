import React, { useState } from 'react'

const Dynamic = () => {
    const[employee,setEmployee] = useState({id:1,name:"Sunny",salary:100});

    const key = 'salary';

    const handleClick=()=>{
        setEmployee({...employee,[key]:employee.salary+100})
    }
  return (
    <div>
      <button onClick={handleClick}>Increase Salary</button>
      <h2>id:{employee.id}</h2>
      <h2>name:{employee.name}</h2>
      <h2>salary:{employee.salary}</h2>
    </div>
  )
}

export default Dynamic
