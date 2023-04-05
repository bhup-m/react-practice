import React, { useState, useEffect } from 'react'

const Async = () => {
  const [data, setData] = useState([]);
  console.log(data)


  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setData(data));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      {data.map(user=>{
        return (
          <div key ={user.id}>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        </div>)
      })}
    </div>
  )
}

export default Async
