import React,{useState} from 'react'

function Practice() {
    const [count,setCount] = useState(0)


    const handleClick = (e)=>{
        if(count <= 0){
           return setCount(count=>count+1)
        }
        else{
        (e.target.innerText ) ==='Increment'?(setCount(count=>count+1)):(setCount(count=>count-1))
        }
        
    }
  return (
    <div>
      <input type='text'  value={count}/>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClick}>Decrement</button>
    </div>
  )
}

export default Practice
