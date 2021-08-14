import { HQLOCATIONTYPE } from "../utils/constants";
export interface PropsInterface {
  locations: HQLOCATIONTYPE[];
  returnToNearest?: () => void;
  onClick: (event: any) => void;
}

export const HQSelector = (props: PropsInterface) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        zIndex: 1,
        margin: "15px 20px",
        padding: "5px",
        left: "0",
        textAlign: "left",
        backgroundColor: "rgb(224,224,224,0.7)",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      SELECT HQ {">"}
      {props.locations.map((location) => (
        <div onClick={() => props.onClick({ HQLocation: location })}>
          {location.country}
        </div>
      ))}
      <div
        onClick={() => (props.returnToNearest ? props.returnToNearest() : null)}
      >
        Nearest
      </div>
    </div>
  );
};
export default HQSelector;
