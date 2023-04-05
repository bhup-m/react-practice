import React,{useState} from 'react';

const updateComp = (OriginalComonent)=>{
    function HigherOrderComp(){
        const [count,setCount] = useState(0);

        return(
            <OriginalComonent count={count} handleInc={()=>setCount(count=>count+1)} />
        )
    }
    return HigherOrderComp;
}

export default updateComp;