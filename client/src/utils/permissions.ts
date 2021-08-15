export function getGeolocationPermission(navigator: Navigator): {
  longitude: number;
  latitude: number;
  geoPermission: string;
} {
  navigator.permissions.query({ name: "geolocation" }).then((permission) => {
    if (permission.state === "granted") {
      navigator.geolocation.getCurrentPosition((postition) => {
        const { longitude, latitude } = postition.coords;
        return { longitude, latitude, geoPermission: permission.state };
      });
    } else {
      alert(
        "Hey There !\nPlease Allow Location to work :) \nGo To Settings on the Top Right corner \nPrivacy and Security\nSite Settings > localhost:3000 \nLocation > Allow\n"
      );
      return {
        longitude: null,
        latitude: null,
        geoPermission: permission.state,
      };
    }
  });
  return {
    longitude: 0,
    latitude: 0,
    geoPermission: "denied",
  };
}
