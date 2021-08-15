// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
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
