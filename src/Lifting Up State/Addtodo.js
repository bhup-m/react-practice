import React from 'react'

const Addtodo = ({setTodos}) => {

    const handleAdd = (event)=>{
        event.preventDefault();
        const todo = event.target.elements.todo.value;
        console.log(todo);
        setTodos(prevTodos => [...prevTodos, todo]);
    }
  return (
    <form onSubmit={handleAdd}>
      <input type='text' id='todo'/>
      <button type='submit'>Add</button>
    </form>
  )
}

export default Addtodo
