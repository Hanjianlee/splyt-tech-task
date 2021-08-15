import express from "express";
import driverRouter from "./api/drivers";
const router = express.Router();

router.use("/api/drivers", driverRouter);

export default router;
