import { splitApi } from "../../utils/env";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import express from "express";
export default function makeGetDrivers(): Function {
  const getDrivers = async (
    req: express.Request,
    res: express.Response
  ): Promise<express.Response | undefined> => {
    try {
      const { count, longitude, latitude } = req.query;
      if (!count)
        return res
          .status(400)
          .json({ message: "Please provide Count - Number of Drivers" });
      if (!longitude)
        return res.status(400).json({ message: "Please provide Longitude" });
      if (!latitude)
        return res.status(400).json({ message: "Please provide Latitude" });
      await axios
        .get(`${splitApi}`, {
          params: { count, latitude, longitude },
        } as AxiosRequestConfig)
        .then((result: AxiosResponse) => {
          try {
            return res.status(200).json(result.data);
          } catch (err) {
            return res.status(400).json({ message: err });
          }
        });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  };
  return getDrivers;
}
