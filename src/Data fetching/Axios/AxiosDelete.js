import React, { useEffect } from 'react'
import axios from 'axios'

const baseURL = "https://jsonplaceholder.typicode.com/posts";
const AxiosDelete = () => {
    const [post,setPost] = useState(null);

    useEffect(()=>{
        axios.get(`${baseURL}/1`).then((response) => {
            setPost(response.data);
          });
    },[]);

    const deletePost = ()=>{
        axios.delete(`${baseURL}/1`).then(()=>{setPost(null)})
    }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  )
}

export default AxiosDelete
