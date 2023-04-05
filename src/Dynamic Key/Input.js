import React, { useState } from 'react'

const Input = () => {
    const [state,setState] = useState({});

    const handleChange=(event)=>{
        setState({...state,[event.target.id ]:event.target.value});
    }

  return (
    <div>
      <pre>{JSON.stringify(state,null,4)}</pre>
      <div>
        <input id='myInput' name='myInput' onChange={handleChange} />
        <input id='myEmail' onChange={handleChange} />
        <textarea id='myText' onChange={handleChange} />
      </div>
    </div>
  )
}

export default Input
