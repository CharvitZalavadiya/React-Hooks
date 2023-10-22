import React, { useReducer } from "react";

const initialState = {
  firstCounter: 1,
  secondCounter: 2,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <div>First Count : {count.firstCounter}</div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement 5
        </button>
      </div>
      <div>
        <div>Second Counter : {count.secondCounter}</div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment Second
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement Second
        </button>
        <button onClick={() => dispatch({ type: "increment2", value: 10 })}>
          Increment 10
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 10 })}>
          Decrement 10
        </button>
      </div>
      <div>
        Reset Both Counter to Initial value -
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default CounterTwo;
