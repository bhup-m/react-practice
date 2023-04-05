import React,{useEffect} from 'react'

function Title() {
    const name = "Sunny"
    document.title = name
  return (
    <h2>{name}</h2>
  )
}

export default Title

// function Title() {
//     useEffect(()=>{
//         document.title = "Sunny";
//     },[])
//   return (
//     <h2>This is UseEffect</h2>
//   )
// }

// export default Title
