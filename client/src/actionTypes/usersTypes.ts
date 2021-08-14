import { generateApiActions } from "./generateApiTypes"

export const UPDATE_USER_LOCATION:string = "UPDATE_USER_LOCATION"
export const GET_NEAREST_HQ_LOCATION:string = "GET_NEAREST_HQ_LOCATION"
export const UPDATE_USER_DRIVER_COUNT:string = "UPDATE_USER_DRIVER_COUNT"
export const USERS ={
    MODEL: 'users',
    UPDATE_USER_LOCATION,
    UPDATE_USER_DRIVER_COUNT,
    GET_NEAREST_HQ_LOCATION: generateApiActions("users",GET_NEAREST_HQ_LOCATION)
}