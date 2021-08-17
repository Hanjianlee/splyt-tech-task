import { useState } from "react";
import "./styles.scss";
export interface PropsInterface {
  maxValue: number;
  minValue: number;
  count: string | undefined;
  value?: number | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DriverCountSlider = (props: PropsInterface) => {
  const [count, setCount] = useState<string>(props.count ? props.count : "0");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event);
    setCount(event.target.value);
  };
  return (
    <div className="driver-count-slider-container">
      <img
        className="taxi-marker-svg"
        src="/image2vector.svg"
        alt="/image2vector.svg"
        style={{
          transform: `rotate(-90deg)`,
        }}
      />
      <p className="driver-count-slider-header" aria-label="driver-count-title">
        Taxi Count
      </p>
      <input
        className="driver-count-slider-input"
        aria-label="driver-count-slider"
        type="range"
        min={props.minValue}
        max={props.maxValue}
        value={count}
        onChange={(event) => handleChange(event)}
      />
      <p className="driver-count-slider-count" aria-label="driver-count-text">
        {count}
      </p>
    </div>
  );
};
export default DriverCountSlider;
