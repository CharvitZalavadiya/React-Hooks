import React, { useState, useMemo } from "react";

function MemoCounter() {
  const [cone, setCone] = useState(0);
  const [ctwo, setCtwo] = useState(0);

  const incOne = () => {
    setCone(cone + 1);
  };
  const incTwo = () => {
    setCtwo(ctwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 340000000) i++;
    return cone % 2 === 0;
  }, [cone]);
  return (
    <div>
      <div>
        <button onClick={incOne}>Count One : {cone}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incTwo}>Count Two : {ctwo}</button>
      </div>
    </div>
  );
}

export default MemoCounter;
