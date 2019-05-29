import React from "react";
import TransparentButton from "../../components/TransparentButton";

const Menu = props => {
  return (
    <div className={`menu ${props.showMenu ? "menu_show" : "menu_hide"}`}>
      <div className="menu__username">
        <img
          className="menu__username_image"
          src={`https://ui-avatars.com/api/?rounded=true&background=65aadd&color=fff&name=${
            props.username
          }`}
          alt={props.username}
        />
        <span className="menu__username_name">{props.username}</span>
      </div>
      <TransparentButton
        clickHandler={props.addColumn}
        className="wide-btn"
        value="Додати колонку"
      />
      <TransparentButton
        clickHandler={props.userExit}
        className="wide-btn"
        value="Вихід"
      />
    </div>
  );
};

export default Menu;
