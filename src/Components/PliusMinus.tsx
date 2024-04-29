import React, { useState } from "react";
import { Counter1 } from "../Interfaces/Interface";

const PliusMinus = ({ setCount }: Counter1) => {
  //   const [count, setCount] = useState();
  return (
    <div>
      PliusMinus
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      {/* {count} */}
      <button onClick={() => setCount((prev) => prev - 3)}>-</button>
    </div>
  );
};

export default PliusMinus;
