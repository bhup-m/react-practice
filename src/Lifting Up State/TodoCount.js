import React from 'react'

const TodoCount = ({todos}) => {
  return (
    <div>
      <h1>Todo count : {todos.length}</h1>
    </div>
  )
}

export default TodoCount
