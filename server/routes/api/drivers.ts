import express from "express";
import driverController from "../../controllers/drivers";
const driverRouter = express.Router();

driverRouter.get("/getDrivers", (req, res) => {
  driverController.getDrivers(req, res);
});

export default driverRouter;
