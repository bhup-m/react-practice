import { useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(true);

  
  return (
    <div className="App">
      <button onClick={()=>setToggle(!toggle)}>{toggle?"Hide Me":"Show Me"}</button>
      {toggle?(<p>This Toggle Content</p>):(null)}
    </div>
  );
}