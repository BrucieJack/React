import React, { Suspense, Profiler } from "react";
// import LifeCycle from "@components/LifeCycle";
const LifeCycle = React.lazy(() => import("@components/LifeCycle"));

const LifeCyclePage = () => {
  const onRenderCallback = (id, phase) => {};

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>Жизненнный цикл</h1>
      <Profiler id="LifeCycle" onRender={onRenderCallback}>
        <LifeCycle />
      </Profiler>
    </Suspense>
  );
};

export { LifeCyclePage };
