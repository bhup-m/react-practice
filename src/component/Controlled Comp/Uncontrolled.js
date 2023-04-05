import React, { useRef } from 'react'

function Uncontrolled() {
    const inpRef = useRef(null)

    const handleClick =()=>{
        inpRef.current.focus()
    }

    return (
        <div>
                <input type='text' ref={inpRef} />
                <button onClick={handleClick}>Focus the input</button>
         
        </div>
    )
}

export default Uncontrolled
