import React from "react";

const TransparentButton = props => {
  return (
    <div
      className={`transparent-button ${props.className && props.className}`}
      onClick={props.clickHandler}
    >
      {props.value}
    </div>
  );
};

export default TransparentButton;
