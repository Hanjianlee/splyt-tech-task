import { useState } from "react";
export interface PropsInterface {
  maxValue: number;
  minValue: number;
  count: string | undefined;
  value?: number | null;
  onChange: (event: any) => void;
}

export const Slider = (props: PropsInterface) => {
  const [count, setCount] = useState<string>(props.count ? props.count : "0");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event);
    setCount(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        zIndex: 1,
        padding: "5px",
        left: "40%",
        justifyContent: "center",
        backgroundColor: "rgb(224,224,224,0.7)",
        borderRadius: "5px",
      }}
    >
      <p>Taxi Count</p>
      <input
        aria-label="driver-count-slider"
        type="range"
        min={0}
        max={10}
        value={count}
        onChange={(event) => handleChange(event)}
      />
      <p aria-label="driver-count-text">{count}</p>
    </div>
  );
};
export default Slider;
