import makeGetDrivers from "./getDrivers";

const getDrivers = makeGetDrivers();

const driverController = Object.freeze({
  getDrivers,
});

export default driverController;
export { getDrivers };
