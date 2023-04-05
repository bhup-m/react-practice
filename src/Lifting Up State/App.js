import React,{useState} from 'react'
import Addtodo from './Addtodo';
import TodoCount from './TodoCount';
import Todolist from './Todolist';

const Apps = () => {
    const [todos,setTodos] = useState(["item1","item2","item3"]);
  return (
    <div>
      <TodoCount todos={todos}/>
      <Todolist todos={todos}/>
      <Addtodo setTodos={setTodos}/>
    </div>
  )
}

export default Apps
