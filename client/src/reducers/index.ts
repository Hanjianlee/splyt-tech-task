import { combineReducers } from "redux";
import UserReducer from "./usersReducer";
import DriverReducer from "./driverReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  driver: DriverReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
