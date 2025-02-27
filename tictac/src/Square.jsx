import { useState } from "react";

const Square = (props) => {
  //const value = props.value
  const { isX, setIsX, id, updateArr } = { ...props };
  //const isX = props.isX
  const [value, setValue] = useState("");
  //const taken = props.taken // <= this is a function passed
  const [isTaken, setIsTaken] = useState(false);
  //const updateArr = props.updateArr
  //const id = props.id

  return (
    <>
      <button
        onClick={() => {
          if (!isTaken) {
            setIsTaken(true);
            setValue(isX ? "O" : "X");
            updateArr(id, isX ? "O" : "X");
            setIsX(!isX);
          }
        }}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
