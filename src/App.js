import React from "react";
import { connect } from "react-redux";
import { Login } from "./containers/Login";
import { Main } from "./containers/Main";
import "./_styles/main.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">{this.props.isAuth ? <Main /> : <Login />}</div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return user;
}

const connectedApp = connect(
  mapStateToProps,
  null
)(App);
export { connectedApp as App };
