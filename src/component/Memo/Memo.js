import React,{memo} from 'react'


function Memo({name}) {
    console.log("Rendering Memo component......")
  return (
    <div>
     <p>{name}</p>
    </div>
  )
}

export default memo(Memo)
