import React, { useState } from "react";
import HooksMouse from "./9-run-effects-only-once";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HooksMouse />}
    </div>
  );
}

export default MouseContainer;
