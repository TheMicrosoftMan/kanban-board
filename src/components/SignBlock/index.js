import React from "react";

class SignBlock extends React.Component {
  state = {
    login: "",
    password: ""
  };

  render() {
    return (
      <div className={this.props.isLogin ? "sign-in" : "sign-up"}>
        <h3>{this.props.isLogin ? "Увійдіть" : "Зареєструйтесь"}</h3>
        <input
          onChange={e => {
            this.setState({ login: e.target.value });
          }}
          type="text"
          placeholder="Логін"
        />
        <input
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
          type="password"
          placeholder="Пароль"
        />
        {this.props.error && (
          <span className="error-message">{this.props.error}</span>
        )}
        <button
          onClick={() =>
            this.props.signHandler(this.state.login, this.state.password)
          }
          type="submit"
        >
          {this.props.isLogin ? "Увійти" : "Зареєструватись"}
        </button>
      </div>
    );
  }
}

export default SignBlock;
