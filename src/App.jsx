import { useState } from "react";
import Toggle from "./components/Toggle";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className='app'
      style={toggle ? { backgroundColor: "#000" } : { backgroundColor: "#fff" }}
    >
      <Toggle toggle={toggle} handleToggleChange={handleToggleChange} />
    </div>
  );
}

export default App;
