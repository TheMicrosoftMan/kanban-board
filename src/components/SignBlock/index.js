import React from "react";

class SignBlock extends React.Component {
  state = {
    login: "",
    password: ""
  };

  render() {
    return (
      <div className={this.props.isLogin ? "sign-in" : "sign-up"}>
        <h3>{this.props.isLogin ? "Login" : "Registration"}</h3>
        <input
          onChange={e => {
            this.setState({ login: e.target.value });
          }}
          type="text"
        />
        <input
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
          type="password"
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
          {this.props.isLogin ? "Sign in" : "Sign up"}
        </button>
      </div>
    );
  }
}

export default SignBlock;
