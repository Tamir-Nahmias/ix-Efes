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

//and this is a new comment from square deriving from the main branch
//intersitng ti will be to seeeee what will happen now ?
