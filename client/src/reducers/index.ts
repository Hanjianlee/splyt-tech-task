import { combineReducers } from "redux";
import UserReducer from './usersReducer';
import DriversReducer from "./driversReducer";

const rootReducer = combineReducers({
    user:UserReducer,
    drivers:DriversReducer
})


export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;