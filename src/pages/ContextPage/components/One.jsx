import React from "react";

const One = (props) => {
  return (
    <>
      <p> Компонент 1</p>
      {props.children}
    </>
  );
};

export { One };
