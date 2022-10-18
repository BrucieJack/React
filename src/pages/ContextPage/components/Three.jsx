import React from "react";

const Three = (props) => {
  return (
    <>
      <p>Компонент 3</p>
      {props.children}
    </>
  );
};

export { Three };
