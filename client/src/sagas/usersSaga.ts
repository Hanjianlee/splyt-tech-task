import { USERS } from "../actionTypes/usersTypes";
import { all, takeLatest, put } from "@redux-saga/core/effects";
import { ActionInterface } from "../reducers/driverReducer";
import { getDistanceHF } from "../utils/getDistance";
import { HQLOCATIONS, HQLocationType } from "../utils/constants";
function* getNearestHQLocation(action: ActionInterface) {
  try {
    const { longitude, latitude } = action.payload;
    if (!longitude)
      yield put({
        type: USERS.GET_NEAREST_HQ_LOCATION.FAILED,
        payload: { error: "Invalid Longitude " },
      });
    if (!latitude)
      yield put({
        type: USERS.GET_NEAREST_HQ_LOCATION.FAILED,
        payload: { error: "Invalid Latitude" },
      });
    var nearestDistance: number = 0;
    var distance: number = 0;
    var nearestHQ: HQLocationType = {
      country: "",
      longitude: 0,
      latitude: 0,
    };
    /** Get Nearest HQ **/
    HQLOCATIONS.forEach((hq, index) => {
      distance = getDistanceHF({
        latitude1: latitude,
        longitude1: longitude,
        latitude2: hq.latitude,
        longitude2: hq.longitude,
      });
      if (index === 0) {
        nearestDistance = distance;
        nearestHQ = hq;
      } else if (nearestDistance > distance) {
        nearestDistance = distance;
        nearestHQ = hq;
      }
    });
    yield put({
      type: USERS.GET_NEAREST_HQ_LOCATION.SUCCESS,
      payload: { HQLocation: nearestHQ },
    });
  } catch (error) {
    yield put({
      type: USERS.GET_NEAREST_HQ_LOCATION.FAILED,
      payload: { error },
    });
  }
}

function* driversSaga() {
  yield all([
    takeLatest(USERS.GET_NEAREST_HQ_LOCATION.REQUESTED, getNearestHQLocation),
  ]);
}

export default driversSaga;
