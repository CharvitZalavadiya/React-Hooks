import React, { useContext } from "react";
import { UserContextName, UserContextSurname } from "../App";

function CompFTwo() {

    const name=useContext(UserContextName)
    const surname=useContext(UserContextSurname)
  return (
    <div>
        Mentos Zindagi : {name} {surname}
    </div>
  );
}

export default CompFTwo;