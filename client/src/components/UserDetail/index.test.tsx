import { render } from "@testing-library/react";
import UserDetail from ".";
import { initialState as userInitialState } from "../../reducers/usersReducer";

test("Render Default User Details ", () => {
  const utils = render(<UserDetail user={userInitialState} />);
  const div = utils.getByLabelText("user-detail") as HTMLDivElement;
  expect(div).toBeInTheDocument();
});
