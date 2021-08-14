import { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
/** Components **/
import Map from "./components/Map";
import DriverCountSlider from "./components/DriverCountSlider";
/** Actions **/
import {
  updateUserLocation,
  getNearestHQLocation,
  updateUserDriverCount,
} from "./actions/users";
import {
  getNearestDrivers,
  GetNearestDriversInterface,
} from "./actions/drivers";
/** Interfaces **/
import { UserInterface } from "./reducers/usersReducer";
import { DriverInterface } from "./reducers/driversReducer";
import { RootState } from "./reducers";
import { HQLOCATIONS } from "./utils/constants";
interface PropsInterface {
  user?: UserInterface;
  drivers?: DriverInterface;
  getNearestDrivers?: (payload: GetNearestDriversInterface) => void;
  updateUserLocation?: (payload: UserInterface) => void;
  updateUserDriverCount?: (payload: UserInterface) => void;
  getNearestHQLocation?: (payload: UserInterface) => void;
}

const MINIMUM_DRIVERS = 1;
const MAXIMUM_DRIVERS = 10;
const App = (props: PropsInterface) => {
  /** Poll for drivers **/
  useEffect(() => {
    clearInterval();
    const id = setInterval(() => {
      const { longitude, latitude } = props.user
        ? props.user.nearestHQLocation
        : HQLOCATIONS[0];
      if (props.getNearestDrivers && longitude && latitude) {
        console.log("Poll");
        props.getNearestDrivers({ longitude, latitude });
      }
    }, 5000);
    return () => clearInterval(id);
  });
  /** Get Location 
   Need to Check if user allows location access **/
  navigator.permissions.query({ name: "geolocation" }).then((permission) => {
    if (permission.state === "granted") {
      navigator.geolocation.getCurrentPosition((postition) => {
        const { longitude, latitude } = postition.coords;
        if (
          props.user?.latitude !== latitude ||
          props.user?.longitude !== longitude
        ) {
          if (props.updateUserLocation)
            props.updateUserLocation({
              longitude,
              latitude,
              geoPermission: permission.state,
            } as UserInterface);
          if (props.getNearestHQLocation)
            props.getNearestHQLocation({
              longitude,
              latitude,
            } as UserInterface);
        }
        return;
      });
    } else {
      alert(
        "Hey There !\nPlease Allow Location to work :) \nGo To Settings on the Top Right corner \nPrivacy and Security\nSite Settings > localhost:3000 \nLocation > Allow\n"
      );
    }
  });
  return (
    <div className="App">
      <DriverCountSlider
        maxValue={MAXIMUM_DRIVERS}
        minValue={MINIMUM_DRIVERS}
        count={props.user?.driverCount}
        onChange={(event) =>
          props.updateUserDriverCount
            ? props.updateUserDriverCount({
                driverCount: event.target.value,
              } as UserInterface)
            : null
        }
      />
      <Map
        user={props.user}
        drivers={props.drivers}
        getNearestDrivers={props.getNearestDrivers}
      />
    </div>
  );
};
const mapDispatchToProps = {
  updateUserLocation,
  updateUserDriverCount,
  getNearestHQLocation,
  getNearestDrivers,
};
const mapStateToProps = (state: RootState, ownProps: PropsInterface) => ({
  user: state.user,
  drivers: state.drivers,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
