import React,{useState} from 'react'

const Todos = () => {
    const [todo, setTodo] = useState("");
    const [activity, setActivity] = useState([]);
    const [isToggle,setIsToggle] = useState(false);

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
    const handleToggle = (i)=>{
        const toggle = activity.filter((item,index)=>{
            return i === index;
        })
        setIsToggle(toggle)
    }

    const handleRemoveAll = ()=>{
        setActivity([]);
    }

  return (
    <div>
      <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleClick}>Add Item</button>
      <ul>
        {activity.map((todo,i)=>(
            <div key={i}>
                <li onClick={()=>handleToggle(i)} style={isToggle?{textDecoration:"line-through"}:{textDecoration:"none"}}>{todo}</li>
                <button onClick={()=>handleRemove(i)}>Remove</button>
            </div>
        ))}
      </ul>
      {activity.length >0 && <button onClick={handleRemoveAll}>Remove All</button>}
    </div>
  )
}

export default Todos
