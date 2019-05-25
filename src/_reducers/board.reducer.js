import { boardConstants } from "../_constants";

const initialState = {
  board: []
};

export function board(state = initialState, action) {
  switch (action.type) {
    case boardConstants.ADD_BOARD_REQUEST:
      return {
        ...state
      };
    case boardConstants.ADD_BOARD_SUCCESS:
      return {
        ...state
      };
    case boardConstants.ADD_BOARD_ERROR:
      return {
        ...state
      };
    case boardConstants.GET_BOARD_REQUEST:
      return {
        ...state
      };
    case boardConstants.GET_BOARD_SUCCESS:
      return {
        board: action.payload.board
      };
    case boardConstants.GET_BOARD_ERROR:
      return {
        ...state
      };
    case boardConstants.ADD_COLUMN_REQUEST:
      return {
        ...state
      };
    case boardConstants.ADD_COLUMN_SUCCESS:
      return {
        board: action.payload
      };
    case boardConstants.ADD_COLUMN_ERROR:
      return {
        ...state
      };
    case boardConstants.EDIT_COLUMN_REQUEST:
      return {
        ...state
      };
    case boardConstants.EDIT_COLUMN_SUCCESS:
      return {
        board: action.payload
      };
    case boardConstants.EDIT_COLUMN_ERROR:
      return {
        ...state
      };
    case boardConstants.DELETE_COLUMN_REQUEST:
      return {
        ...state
      };
    case boardConstants.DELETE_COLUMN_SUCCESS:
      return {
        board: action.payload
      };
    case boardConstants.DELETE_COLUMN_ERROR:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
