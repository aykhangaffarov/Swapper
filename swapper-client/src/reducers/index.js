import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import shop from './shop.reducer';
import {brandFilterReducer} from "./brand.filter.reducer";
import {orderByPriceReducer} from "./orderByPrice.filter.reducer";
import {paginationReducer} from "./pagination.reducer";

export default combineReducers({
  auth,
  message,
  shop,
  brandFilter: brandFilterReducer,
  orderBy: orderByPriceReducer,
  pagination: paginationReducer
});
