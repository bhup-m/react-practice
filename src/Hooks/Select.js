import React, { useState } from 'react'

function Select() {
    const [liked, setLiked] = useState(true)
    const handleChange = (e) => {
        setLiked(e.target.checked)
    }
    return (
        <div>
            <label>
                <input type='checkbox' checked={liked} onChange={handleChange} /> I liked This..!!
            </label>
            <p>{liked?"You like this":"You dont like this"}</p>
        </div>
    )
}

export default Select
