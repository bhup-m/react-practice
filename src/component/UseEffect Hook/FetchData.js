import React,{useEffect, useState} from 'react'
import axios from 'axios'

function FetchData() {
    const [data,setData] = useState({})
    const [id,setId] = useState(1)


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp=>{
            console.log(resp)
            setData(resp.data)
        })
        .catch(()=>console.log("Error Occured"))
    },[id])
  return (
    <div>
        <button onClick={()=>setId(id+1)}>Curent ID is {id}</button>
        <h3>{data.title}</h3>
    </div>
  )
}

export default FetchData
