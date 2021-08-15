import { useEffect, useState } from "react";
import { HQLOCATIONTYPE } from "../../utils/constants";
import _ from "lodash";
import "./styles.scss";
export interface PropsInterface {
  locations: HQLOCATIONTYPE[];
  returnToNearest?: () => void;
  onClick: (event: any) => void;
}
export const HQSelector = (props: PropsInterface) => {
  const [selections, setSelections] = useState<HQLOCATIONTYPE[]>([
    {
      country: "Nearest HQ",
      latitude: 0,
      longitude: 0,
    },
  ]);

  const [selected, setSelected] = useState<HQLOCATIONTYPE>({
    country: "Nearest HQ",
    latitude: 0,
    longitude: 0,
  });
  /** Update HQ Locations **/
  useEffect(() => {
    const updateSelections = _.uniqBy(
      [...props.locations, ...selections],
      "country"
    );
    setSelections(updateSelections);
  }, [props.locations]);

  /** Handle Selected HQ**/
  const handleClick = (location: HQLOCATIONTYPE) => {
    setSelected(location);
    /** Head to Nearest Stored HQ**/
    if (location.country === "Nearest HQ") {
      return props.returnToNearest ? props.returnToNearest() : null;
    } else {
      return props.onClick({ HQLocation: location });
    }
  };
  return (
    <div className="hq-selector">
      <div className="hq-selector-header">
        <span className="hq-selector-header-text">SELECT HQ</span>{" "}
        <span className="hq-selector-header-arrow">{">"}</span>
      </div>
      <div className="hq-selector-selections">
        {selections.map((location) => (
          <div
            key={location.country}
            className={
              selected.country === location.country
                ? "selected hq-selector-selection"
                : "hq-selector-selection"
            }
            onClick={() => handleClick(location)}
          >
            {location.country}
          </div>
        ))}
      </div>
    </div>
  );
};
export default HQSelector;
