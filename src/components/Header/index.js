import React from "react";
import TransparentButton from "../TransparentButton";

const Header = props => {
  return (
    <div className="d-flex header">
      <div className="d-flex_con-center">
        <span className="username">{props.username}</span>
      </div>
      <span className="logo">Kanban board</span>
      <TransparentButton value="Exit" />
    </div>
  );
};

export default Header;
