import { useEffect } from "react";
import { connect } from "react-redux";
import "./App.scss";
/** Components **/
import Map from "./components/Map";
import HQSelector from "./components/HQSelector";
import DriverCountSlider from "./components/DriverCountSlider";
/** Actions **/
import {
  updateUserLocation,
  getNearestHQLocation,
  updateUserDriverCount,
  updateUserHQLocation,
} from "./actions/users";
import { getNearestDrivers } from "./actions/drivers";
/** Interfaces **/
import { UserInterface } from "./reducers/usersReducer";
import { DriverInterface } from "./reducers/driversReducer";
import { RootState } from "./reducers";
import { HQLOCATIONS } from "./utils/constants";
import { getGeolocationPermission } from "./utils/permissions";
interface PropsInterface {
  user?: UserInterface;
  drivers?: DriverInterface;
  getNearestDrivers?: () => void;
  updateUserLocation?: (payload: UserInterface) => void;
  updateUserDriverCount?: (payload: UserInterface) => void;
  getNearestHQLocation?: (payload: UserInterface) => void;
  updateUserHQLocation?: (payload: UserInterface) => void;
}

const MINIMUM_DRIVERS = 1;
const MAXIMUM_DRIVERS = 10;
const App = (props: PropsInterface) => {
  /** Poll for drivers **/
  useEffect(() => {
    clearInterval();
    const id = setInterval(() => {
      if (props.getNearestDrivers) {
        props.getNearestDrivers();
      }
    }, 5000);
    return () => clearInterval(id);
  });
  /** Get Location 
   Need to Check if user allows location access **/
  useEffect(() => {
    console.log("Request");
    const { longitude, latitude, geoPermission } =
      getGeolocationPermission(navigator);
    if (
      props.user?.latitude !== latitude ||
      props.user?.longitude !== longitude
    ) {
      if (props.updateUserLocation)
        props.updateUserLocation({
          longitude,
          latitude,
          geoPermission,
        } as UserInterface);
      if (props.getNearestHQLocation)
        props.getNearestHQLocation({
          longitude,
          latitude,
        } as UserInterface);
    }
    return;
  }, [navigator.permissions]);

  return (
    <div className="App">
      <HQSelector
        locations={HQLOCATIONS}
        returnToNearest={() =>
          props.getNearestHQLocation && props.user
            ? props.getNearestHQLocation({ ...props.user })
            : null
        }
        onClick={(location) =>
          props.updateUserHQLocation
            ? props.updateUserHQLocation(location)
            : null
        }
      />
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
  updateUserHQLocation,
};
const mapStateToProps = (state: RootState, ownProps: PropsInterface) => ({
  user: state.user,
  drivers: state.drivers,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
