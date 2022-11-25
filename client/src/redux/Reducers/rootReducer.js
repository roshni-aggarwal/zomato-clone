import { combineReducers } from "redux";

// reducers or storage unit
import auth from "./auth/auth.reduer";

const rootReducer = combineReducers({ auth });

export default rootReducer;
