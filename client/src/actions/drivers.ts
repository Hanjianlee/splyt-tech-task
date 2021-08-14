import { DRIVERS } from "../actionTypes/driversTypes";

export interface GetNearestDriversInterface {}

export function getNearestDrivers() {
  return {
    type: DRIVERS.GET_NEAREST_DRIVERS.REQUESTED,
    payload: {},
  };
}
