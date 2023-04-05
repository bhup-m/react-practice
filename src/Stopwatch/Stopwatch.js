import React,{useState,useEffect} from 'react'
import ControlButtons from './ControlButtons';
import Time from './Time'

const Stopwatch = () => {
    const [time,setTime] = useState(0);
    const [isActive,setIsActive] = useState(false);
    const [isPaused,setIsPaused] = useState(true);

    useEffect(()=>{
        let interval = null
        if(isActive && isPaused === false){
            interval = setInterval(()=>{
                setTime((time)=>time+10)
            },10);
        }else{
            clearInterval(interval);
        }
        return ()=>{
            clearInterval(interval);
        }
    },[isActive,isPaused]);

    const handleStart=()=>{
        setIsActive(true);
        setIsPaused(false);
    }
    const handlePauseResume=()=>{
        setIsPaused(!isPaused)
    }
    const handleReset=()=>{
        setIsActive(false);
        setTime(0);
    }
  return (
    <div>
      <Time time={time}/>
      <ControlButtons 
      active={isActive}
      paused={isPaused}
      handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      
      />
    </div>
  )
}

export default Stopwatch
