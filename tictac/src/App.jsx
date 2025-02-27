import { useState } from "react";
import "./App.css";
import Square from "./square";

//const matrixSize = prompt("please enter a value:")

function App() {
  const [isX, setIsX] = useState(true);
  const [matrix, setMatrix] = useState([, , , , , , , ,]);
  const [matrixesSteps, setmatrixesSteps] = useState([[]]);

  function winner() {
    // First, define what an empty/uninitialized cell looks like
    const isEmpty = (value) =>
      value === null || value === undefined || value === "";

    // Helper function to check a line (3 positions)
    const checkLine = (a, b, c) => {
      return (
        matrix[a] === matrix[b] &&
        matrix[b] === matrix[c] &&
        !isEmpty(matrix[a])
      );
    };

    // Check all possible winning lines
    return (
      (checkLine(0, 1, 2) || // top row
        checkLine(3, 4, 5) || // middle row
        checkLine(6, 7, 8) || // bottom row
        checkLine(0, 3, 6) || // left column
        checkLine(1, 4, 7) || // middle column
        checkLine(2, 5, 8) || // right column
        checkLine(0, 4, 8) || // diagonal \
        checkLine(2, 4, 6)) && ( // diagonal /
        <>
          <h1>You won</h1>
        </>
      )
    );
  }

  const updateArr = (index, value) => {
    const newArr = [...matrix];
    newArr[index] = value;
    setMatrix(newArr);
    //setmatrixesSteps(...matrixesSteps, newArr);
  };

  return (
    <>
      {winner()}
      <div className="conatainerBox">
        <div>
          <Square isX={isX} setIsX={setIsX} id="0" updateArr={updateArr} />
          <Square isX={isX} setIsX={setIsX} id="1" updateArr={updateArr} />
          <Square isX={isX} setIsX={setIsX} id="2" updateArr={updateArr} />
        </div>
        <div>
          <Square isX={isX} setIsX={setIsX} id="3" updateArr={updateArr} />
          <Square isX={isX} setIsX={setIsX} id="4" updateArr={updateArr} />
          <Square isX={isX} setIsX={setIsX} id="5" updateArr={updateArr} />
        </div>
        <div>
          <Square isX={isX} setIsX={setIsX} id="6" updateArr={updateArr} />
          <Square isX={isX} setIsX={setIsX} id="7" updateArr={updateArr} />
          <Square isX={isX} setIsX={setIsX} id="8" updateArr={updateArr} />
        </div>
      </div>
    </>
  );
}

export default App;
