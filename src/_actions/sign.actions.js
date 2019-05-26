import { registerConstants, loginConstants } from "../_constants";

export const registerUser = authParams => dispatch => {
  dispatch({ type: registerConstants.USER_REGISTER_REQUEST });
  try {
    let newUser = {
      login: authParams.login,
      password: authParams.password
    };
    let users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      if (users.some(user => user.login === newUser.login)) {
        dispatch({
          type: registerConstants.USER_REGISTER_ERROR
        });
        return false;
      } else {
        if (users) {
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));
        } else {
          localStorage.setItem("users", JSON.stringify([newUser]));
        }
        localStorage.setItem("lastAuthUser", JSON.stringify(newUser));
        dispatch({
          type: registerConstants.USER_REGISTER_SUCCESS,
          payload: {
            login: authParams.login,
            password: authParams.password
          }
        });
        return true;
      }
    } else {
      localStorage.setItem("users", JSON.stringify([newUser]));
      localStorage.setItem("lastAuthUser", JSON.stringify(newUser));
      dispatch({
        type: registerConstants.USER_REGISTER_SUCCESS,
        payload: {
          login: authParams.login,
          password: authParams.password
        }
      });
      return true;
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: registerConstants.USER_REGISTER_ERROR
    });
    return false;
  }
};

export const loginUser = authParams => dispatch => {
  dispatch({ type: loginConstants.USER_LOGIN_REQUEST });
  try {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users.some(user => user.login === authParams.login)) {
      if (users.some(user => user.password === authParams.password)) {
        let user = {
          id: 1,
          login: authParams.login,
          password: authParams.password
        };
        localStorage.setItem("lastAuthUser", JSON.stringify(user));
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

export const autologinUser = () => dispatch => {
  dispatch({ type: loginConstants.USER_LOGIN_REQUEST });
  try {
    let lastAuthUser = JSON.parse(localStorage.getItem("lastAuthUser"));
    if (lastAuthUser) {
      dispatch({
        type: loginConstants.USER_LOGIN_SUCCESS,
        payload: {
          login: lastAuthUser.login,
          password: lastAuthUser.password
        }
      });
    } else {
      dispatch({
        type: loginConstants.USER_LOGIN_ERROR
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: loginConstants.USER_LOGIN_ERROR
    });
  }
};

export const exitUser = () => dispatch => {
  dispatch({ type: loginConstants.USER_EXIT_REQUEST });
  try {
    localStorage.removeItem("lastAuthUser");
    dispatch({
      type: loginConstants.USER_EXIT_SUCCESS
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: loginConstants.USER_EXIT_ERROR
    });
  }
};
