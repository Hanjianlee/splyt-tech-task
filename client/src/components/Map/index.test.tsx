import { render, screen, fireEvent } from "@testing-library/react";
import Map from ".";
import "@testing-library/jest-dom/extend-expect";
import { initialState as userInitialState } from "../../reducers/usersReducer";
import { DriverInterface } from "../../reducers/driverReducer";
import { _MapContext as MapContext } from "react-map-gl";

const mockStaticContext = {
  viewport: {
    width: 800,
    height: 600,
    latitude: -37.81482,
    longitude: 144.96679,
    zoom: 14,
  },
};
const dummyDriver: DriverInterface = {
  status: "success",
  count: 0,
  drivers: [
    {
      driver_id: "test_0",
      location: {
        latitude: 1,
        longitude: 1,
        bearing: 90,
      },
    },
    {
      driver_id: "test_1",
      location: {
        latitude: 2,
        longitude: 2,
        bearing: 90,
      },
    },
  ],
  error: "",
  pickup_eta: null,
};

describe("Map Gl Tests", () => {
  test("Render Default Map GL ", () => {
    jest.mock("mapbox-gl/dist/mapbox-gl", () => ({
      Map: jest.fn(),
      Marker: jest.fn().mockReturnValue({
        setLngLat: jest.fn().mockReturnValue({
          setPopup: jest.fn().mockReturnValue({
            addTo: jest.fn().mockReturnValue({}),
          }),
        }),
      }),
      Popup: jest.fn().mockReturnValue({
        setHTML: jest.fn().mockReturnValue({ on: jest.fn() }),
      }),
    }));
    const utils = render(
      <MapContext.Provider
        // @ts-ignore
        value={mockStaticContext}
      >
        <Map
          user={userInitialState}
          driver={dummyDriver}
          getNearestDrivers={(payload) => payload}
        />
      </MapContext.Provider>
    );
    const map = utils.container.childNodes
      ? (utils.container.childNodes as NodeListOf<ChildNode>)
      : null;
    expect(map);
  });
});
