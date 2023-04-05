import React,{forwardRef} from 'react'

const User = (props,ref) => {
    
  return (
    <div>
      <input ref={ref} value={props.state}/>
    </div>
  )
}

export default forwardRef(User)
