import React from "react";
import TransparentButton from "../TransparentButton";
import { ReactComponent as MenuToggler } from "../../images/menu.svg";

const Header = props => {
  return (
    <div className="d-flex header">
      <div className="d-flex_con-center">
        <img
          className="header__username-image"
          src={`https://ui-avatars.com/api/?rounded=true&background=65aadd&color=fff&name=${
            props.username
          }`}
          alt={props.username}
        />
        <span className="header__username">{props.username}</span>
      </div>
      <span className="header__logo">Kanban board</span>
      <TransparentButton
        clickHandler={props.menuToggle}
        value={<MenuToggler className="header__menu-toggle" />}
      />
    </div>
  );
};

export default Header;
