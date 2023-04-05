import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(true);

  return (
    <div className="App">
      <input
        type="text"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button disabled={!checked}>Submit</button>
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Accept Terms & Conditions
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
         <button disable={value.length<1}>Submit</button>
    </div>
  );
}
