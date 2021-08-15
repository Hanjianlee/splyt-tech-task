import { render, screen, fireEvent } from "@testing-library/react";
import HQSelector from ".";
import { HQLOCATIONS } from "../../utils/constants";
import { initialState as userInitialState } from "../../reducers/usersReducer";

test("Render Default HQ Selector ", () => {
  const utils = render(
    <HQSelector
      locations={[]}
      returnToNearest={() => userInitialState}
      onClick={(location) => location}
    />
  );
  const hq = utils.getByLabelText("hq-selector") as HTMLDivElement;
  expect(hq).toBeInTheDocument();
});

test("Render HQ Selector Selections", () => {
  const utils = render(
    <HQSelector
      locations={[]}
      returnToNearest={() => userInitialState}
      onClick={(location) => location}
    />
  );
  const hq = utils.getByLabelText("hq-selector") as HTMLDivElement;
  const nearestHq = utils.getByLabelText(
    "hq-selector-selection-nearest-hq"
  ) as HTMLDivElement;
  expect(hq).toBeInTheDocument();
  expect(nearestHq).toBeInTheDocument();
});

test("Render HQ Selector Selections with input", () => {
  const utils = render(
    <HQSelector
      locations={HQLOCATIONS}
      returnToNearest={() => userInitialState}
      onClick={(location) => location}
    />
  );
  const hq = utils.getByLabelText("hq-selector") as HTMLDivElement;
  const nearestHq = utils.getByLabelText(
    "hq-selector-selection-nearest-hq"
  ) as HTMLDivElement;
  /**Test Each Location**/
  HQLOCATIONS.map((location) => {
    const hqlocation = utils.getByLabelText(
      `hq-selector-selection-${location.country.toLowerCase()}`
    ) as HTMLDivElement;
    expect(hqlocation).toBeInTheDocument();
  });
  expect(hq).toBeInTheDocument();
  expect(nearestHq).toBeInTheDocument();
});
