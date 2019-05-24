import React from "react";

const TransparentButton = props => {
  return (
    <div className="transparent-button" onClick={props.clickHandler}>
      {props.value}
    </div>
  );
};

export default TransparentButton;
