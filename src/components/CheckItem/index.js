import React from "react";
import { ReactComponent as Complete } from "../../images/complete.svg";

const CheckItem = props => {
  return (
    <div className="check-item">
      <div
        className={props.isCheck ? "check" : "no-check"}
        onClick={() => props.checkClick && props.checkClick(props.id)}
      >
        <Complete className="check-icon" />
      </div>
      <div
        className={`check-item__text ${props.isCheck &&
          "check-item__text_complete"}`}
        onClick={() => props.checkClick && props.checkClick(props.id)}
      >
        {props.text}
      </div>
    </div>
  );
};

export default CheckItem;
