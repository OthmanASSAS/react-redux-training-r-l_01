import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification_reducer";
import ActionInfoReducer from './action_info_reducer'

const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  actionInfo:ActionInfoReducer
});

export default rootReducer;
