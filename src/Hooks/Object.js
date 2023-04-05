import React,{useState} from 'react'

function Object() {
    const[form,setForm] = useState({
        fname:"sunny",
        lname:"mali",
        email:"b@gmail.com"
    })
  return (
    <div>
      <label>First Name</label>
      <input type="text" value={form.fname} onChange={(e)=>setForm({...form,fname:e.target.value})}/>
      <label>Last Name</label>
      <input type="text" value={form.lname} onChange={(e)=>setForm({...form,lname:e.target.value})}/>
      <label>Email</label>
      <input type="text" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <p>{form.fname}</p>
      <p>{form.lname}</p>
      <p>{form.eamil}</p>
    </div>
  )
}

export default Object
