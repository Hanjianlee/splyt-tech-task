import { all,fork } from "@redux-saga/core/effects";
import driversSaga from './driversSaga';
import usersSaga from './usersSaga'

export default function* rootSaga(){
    yield all([fork(driversSaga)])
    yield all([fork(usersSaga)])
}