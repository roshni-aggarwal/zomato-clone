import { combineReducers } from "redux";

// reducers or storage unit
import auth from "./auth/auth.reduer";
import user from "./user/user.reducer";
import restaurant from "./restaurant/restaurant.reducer";
import image from "./image/image.reducer";

const rootReducer = combineReducers({
  auth,
  user,
  restaurant,
  image,
});

export default rootReducer;
