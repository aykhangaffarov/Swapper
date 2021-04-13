import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import items from "./items"
import category from './category';
export default combineReducers({
  auth,
  message,
  item:items,
  categoryFilter: category
});
