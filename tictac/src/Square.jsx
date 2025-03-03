import { useState } from "react";

const Square = (props) => {
  const { isX, setIsX, id, updateArr, winner } = { ...props };
  const [value, setValue] = useState("");
  const [isTaken, setIsTaken] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          if (!isTaken && !winner()) {
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

//new comment to delete
