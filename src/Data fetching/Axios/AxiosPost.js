import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const AxiosPost = () => {
    const [post,setPost] = useState('');
    console.log(post);
    
    const fetchData = ()=>axios.get(`${baseURL}/1`).then(resp=>setPost(resp.data));
    useEffect(()=>{
        fetchData()
    },[]);

    const createPost = ()=>{
        axios.post(baseURL,{
            title:"lorem 20",
            body:"sunny",
        }).then(res=>setPost(res.data))
    }
    
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create post</button>
    </div>
  )
}

export default AxiosPost
