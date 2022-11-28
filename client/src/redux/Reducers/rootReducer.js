import { combineReducers } from "redux";

// reducers or storage unit
import auth from "./auth/auth.reduer";
import user from "./user/user.reducer";

const rootReducer = combineReducers({
    auth,
    user
});

export default rootReducer;
