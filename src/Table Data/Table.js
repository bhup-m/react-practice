import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Table = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.get('http://jsonplaceholder.typicode.com/users')          
            .then((resp) => setData(resp.data))
            .catch((error) => console.log(error))
    }
    // const dataFetch = ()=>{
    //     return fetch("'http://jsonplaceholder.typicode.com/users'")
    //     .then((response)=>console.log(response.json()))
    //     .then((data)=>setData(data))
    // }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.street}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Table
