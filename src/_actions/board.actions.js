import { boardConstants } from "../_constants";

export const getBoard = login => dispatch => {
  dispatch({ type: boardConstants.GET_BOARD_REQUEST });
  try {
    let board = JSON.parse(localStorage.getItem(`${login}_board`));
    dispatch({
      type: boardConstants.GET_BOARD_SUCCESS,
      payload: {
        board
      }
    });
    return board;
  } catch (error) {
    console.error(error);
    dispatch({
      type: boardConstants.GET_BOARD_ERROR
    });
  }
};

export const addBoard = login => dispatch => {
  dispatch({ type: boardConstants.ADD_BOARD_REQUEST });
  try {
    if (!!localStorage.getItem(`${login}_board`)) {
      dispatch({
        type: boardConstants.ADD_BOARD_ERROR
      });
    } else {
      let newBoard = {
        columns: []
      };
      localStorage.setItem(`${login}_board`, JSON.stringify(newBoard));
      dispatch({
        type: boardConstants.ADD_BOARD_SUCCESS
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: boardConstants.ADD_BOARD_ERROR
    });
  }
};

export const addColumn = (login, columnName) => dispatch => {
  dispatch({ type: boardConstants.ADD_COLUMN_REQUEST });
  try {
    let board = JSON.parse(localStorage.getItem(`${login}_board`));
    let randID = Math.random() * (1000 - 1) + 1;
    let column = {
      id: randID,
      columnName: columnName,
      cards: []
    };
    board.columns.push(column);
    localStorage.setItem(`${login}_board`, JSON.stringify(board));

    dispatch({
      type: boardConstants.ADD_COLUMN_SUCCESS,
      payload: board
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: boardConstants.ADD_COLUMN_ERROR
    });
  }
};

export const deleteColumn = (login, columnID) => dispatch => {
  dispatch({ type: boardConstants.DELETE_COLUMN_REQUEST });
  try {
    let board = JSON.parse(localStorage.getItem(`${login}_board`));
    let newColumnsArr = board.columns.filter(column => {
      return column.id !== columnID;
    });
    board.columns = newColumnsArr;
    localStorage.setItem(`${login}_board`, JSON.stringify(board));
    dispatch({
      type: boardConstants.DELETE_COLUMN_SUCCESS,
      payload: board
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: boardConstants.DELETE_COLUMN_ERROR
    });
  }
};
