import React from 'react'
import newComponent from './HigherComp';

function FuncCounter(props) {
    const {fontSize,incrementSize} = props;
  return (
    <div>
      <button onClick={()=>incrementSize()}>Increase font</button>
      <p style={{fontSize}}>Font size is {fontSize}</p>
      
    </div>
  )
}

export default newComponent(FuncCounter)