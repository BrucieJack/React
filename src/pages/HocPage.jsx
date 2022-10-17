import React from "react";
import { LifeCycle } from "../components/LifeCycle";
import { withClickCounter } from "../hoc/withClickCounter";

const HocPage = () => {
  const NewClicker = withClickCounter(LifeCycle);

  return (
    <>
      <h1>Компонент высшего порядка</h1>
      <NewClicker />
    </>
  );
};

export { HocPage };
