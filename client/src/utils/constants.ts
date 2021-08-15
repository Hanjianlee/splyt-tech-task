/** Just Global Constants **/
export const MULTIPART_FORM_DATA: string = "multipart/form-data";
export const APPLICATION_JSON: string = "applciation/json";
export const MINIMUM_DRIVERS: number = 1;
export const MAXIMUM_DRIVERS: number = 10;
export const MINIMUM_ZOOM: number = 10;
export const MAXIMUM_ZOOM: number = 20;
export const DEFAULT_ZOOM: number = 18;
export const {
  REACT_APP_API_URL,
  REACT_APP_API_KEY,
  REACT_APP_MAP_GL_STYLE,
  REACT_APP_MAP_GL_TOKEN,
} = process.env;
export const API_PREFIX: string = "api";
export type LocationType = {
  longitude: number;
  latitude: number;
};
export type HQLocationType = LocationType & {
  country: string;
};
export const HQLOCATIONS: HQLocationType[] = [
  {
    country: "Singapore",
    longitude: 103.8522982,
    latitude: 1.285194,
  },
  {
    country: "London",
    longitude: -0.0964509,
    latitude: 51.5049375,
  },
];
