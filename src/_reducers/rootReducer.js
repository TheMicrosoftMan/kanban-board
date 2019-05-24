import { combineReducers } from "redux";
import { user } from "./sign.redecer";
import { board } from "./board.reducer";

export default combineReducers({
  user,
  board
});
