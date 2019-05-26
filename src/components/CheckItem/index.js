import React from "react";

const CheckItem = props => {
  return (
    <div className="check-item">
      <div
        className={props.isCheck ? "check" : "no-check"}
        onClick={() => props.checkClick(props.id)}
      />
      <div className="check-item_text">{props.text}</div>
    </div>
  );
};

export default CheckItem;
