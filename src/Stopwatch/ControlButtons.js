import React from 'react'

const ControlButtons = (props) => {
    const {handleStart,handlePauseResume,handleReset,isPaused,active} = props
    const StartButton = (
        <button onClick={handleStart}>Start</button>
    )
    const ActiveButtons =(
        <div>
        <button onClick={handlePauseResume}>{isPaused?"Resume":"Pause"}</button>
        <button onClick={handleReset}>Reset</button>
        </div>
    )
  return (
    <div>
        {active?ActiveButtons:StartButton}
    </div>
  )
}

export default ControlButtons
