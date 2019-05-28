import React from "react";
import TransparentButton from "../../components/TransparentButton";

const Menu = props => {
  return (
    <div className={`menu ${props.showMenu ? "show" : "hide"}`}>
      <div className="menu-username">
        <img
          className="username-image"
          src={`https://ui-avatars.com/api/?rounded=true&background=65aadd&color=fff&name=${
            props.username
          }`}
          alt={props.username}
        />
        <span className="username">{props.username}</span>
      </div>
      <TransparentButton
        clickHandler={props.addColumn}
        className="menu-btn"
        value="Додати колонку"
      />
      <TransparentButton
        clickHandler={props.userExit}
        className="menu-btn"
        value="Вихід"
      />
    </div>
  );
};

export default Menu;
