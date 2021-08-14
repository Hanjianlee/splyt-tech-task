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
  /** Default Value **/
  expect(text.textContent).toBe(defaultValue);
  expect(text).toBeInTheDocument();
  expect(input).toBeInTheDocument();

  /**Updated  Value **/
  const updatedValue = "10";
  fireEvent.change(input, { target: { value: updatedValue } });
  //   expect(defaultValue).toBeInTheDocument();
  expect(input.value).toBe(updatedValue);
  expect(text.textContent).toBe(updatedValue);
});
