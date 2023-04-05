import React,{useState,useEffect} from 'react';

const useFetch = (url,initialState)=>{
    const [data,setData] = useState(initialState);

    useEffect(()=>{
        fetch(url)
        .then(resp=>resp.json())
        .then((data)=>setData(data))
        .catch(err=>console.log(err));
    },[url]);
    
    return{data};
}

export default useFetch;