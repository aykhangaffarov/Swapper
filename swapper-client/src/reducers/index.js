import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import perfumeReducer from './perfume-reducer';

export default combineReducers({
  auth,
  message,
  perfume:perfumeReducer
});
