import React, { useEffect, useState } from "react";
import "./styles.scss";
/** Components **/
import ReactMapGL, { Marker } from "react-map-gl";
/** Interfaces **/
import { GetNearestDriversInterface } from "../../actions/drivers";
import { UserInterface } from "../../reducers/usersReducer";
import {
  DriverInterface,
  DriverDetailsInterface,
} from "../../reducers/driversReducer";
/** Constants **/
import {
  REACT_APP_MAP_GL_STYLE,
  REACT_APP_MAP_GL_TOKEN,
  HQLOCATIONS,
} from "../../utils/constants";
import "mapbox-gl/dist/mapbox-gl.css";
/** Temporary work around to let build version function as Babel has some issues loading the modules **/
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
// @ts-ignore
// eslint-disable-next-line
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import { rootCertificates } from "tls";

interface PropsInterface {
  user?: UserInterface;
  drivers?: DriverInterface;
  getNearestDrivers?: (payload: GetNearestDriversInterface) => void;
}

interface ViewportPropsInterface {
  width: any;
  height: any;
  latitude: number;
  longitude: number;
  zoom: number;
}

export const Map = (props: PropsInterface) => {
  /** Default will be UK HQ **/
  const [viewport, setViewport] = useState<ViewportPropsInterface>({
    width: "100vw",
    height: "100vh",
    latitude: 51.5049375,
    longitude: -0.0964509,
    zoom: 16,
  });
  /** Update Location if User's location is updated**/
  useEffect(() => {
    const latitude: number = props.user?.HQLocation.latitude
      ? props.user?.HQLocation.latitude
      : viewport.latitude;
    const longitude: number = props.user?.HQLocation.longitude
      ? props.user?.HQLocation.longitude
      : viewport.longitude;
    if (viewport.latitude !== latitude || viewport.longitude !== longitude)
      setViewport({ ...viewport, longitude, latitude } as any);
  }, [props.user?.HQLocation]);
  /** On Window Resize **/
  useEffect(() => {
    window.addEventListener("resize", (event: Event) => {
      const w = event.target as Window;
      setViewport({ ...viewport, width: w.innerWidth, height: w.innerHeight });
    });
  });
  return (
    <ReactMapGL
      mapStyle={REACT_APP_MAP_GL_STYLE}
      {...viewport}
      mapboxApiAccessToken={REACT_APP_MAP_GL_TOKEN}
      onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
      maxZoom={18}
      minZoom={10}
    >
      {HQLOCATIONS.map((location) => (
        <Marker
          key={location.country}
          longitude={location.longitude}
          latitude={location.latitude}
        >
          <img className="splyt-marker-svg" src="/splytMarker.svg" />
        </Marker>
      ))}
      {props.drivers?.drivers.map((driver: DriverDetailsInterface) => (
        <Marker
          key={driver.driver_id}
          longitude={driver.location.longitude}
          latitude={driver.location.latitude}
        >
          <img
            className="taxi-marker-svg"
            src="/image2vector.svg"
            style={{
              transform: `rotate(${driver.location.bearing - 90}deg)`,
            }}
          />
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default React.memo(Map);
