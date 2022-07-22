import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { divide, transformNum } from "./func";
import { validateNumber, validateStringNotEmpty } from "./validation";

function App() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [num, setNum] = useState("122");
  const [numValid, setNumValid] = useState(12);
  const [stringValid, setStringValid] = useState("123");

  const handleClick = () => {
    const numTransformed = transformNum();
    setNum(numTransformed);
  };

  const handleNumClick = () => {
    const numTransformed = validateNumber(numValid);
  };

  const handleStringClick = () => {
    const numTransformed = validateStringNotEmpty(stringValid);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button>divide count {divide(44, 2)}</button>
      </div>
      <button onClick={handleClick}>click - {num}</button>
      <button onClick={handleNumClick}>click - {numValid}</button>
      <button onClick={handleStringClick}>click - {stringValid}</button>
    </div>
  );
}

export default App;
