import React, { useState } from 'react'

function Todo() {
  const [todo, setTodo] = useState("")
  const [activity, setActivity] = useState([])
  const handleClick = () => {
    // setActivity([...activity, todo])
    // console.log(activity) .. This will work asynchronously         
    setActivity((listData) => {
      const updateList = [...listData, todo]
      console.log(updateList)
      setTodo(''); // will empty input field
      return updateList // will work synchronously
    })
  }

  const handleRemove = (i)=>{
      const updatedList = activity.filter((item,id)=>{
        return i !== id
      })
      setActivity(updatedList);
  }

  const handleRemoveAll = ()=>{
    setActivity([])
  }
  return (
    <div>
      <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleClick}>Add Item</button>
      <ul>
        {activity !==[] && activity.map((data,i)=>(
          <div key={i}>
          <li>{data}</li>
          <button onClick={()=>handleRemove(i)}>Remove</button>
          </div>
        ))}
        {activity.length >0 && 
        <button onClick={handleRemoveAll}>Remove All</button>
        }
      </ul>
    </div>
  )
}

export default Todo
