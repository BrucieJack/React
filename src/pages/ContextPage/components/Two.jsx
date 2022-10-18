import React from "react";

const Two = (props) => {
  return (
    <>
      <p>Компонент 2</p>
      {props.children}
    </>
  );
};

export { Two };
