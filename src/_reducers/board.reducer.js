import { boardConstants, columnConstants, cardConstants } from "../_constants";

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
    case columnConstants.ADD_COLUMN_REQUEST:
      return {
        ...state
      };
    case columnConstants.ADD_COLUMN_SUCCESS:
      return {
        board: action.payload
      };
    case columnConstants.ADD_COLUMN_ERROR:
      return {
        ...state
      };
    case columnConstants.UPDATE_COLUMN_REQUEST:
      return {
        ...state
      };
    case columnConstants.UPDATE_COLUMN_SUCCESS:
      return {
        board: action.payload.board
      };
    case columnConstants.UPDATE_COLUMN_ERROR:
      return {
        ...state
      };
    case columnConstants.EDIT_COLUMN_REQUEST:
      return {
        ...state
      };
    case columnConstants.EDIT_COLUMN_SUCCESS:
      return {
        board: action.payload
      };
    case columnConstants.EDIT_COLUMN_ERROR:
      return {
        ...state
      };
    case columnConstants.DELETE_COLUMN_REQUEST:
      return {
        ...state
      };
    case columnConstants.DELETE_COLUMN_SUCCESS:
      return {
        board: action.payload
      };
    case columnConstants.DELETE_COLUMN_ERROR:
      return {
        ...state
      };
    case cardConstants.ADD_CARD_REQUEST:
      return {
        ...state
      };
    case cardConstants.ADD_CARD_SUCCESS:
      return {
        board: action.payload
      };
    case cardConstants.ADD_CARD_ERROR:
      return {
        ...state
      };
    case cardConstants.EDIT_CARD_REQUEST:
      return {
        ...state
      };
    case cardConstants.EDIT_CARD_SUCCESS:
      return {
        board: action.payload
      };
    case cardConstants.EDIT_CARD_ERROR:
      return {
        ...state
      };
    case boardConstants.DELETE_CARD_REQUEST:
      return {
        ...state
      };
    case cardConstants.DELETE_CARD_SUCCESS:
      return {
        board: action.payload
      };
    case cardConstants.DELETE_CARD_ERROR:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
