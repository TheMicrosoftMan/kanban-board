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

export const editColumn = (login, columnID, newColumnName) => dispatch => {
  dispatch({ type: boardConstants.EDIT_COLUMN_REQUEST });
  try {
    let board = JSON.parse(localStorage.getItem(`${login}_board`));
    let newColumnsArr = board.columns.map(column => {
      if (column.id === columnID) {
        column.columnName = newColumnName;
        return column;
      } else {
        return column;
      }
    });
    board.columns = newColumnsArr;
    localStorage.setItem(`${login}_board`, JSON.stringify(board));
    dispatch({
      type: boardConstants.EDIT_COLUMN_SUCCESS,
      payload: board
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: boardConstants.EDIT_COLUMN_ERROR
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

export const addCard = (login, columnID, card) => dispatch => {
  dispatch({ type: boardConstants.ADD_CARD_REQUEST });
  try {
    let board = JSON.parse(localStorage.getItem(`${login}_board`));
    let updatedColumn = board.columns.filter(column => {
      return column.id === columnID;
    });
    updatedColumn[0].cards.push(card);
    let updatedColumns = board.columns.map(column => {
      if (column.id === updatedColumn.id) {
        return updatedColumn[0];
      } else {
        return column;
      }
    });
    board.columns = updatedColumns;
    localStorage.setItem(`${login}_board`, JSON.stringify(board));
    dispatch({
      type: boardConstants.ADD_CARD_SUCCESS,
      payload: board
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: boardConstants.ADD_CARD_ERROR
    });
  }
};

export const editCard = (login, columnID, editedCard) => dispatch => {
  dispatch({ type: boardConstants.EDIT_CARD_REQUEST });
  try {
    let board = JSON.parse(localStorage.getItem(`${login}_board`));
    let selectedColumn = board.columns.filter(column => {
      return column.id === columnID;
    });
    let newCardsArr = selectedColumn[0].cards.map(card => {
      if (card.id === editedCard.id) {
        return editedCard;
      } else {
        return card;
      }
    });
    selectedColumn[0].cards = newCardsArr;
    let updatedColumns = board.columns.map(column => {
      if (column.id === selectedColumn.id) {
        return selectedColumn[0];
      } else {
        return column;
      }
    });
    board.columns = updatedColumns;
    localStorage.setItem(`${login}_board`, JSON.stringify(board));
    dispatch({
      type: boardConstants.EDIT_CARD_SUCCESS,
      payload: board
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: boardConstants.EDIT_CARD_ERROR
    });
  }
};

export const deleteCard = (login, columnID, cardID) => dispatch => {
  dispatch({ type: boardConstants.DELETE_CARD_REQUEST });
  try {
    let board = JSON.parse(localStorage.getItem(`${login}_board`));
    let selectedColumn = board.columns.filter(column => {
      return column.id === columnID;
    });
    let newCardsArr = selectedColumn[0].cards.filter(card => {
      if (card.id === cardID) {
        return false;
      } else {
        return true;
      }
    });
    selectedColumn[0].cards = newCardsArr;
    let updatedColumns = board.columns.map(column => {
      if (column.id === selectedColumn.id) {
        return selectedColumn[0];
      } else {
        return column;
      }
    });
    board.columns = updatedColumns;
    localStorage.setItem(`${login}_board`, JSON.stringify(board));
    dispatch({
      type: boardConstants.DELETE_CARD_SUCCESS,
      payload: board
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: boardConstants.DELETE_CARD_ERROR
    });
  }
};
