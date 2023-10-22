import React from "react";
import { UserContextName, UserContextSurname } from "../App";

function CompF() {

  return (
    <div>
      <UserContextName.Consumer>
        {(name) => {
          return (
            <UserContextSurname.Consumer>
              {(surname) => {
                return (
                  <div>
                    Aam Zindagi :{name} {surname}
                  </div>
                );
              }}
            </UserContextSurname.Consumer>
          );
        }}
      </UserContextName.Consumer>

    </div>
  );
}

export default CompF;
