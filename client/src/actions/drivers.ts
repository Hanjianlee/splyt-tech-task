import {DRIVERS} from '../actionTypes/driversTypes'

export interface GetNearestDriversInterface {
    longitude:number,
    latitude:number,
}

export function getNearestDrivers(payload:GetNearestDriversInterface) {
    return {
        type: DRIVERS.GET_NEAREST_DRIVERS.REQUESTED,
        payload,
    }
}
