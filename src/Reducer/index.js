import { combineReducers } from "redux";
import LoginReducer from "../Reducer/Login-Reducer";
import AppHeaderReducer from "./AppHeader-Reducer";

const appReducer = combineReducers({
  token: LoginReducer,
  Title:AppHeaderReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
