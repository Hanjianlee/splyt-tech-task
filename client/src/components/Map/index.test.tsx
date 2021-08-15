import { render, screen, fireEvent } from "@testing-library/react";
import Map from ".";
import { HQLOCATIONS } from "../../utils/constants";
import { initialState as userInitialState } from "../../reducers/usersReducer";
import { initialState as driverInitialState } from "../../reducers/driversReducer";

// test("Render Default Map GL ", () => {
//   const utils = render(
//     <Map
//       user={userInitialState}
//       drivers={driverInitialState}
//       getNearestDrivers={(payload) => payload}
//     />
//   );
//   const map = utils.container.childNodes
//     ? (utils.container.childNodes as NodeListOf<ChildNode>)
//     : null;
//   expect(map).toHaveClass("mapboxgl-map");
// });
