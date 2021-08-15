import request from "supertest";
import app from "../../app";
export interface DriverDetailsInterface {
  driver_id: string;
  location: {
    latitude: number;
    longitude: number;
    bearing: number;
  };
}
const defaultDriverQuery = {
  count: 5,
  longitude: 1,
  latitude: 2,
};
describe("Get Drivers From Splyt", () => {
  it("GET /api/drivers/getDrivers Bad Request", () => {
    return request(app)
      .get("/api/drivers/getDrivers")
      .query({})
      .expect("Content-Type", /json/)
      .expect(400);
  });
  it("GET /api/drivers/getDrivers Good Request", () => {
    return request(app)
      .get("/api/drivers/getDrivers")
      .query(defaultDriverQuery)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect.arrayContaining([
          expect.objectContaining({
            driver_id: expect.any(String),
            location: {
              latitude: expect.any(Number),
              longitude: expect.any(Number),
              bearing: expect.any(Number),
            },
          }),
        ]);
      });
  });
});
