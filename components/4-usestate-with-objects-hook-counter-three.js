import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <label>First Name : </label>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <br />
      <label>Last Name : </label>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <p>Your name is : {name.firstName} {name.lastName}</p>
    </form>
  );
}

export default HookCounterThree;
