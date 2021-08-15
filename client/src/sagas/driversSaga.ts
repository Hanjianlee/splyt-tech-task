import { all, takeLatest, put, call, select } from "@redux-saga/core/effects";
import { get } from "../utils/server";
import { DRIVERS } from "../actionTypes/driversTypes";
import { ActionInterface } from "../reducers/driverReducer";
import { AxiosResponse } from "axios";
import { userSelector, UserInterface } from "../reducers/usersReducer";

function* getDrivers(action: ActionInterface) {
  try {
    const user: UserInterface = yield select(userSelector as any);
    const { HQLocation, driverCount } = user;
    if (Number(driverCount) < 1)
      return put({ type: DRIVERS.GET_NEAREST_DRIVERS.FAILED, payload: {} });
    const response: AxiosResponse = yield call(get as any, {
      model: DRIVERS.MODEL,
      route: "getDrivers",
      query: {
        count: driverCount,
        longitude: HQLocation.longitude,
        latitude: HQLocation.latitude,
      },
    });
    if (response.status >= 400)
      return put({ type: DRIVERS.GET_NEAREST_DRIVERS.FAILED, payload: {} });
    console.log("success");
    yield put({
      type: DRIVERS.GET_NEAREST_DRIVERS.SUCCESS,
      payload: { ...response.data, count: response.data.drivers.length },
    });
  } catch (error) {
    yield put({ type: DRIVERS.GET_NEAREST_DRIVERS.FAILED, payload: { error } });
  }
}

function* driversSaga() {
  yield all([takeLatest(DRIVERS.GET_NEAREST_DRIVERS.REQUESTED, getDrivers)]);
}

export default driversSaga;
