import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import items from "./items"
import category from './category';
import myitems from "./myitems";
import swapRequests from "./swaprequests";
export default combineReducers({
  auth,
  message,
  item:items,
  categoryFilter: category,
  myitems:myitems,
  myswaprequests:swapRequests
});
