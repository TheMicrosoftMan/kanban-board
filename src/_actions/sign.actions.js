import { registerConstants, loginConstants } from "../_constants";

export const registerUser = authParams => dispatch => {
  dispatch({ type: registerConstants.USER_REGISTER_REQUEST });
  try {
    let newUser = {
      id: 1,
      login: authParams.login,
      password: authParams.password
    };
    let users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      localStorage.setItem("users", JSON.stringify([newUser]));
    }
    dispatch({
      type: registerConstants.USER_REGISTER_SUCCESS,
      payload: {
        login: authParams.login,
        password: authParams.password
      }
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: registerConstants.USER_REGISTER_ERROR
    });
  }
};

export const loginUser = authParams => dispatch => {
  dispatch({ type: loginConstants.USER_LOGIN_REQUEST });
  try {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users.some(user => user.login === authParams.login)) {
      if (users.some(user => user.password === authParams.password)) {
        dispatch({
          type: loginConstants.USER_LOGIN_SUCCESS,
          payload: {
            login: authParams.login,
            password: authParams.password
          }
        });
        return true;
      } else {
        dispatch({
          type: loginConstants.USER_LOGIN_ERROR
        });
        return false;
      }
    } else {
      dispatch({
        type: loginConstants.USER_LOGIN_ERROR
      });
      return false;
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: loginConstants.USER_LOGIN_ERROR
    });
  }
};
