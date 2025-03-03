import { useState } from "react";
import "./App.css";
import Square from "./square";

function App(props) {
  const matrixSize = props.matrixSize;
  const [isX, setIsX] = useState(true);
  const [matrix, setMatrix] = useState(Array(matrixSize ** 2).fill(null));
  const [matrixesSteps, setmatrixesSteps] = useState([[]]);

  function winner() {
    // First, define what an empty/uninitialized cell looks like
    const isEmpty = (value) =>
      value === null || value === undefined || value === "";

    const arr = [...matrix];
    const diagonalArr1 = [];
    const diagonalArr2 = [];

    for (let i = 0, j = 1; i < matrixSize; i++, j++) {
      diagonalArr1.push(arr[i + matrixSize * i]);
      diagonalArr2.push(arr[(matrixSize - 1) * j]);
    }

    //the below is for the colomuns :
    const arrofCol = [];
    let i = 0,
      j = 0;

    while (j < matrixSize) {
      const arrhelper = [];
      while (i < matrixSize) {
        arrhelper.push(arr[i * matrixSize + j]);
        i++;
      }
      j++;
      i = 0;
      arrofCol.push(arrhelper);
    }

    //the below is for the rows
    const arrOfRows = [];

    while (arr.length !== 0) {
      arrOfRows.push(arr.splice(0, matrixSize));
    }

    const CombinedArrays = [
      ...arrOfRows,
      ...arrofCol,
      [...diagonalArr1],
      [...diagonalArr2],
    ];
    console.log(CombinedArrays);
    return CombinedArrays.some((array) => {
      return array.every((val) => val === array[0] && !isEmpty(val));
    });
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
      </div>
    </>
  );
}

export default App;
