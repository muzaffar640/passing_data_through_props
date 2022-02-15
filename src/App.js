import { useState } from "react";
import "./App.css";
import ChildA from "./ChildA";

function App() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <h4>Passing data through grand child component using props....</h4>
      <p>Show the data on ChildC when the input should be on App.js file..</p>
      <ChildA setText={text} />
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default App;
