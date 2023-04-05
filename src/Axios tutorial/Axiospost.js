import React,{useState} from 'react'
import axios from 'axios';
const url = "https://jsonplaceholder.typicode.com/users"

const Axiospost = () => {
    const [name,setName] = useState("Sunny");

    const fetchName = async()=>{
        try {
            const resp = await axios(url,{
                headers:{
                    Accept:"application/json",
                }, 
            });
            console.log(resp.data);
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      Axios Post 
      <button onClick={fetchName}>Change Name</button>
      <h1>{name}</h1>
    </div>
  )
}

export default Axiospost
