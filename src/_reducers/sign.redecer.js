import { registerConstants, loginConstants } from "../_constants";

const initialState = {
  isAuth: false,
  login: "",
  password: ""
};

export function user(state = initialState, action) {
  switch (action.type) {
    case registerConstants.USER_REGISTER_REQUEST:
      return {
        ...state
      };
    case registerConstants.USER_REGISTER_SUCCESS:
      return {
        login: action.payload.login,
        password: action.payload.password,
        isAuth: true
      };
    case registerConstants.USER_REGISTER_ERROR:
      return {
        ...state
      };
    case loginConstants.USER_LOGIN_REQUEST:
      return {
        ...state
      };
    case loginConstants.USER_LOGIN_SUCCESS:
      return {
        login: action.payload.login,
        password: action.payload.password,
        isAuth: true
      };
    case loginConstants.USER_LOGIN_ERROR:
      return {
        ...state
      };
    case loginConstants.USER_EXIT_REQUEST:
      return {
        ...state
      };
    case loginConstants.USER_EXIT_SUCCESS:
      return {
        ...initialState
      };
    case loginConstants.USER_EXIT_ERROR:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
