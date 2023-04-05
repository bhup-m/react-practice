import React,{useState} from 'react'

function NestedObj() {
    const[person,setPerson] = useState({
        name:"sunny",
        details:{
            add:"lasur",
            college:"dyp"
        }
    })
  return (
    <div>
      <label>Name</label>
      <input type='text' value={person.name} onChange={e=>setPerson({...person,name:e.target.value})} />
      <label>Adress</label>
      <input type='text' value={person.details.add} onChange={e=>setPerson({...person,details:{...person.details,add:e.target.value}})} />
      <label>College</label>
      <input type='text' value={person.details.college} onChange={e=>setPerson({...person,details:{...person.details,college:e.target.value}})} />
    </div>
  )
}

export default NestedObj
