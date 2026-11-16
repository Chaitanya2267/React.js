import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter < 10) {
      setCounter(counter + 1)
    } else {
      setCounter(0);
    }
  };

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    } 
  };

  const resetValue = () => {
    setCounter(0);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value{counter}</button>
      <button onClick={resetValue}>Reset value{counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
