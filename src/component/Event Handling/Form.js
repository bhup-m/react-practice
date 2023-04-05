import React from 'react'

function Form() {
    return (
        <div>
            <form >
                <label>Change Event trigger</label>
                <input type='text' onChange={(e) => alert(`change event occured ${e.target.value}`)} />

                <label>Focus Event occur</label>
                <input type='text' onFocus={(e) => alert(`Focus Event occured`)} />
            
                <label>Click Event trigger</label>
                <button onClick={(e) => alert(`change event occured ${e.target.value}`)}>Click me</button>
            </form>
        </div>
    )
}

export default Form
