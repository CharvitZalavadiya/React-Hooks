import React, { useState, useEffect } from "react";

function HooksMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePostion = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffects Called");
    window.addEventListener("mousemove", logMousePostion);


    // return statement is only for file 10
    return () => {
      console.log("Unmounted");
      window.removeEventListener("mousemove", logMousePostion);
    };
  }, []);

  return (
    <div>
      Hooks X : {x} Y : {y}
    </div>
  );
}

export default HooksMouse;
