import React,{useState,useRef} from 'react'

const TodoList = () => {
    const [value,setValue] = useState("");
    const [todos,setTodos] = useState(["item","item2"]);
    const inputRef = useRef();
    // console.log(inputRef);

    const handleChange = (e)=>{
        setValue((e.target.value).toUpperCase());
    }

    const handleAdd =()=>{
        setTodos=((listData)=>{
            const updatedList = [...listData,value];
            setValue('');
            return updatedList;
        })

    //    setTodos([...todos,value]);
    //    setValue('');
    //    inputRef.current.focus();
    }

    const handleRemove = (i)=>{
        const newTodo = todos.filter((item,index)=>{
            return index!==i;
        });
        console.log(newTodo)
        setTodos(newTodo);
    }

  return (
    <div>
      <input type="text" value={value} ref={inputRef} onChange={handleChange} />
      <button onClick = {handleAdd}>Add</button>
      <ul>
        {todos.map((item,i)=>(
            <li key={i}>{item}<span style={{cursor:"pointer"}} onClick={()=>handleRemove(i)}>&times;</span></li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
