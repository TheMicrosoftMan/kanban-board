import React from "react";
import { connect } from "react-redux";
import SignBlock from "../../components/SignBlock";
import * as signActions from "../../_actions/sign.actions";
import * as boardActions from "../../_actions/board.actions";

class Login extends React.Component {
  state = {
    loginError: "",
    registrationError: ""
  };

  componentDidMount() {
    this.props.userAutoLogin();
  }

  userRegister = (login, password) => {
    if (this.props.registerUser({ login, password })) {
      this.props.addBoard(login);
    } else {
      this.setState({ registrationError: "Такий логін вже існує" });
    }
  };

  userLogin = (login, password) => {
    if (!this.props.userLogin({ login, password })) {
      this.setState({ loginError: "Не правильний логін або пароль" });
    }
  };

  render() {
    return (
      <div className="login">
        <div className="login-block">
          <span className="logo">Kanban board</span>
          <div className="login-block_auth-blocks">
            <SignBlock
              isLogin={true}
              signHandler={this.userLogin}
              error={this.state.loginError}
            />
            <SignBlock
              isLogin={false}
              signHandler={this.userRegister}
              error={this.state.registrationError}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  registerUser: signActions.registerUser,
  userAutoLogin: signActions.autologinUser,
  userLogin: signActions.loginUser,
  addBoard: boardActions.addBoard
};

const connectedLogin = connect(
  null,
  mapDispatchToProps
)(Login);
export { connectedLogin as Login };
