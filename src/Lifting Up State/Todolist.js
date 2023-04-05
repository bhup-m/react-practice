import React from 'react'

const Todolist = ({todos}) => {
  return (
    <div>
      {todos.map((todo,i)=>(
        <li key={i}>{todo}</li>
      ))}
    </div>
  )
}

export default Todolist
