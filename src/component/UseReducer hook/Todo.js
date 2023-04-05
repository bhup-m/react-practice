import React,{useReducer, useRef} from 'react'

const initialState = {
    todo : '',
    todos : []
}

const SET_TODO = 'set_todo'
const ADD_TODO = 'add_todo'
const DELETE_TODO = 'delete_todo'
const REMOVE_ALL = 'remove_all'

const setTodo = payload =>{
    return{
        type: SET_TODO,
        payload
    }
}

const addTodo = payload=>{
    return{
        type:ADD_TODO,
        payload
    }
}

const deleteTodo = payload=>{
    return{
        type:DELETE_TODO,
        payload
    }
}

const remove_all = payload=>{
    return{
        type:REMOVE_ALL,
        payload
    }
}

console.log(setTodo('item'))

const reducer = (state,action)=>{
    switch(action.type){
        case SET_TODO:
            return{
                ...state,
                todo:action.payload
            }
        case ADD_TODO:
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        case DELETE_TODO:
            const newTodo = [...state.todos]
            newTodo.shift(action.payload)

            return{
                ...state,
                todos:newTodo

            }
        case REMOVE_ALL:
            return{
                ...state,
                todos:[]
            }
        default:
            return state
    }
}

function Todo() {
    const[state,dispatch] = useReducer(reducer,initialState)
    const inpRef = useRef()

    // console.log(state)
    const {todo,todos} = state
    // console.log(state)

    const handleAdd = ()=>{
        dispatch(addTodo(todo))
        dispatch(setTodo(''))

        inpRef.current.focus()
    }

    
  return (
    <div>
      <input ref={inpRef} type='text' value={todo} onChange={(e)=>dispatch(setTodo(e.target.value))}/>
      <button onClick={handleAdd}>Add item</button>
      <ul>
        {
            todos.map((todo,i)=>(
                <li key={i.toString()}>{todo} <span style={{cursor:'pointer'}} onClick={()=>dispatch(deleteTodo(i))}>&times;</span></li>
            ))
        }
        {
            todos.length > 0 && <button onClick={()=>dispatch(remove_all())}>Remove All</button>
        }
      </ul>
    </div>
  )
}

export default Todo
