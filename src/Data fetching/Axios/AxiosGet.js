import React,{useEffect, useState} from 'react'
import axios from 'axios'



const AxiosGet = () => {
  const [post,setPost] = useState([]);
  const [count,setCount] = useState(0);
  console.log(post);

  const handleSet = ()=>{
    setCount(count+1);
  }

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${count}`).then(resp=>setPost(resp.data));
  },[]);
  return (
    <div>
       {post.title}
       <button onClick={handleSet}>Next Post</button>
    </div>
  )
}

export default AxiosGet
