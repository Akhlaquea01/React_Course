
import './App.css';
import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    counter += 1;
    setCounter(counter);
  };
  const removeValue = () => {
    counter -= 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
