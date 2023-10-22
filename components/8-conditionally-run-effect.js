import React, { useState, useEffect } from "react";

function ConditionallyRun() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("title updating");
    document.title = `Clicked ${count} Times`;
  },[count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default ConditionallyRun;
