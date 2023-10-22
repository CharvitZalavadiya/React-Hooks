import React from "react";
import useUserInput from "./33-customhook";

function UserForm() {
  const [firstname, bindFirstName, resetFirstName] = useUserInput("");
  const [lastname, bindLastName, resetLastName] = useUserInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Hello ${firstname} ${lastname}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name : </label>
          <input {...bindFirstName} type="text"></input>
        </div>
        <div>
          <label>Last Name : </label>
          <input {...bindLastName} type="text"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
