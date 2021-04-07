import {combineReducers} from "redux";
import auth from "./auth";
import message from "./message";
import perfumeReducer from "./perfume-reducer";

const rootReducer = combineReducers({
    auth,
    message,
    perfume:perfumeReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
