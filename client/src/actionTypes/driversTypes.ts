import { generateApiActions } from "./generateApiTypes"
export const DRIVERS = {
    MODEL: "drivers",
    GET_NEAREST_DRIVERS: generateApiActions("drivers","GET_NEAREST_DRIVERS")
}
