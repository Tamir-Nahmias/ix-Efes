import { useState } from "react";
import "./App.css";
import Square from "./square";

function App(props) {
  const matrixSize = props.matrixSize;
  const [isX, setIsX] = useState(true);
  const [matrix, setMatrix] = useState([]);
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
      checkLine(0, 1, 2) || // top row
      checkLine(3, 4, 5) || // middle row
      checkLine(6, 7, 8) || // bottom row
      checkLine(0, 3, 6) || // left column
      checkLine(1, 4, 7) || // middle column
      checkLine(2, 5, 8) || // right column
      checkLine(0, 4, 8) || // diagonal \
      checkLine(2, 4, 6) // diagonal /
    );
  }

  const updateArr = (index, value) => {
    const newArr = [...matrix];
    newArr[index] = value;
    setMatrix(newArr);
    setmatrixesSteps([...matrixesSteps, matrix]);
  };

  return (
    <>
      <div className="win-title">{winner() && "you won"}</div>
      <div className="conatainerBox" style={{ "--cubesize": matrixSize }}>
        {Array(matrixSize ** 2)
          .fill(null)
          .map((_, index) => (
            <Square
              key={index}
              isX={isX}
              setIsX={setIsX}
              id={index.toString()}
              updateArr={updateArr}
              winner={winner}
            />
          ))}

        {/* <Square
          isX={isX}
          setIsX={setIsX}
          id="0"
          updateArr={updateArr}
          winner={winner}
        />
        <Square
          isX={isX}
          setIsX={setIsX}
          id="1"
          updateArr={updateArr}
          winner={winner}
        />
        <Square
          isX={isX}
          setIsX={setIsX}
          id="2"
          updateArr={updateArr}
          winner={winner}
        />
        <Square
          isX={isX}
          setIsX={setIsX}
          id="3"
          updateArr={updateArr}
          winner={winner}
        />
        <Square
          isX={isX}
          setIsX={setIsX}
          id="4"
          updateArr={updateArr}
          winner={winner}
        />
        <Square
          isX={isX}
          setIsX={setIsX}
          id="5"
          updateArr={updateArr}
          winner={winner}
        />
        <Square
          isX={isX}
          setIsX={setIsX}
          id="6"
          updateArr={updateArr}
          winner={winner}
        />
        <Square
          isX={isX}
          setIsX={setIsX}
          id="7"
          updateArr={updateArr}
          winner={winner}
        />
        <Square
          isX={isX}
          setIsX={setIsX}
          id="8"
          updateArr={updateArr}
          winner={winner}
        /> */}
      </div>
    </>
  );
}

export default App;
