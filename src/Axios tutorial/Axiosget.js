import React, { useEffect } from 'react';
import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/users"

const Axiosget = () => {
    const fetchData = async()=>{
        try{
            const response = await axios.get(url);
            console.log(response.data);
        }
        catch(error){
            console.log(error.response)

        }
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
      Axios Tutorial
    </div>
  )
}

export default Axiosget
