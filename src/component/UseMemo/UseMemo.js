import React, { useMemo } from 'react'
import { useState } from 'react'

const UseMemo = () => {
    const [add,setAdd] = useState(0)
    const [sub,setSub] = useState(100)

    const handleAdd=()=>{
        setAdd(add+1)
    }
    const handleSub=()=>{
        setSub(sub-1);
    }

    const mul=useMemo(()=>{
        console.log('mul.........');
        return add*10;
    },[add])
  return (
    <div>
        <p>{mul}</p>
      <button onClick={handleAdd}>{add}</button>
      <button onClick={handleSub}>{sub}</button>
    </div>
  )
}

export default UseMemo

// Pure comp -- Memo --- useMemo
