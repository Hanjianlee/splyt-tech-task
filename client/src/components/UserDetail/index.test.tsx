import { render } from "@testing-library/react";
import UserDetail from ".";
import { initialState as userInitialState } from "../../reducers/usersReducer";

describe("User Details Test", () => {
  test("Render Default User Details ", () => {
    const utils = render(<UserDetail user={userInitialState} />);
    const div = utils.getByLabelText("user-detail") as HTMLDivElement;
    expect(div).toBeInTheDocument();
  });

  test("Render Granted User Details ", () => {
    const utils = render(
      <UserDetail user={{ ...userInitialState, geoPermission: "Granted" }} />
    );
    const div = utils.getByLabelText("user-detail-granted") as HTMLDivElement;
    expect(div).toBeInTheDocument();
  });

  test("Render Denied User Details ", () => {
    const utils = render(
      <UserDetail user={{ ...userInitialState, geoPermission: "Denied" }} />
    );
    const div = utils.getByLabelText("user-detail-denied") as HTMLDivElement;
    expect(div).toBeInTheDocument();
  });

  test("Render Loading User Details ", () => {
    const utils = render(<UserDetail user={undefined} />);
    const div = utils.getByLabelText("user-detail-loading") as HTMLDivElement;
    expect(div).toBeInTheDocument();
  });
});
