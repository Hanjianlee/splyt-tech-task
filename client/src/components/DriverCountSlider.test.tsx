import { render, screen, fireEvent } from "@testing-library/react";
import DriverCountSlider from "./DriverCountSlider";

test("Render Driver Count Slider ", () => {
  const defaultValue = "5";
  const utils = render(
    <DriverCountSlider
      minValue={10}
      maxValue={0}
      count={defaultValue}
      onChange={(event) => event.target?.value}
    />
  );
  const input = utils.getByLabelText("driver-count-slider") as HTMLInputElement;
  const text = utils.getByLabelText(
    "driver-count-text"
  ) as HTMLParagraphElement;
  //   expect(defaultValue).toBeInTheDocument();
  expect(text).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});

test("Test Count Slider Default Value", () => {
  const defaultValue = "5";
  const utils = render(
    <DriverCountSlider
      minValue={10}
      maxValue={0}
      count={defaultValue}
      onChange={(event) => event.target?.value}
    />
  );
  const input = utils.getByLabelText("driver-count-slider") as HTMLInputElement;
  const text = utils.getByLabelText(
    "driver-count-text"
  ) as HTMLParagraphElement;
  /** Default Value **/
  expect(text.textContent).toBe(defaultValue);
  expect(input.value).toBe(defaultValue);
});

test("Test Count Slider Update Value", () => {
  const defaultValue = "5";
  const utils = render(
    <DriverCountSlider
      minValue={10}
      maxValue={0}
      count={defaultValue}
      onChange={(event) => event.target?.value}
    />
  );
  const input = utils.getByLabelText("driver-count-slider") as HTMLInputElement;
  const text = utils.getByLabelText(
    "driver-count-text"
  ) as HTMLParagraphElement;
  /**Updated  Value **/
  const updatedValue = "10";
  fireEvent.change(input, { target: { value: updatedValue } });
  expect(text.textContent).toBe(updatedValue);
  expect(input.value).toBe(updatedValue);
});
