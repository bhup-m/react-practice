import React, { useState } from 'react'

const newComponent = (OriginalComponent) => {

    function HigherComp() {
        const [fontSize, setFont] = useState(10)

        return (
            <div>
                <OriginalComponent name="Sunny" fontSize={fontSize} incrementSize={()=>setFont((font)=>font+1)} />
            </div>
        )
    }
    return HigherComp
}

export default newComponent
