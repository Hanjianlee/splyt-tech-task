export interface GeoLocationInterface {
  longitude: number | null;
  latitude: number | null;
  geoPermission: string;
}
export function getGeolocationSuccess(
  position: GeolocationPosition
): GeoLocationInterface {
  const { longitude, latitude } = position.coords;
  return { longitude, latitude, geoPermission: "success" };
}
export function getGeolocationFailed(
  position: GeolocationPositionError
): GeoLocationInterface {
  alert(
    "Hey There !\nPlease Allow Location to work :) \nGo To Settings on the Top Right corner \nPrivacy and Security\nSite Settings > localhost:3000 \nLocation > Allow\n"
  );
  return {
    longitude: null,
    latitude: null,
    geoPermission: "denied",
  };
}
export async function getGeolocationPermission(
  navigator: Navigator
): Promise<GeoLocationInterface> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Success");
        const { longitude, latitude, geoPermission } =
          getGeolocationSuccess(position);
        resolve({ longitude, latitude, geoPermission });
      },
      (position) => {
        console.log("Failed");
        const { longitude, latitude, geoPermission } =
          getGeolocationFailed(position);
        resolve({ longitude, latitude, geoPermission });
      }
    );
  });
}
