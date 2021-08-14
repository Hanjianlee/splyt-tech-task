import {USERS} from '../actionTypes/usersTypes'
import {UserInterface} from '../reducers/usersReducer'

export function updateUserLocation(payload:UserInterface) {
    return {
        type: USERS.UPDATE_USER_LOCATION,
        payload,
    }
}
export function updateUserDriverCount(payload:UserInterface) {
    return {
        type: USERS.UPDATE_USER_DRIVER_COUNT,
        payload,
    }
}
export function getNearestHQLocation(payload:UserInterface) {
    return {
        type: USERS.GET_NEAREST_HQ_LOCATION.REQUESTED,
        payload,
    }
}