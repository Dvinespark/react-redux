import { useState, useEffect, useRef } from "react";
import ULComponent from "./components/ULComponent";
import TestComponent from "./components/TestComponent";

function App() {
  const [name, setName] = useState("Ram");
  // useEffect(() => {
  //   console.log("*** App: " + name);
  // },[name]);


  const [checked, setChecked] = useState(false);
  const f_name = useRef();
  const f_color = useRef();

  const setNameFunction = (value) => {
    let changedName = value + " sapkota";
    setName(changedName);
  }
    
  const formOnSubmit = (e) => {
    e.preventDefault();
    // hook to get the value;
    const first_name = f_name.current.value;
    const hex_color = f_color.current.value;
    alert(`${first_name} ${hex_color}`);
    // reset the value
    f_name.current.value = "";
    f_color.current.value = "";
  }

  return (
    <div className="App">
      {/* <ULComponent /> */}
      <TestComponent />
      <h1>Hello { name }</h1>
      <button onClick={() => {
        setNameFunction("subash");
      }}>Click me</button>

      <input type="checkbox" value={checked} onChange={(checked) => {
        setChecked((checked) => !checked)
      }} />
      <label>Checked</label>

      {/* // form example */}

      <form onSubmit={formOnSubmit}>
        <input ref={f_name} type="text" placeholder="Enter your name" />
        <input ref={f_color} type="color" />
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
}

export default App;
