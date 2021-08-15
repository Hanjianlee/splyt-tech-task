import { DRIVERS } from "../actionTypes/driversTypes";
import { RootState } from ".";
export interface DriverDetailsInterface {
  driver_id: string;
  location: {
    latitude: number;
    longitude: number;
    bearing: number;
  };
}

export interface DriverInterface {
  status: string | null;
  count: number;
  drivers: [DriverDetailsInterface] | [];
  error: string;
  pickup_eta: number | null;
}

export interface ActionInterface {
  type: string;
  payload: {
    longitude: number;
    latitude: number;
    count: number;
  };
}
export const initialState: DriverInterface = {
  status: null,
  count: 0,
  drivers: [],
  error: "",
  pickup_eta: null,
};

/** Handles the Process of requesting the nearest Drivers
 *  REQUESTED -- Sends Axios Get Requst
 *  SUCCESS -- Receives a 200 status response
 *  FAILED -- Failed Request / Bad Request
 **/
export const driverSelector = (state: RootState) => {
  return state.driver;
};
export default function DriverReducer(
  state = initialState,
  action: ActionInterface
) {
  switch (action.type) {
    case DRIVERS.GET_NEAREST_DRIVERS.REQUESTED:
      return {
        ...state,
        status: "requesting",
      };
    case DRIVERS.GET_NEAREST_DRIVERS.SUCCESS:
      return {
        ...state,
        status: "success",
        ...action.payload,
      };
    case DRIVERS.GET_NEAREST_DRIVERS.FAILED:
      return {
        ...state,
        status: "failed",
      };
    default:
      return state;
  }
}
