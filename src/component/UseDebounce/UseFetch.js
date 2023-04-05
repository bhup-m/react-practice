import { useState,useEffect } from "react";


const useFetch = (url)=>{
    const [data,setData] = useState(null);
    const fetchData=()=>{
        fetch(url).then(resp=>resp.json()).then(data=>setData(data))
    }
    useEffect(()=>{
        fetchData();
    },[url]);

    return [data]
}
export default useFetch;