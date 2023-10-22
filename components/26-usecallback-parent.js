import React, { useState, useCallback } from "react";
import Button from "./26-usecallback-button";
import Count from "./26-usecallback-count";
import Title from "./26-usecallback-title";

function ParentComp() {
  const [age, setAge] = useState(19);
  const [salary, setSalary] = useState(100000);
  const incAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComp;
