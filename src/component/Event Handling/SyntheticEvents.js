import React from 'react'

function SyntheticEvents() {
    const handleClick = (event)=>{
      e.preventDefault()
      e.stopPropagation()
        console.log(event)
    }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default SyntheticEvents


// Synthetic events are wrapper around the browser that has same interface as native JS events have ie we can still use methods like preventDefault , stopPropogation etc
//Synthetic events are react own events not natiev browser events and provide consistence and predictable way to handle events across different browsers
//Synthetic events have the same interface as native events, but they are implemented using a custom event system that is optimized for performance and memory usage. They also have some additional features, such as the ability to stop propagation and prevent default behavior, and they are automatically cleaned up by React after they are handled.
//In this example, the handleClick function is called when the button is clicked. The event parameter passed to the function is a synthetic event object that contains information about the event, such as the target element and the type of the event. By logging event.target, we can see which element was clicked.