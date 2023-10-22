import React from "react";
import useCounter from "./32-customhook";

function CustomHookCounterTwo() {
  const [count, increment, decrement, reset] = useCounter(7, 3);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CustomHookCounterTwo;