import { USERS } from "../actionTypes/usersTypes";
import { RootState } from "../reducers";
export interface UserInterface {
  status: string | null;
  longitude: number | null;
  latitude: number | null;
  driverCount: string;
  geoPermission: string | null;
  nearestHQLocation: {
    longitude: number | null;
    latitude: number | null;
  };
}
interface Action {
  type: string;
  payload: object;
}
const initialState: UserInterface = {
  status: null,
  longitude: null,
  latitude: null,
  driverCount: "5",
  geoPermission: null,
  nearestHQLocation: {
    longitude: null,
    latitude: null,
  },
};
export default function UserReducer(state = initialState, action: Action) {
  switch (action.type) {
    case USERS.UPDATE_USER_LOCATION:
      return {
        status: "updated",
        driverCount: state.driverCount,
        nearestHQLocation: state.nearestHQLocation,
        ...action.payload,
      };
    case USERS.UPDATE_USER_DRIVER_COUNT:
      return {
        ...state,
        status: "updated",
        ...action.payload,
      };
    case USERS.GET_NEAREST_HQ_LOCATION.REQUESTED:
      return {
        ...state,
        nearestHQLocation: {
          longitude: 103.8522982,
          latitude: 1.285194,
        },
      };
    case USERS.GET_NEAREST_HQ_LOCATION.SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case USERS.GET_NEAREST_HQ_LOCATION.FAILED:
      return {
        ...state,
        nearestHQLocation: {
          longitude: 103.8522982,
          latitude: 1.285194,
        },
      };
    default:
      return state;
  }
}

export const userSelector = (state: RootState): UserInterface => {
  return state.user;
};
