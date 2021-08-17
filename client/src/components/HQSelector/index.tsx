import { useEffect, useState } from "react";
import { HQLocationType, NEAREST_HQ_STRING } from "../../utils/constants";
import _ from "lodash";
import "./styles.scss";
export interface PropsInterface {
  locations: HQLocationType[] | null;
  returnToNearest?: () => void;
  onClick: (event: any) => void;
}
export const HQSelector = (props: PropsInterface) => {
  const [selections, setSelections] = useState<HQLocationType[]>([
    {
      country: NEAREST_HQ_STRING,
      latitude: 0,
      longitude: 0,
    },
  ]);

  /** Update HQ Locations **/
  const [selected, setSelected] = useState<HQLocationType>({
    country: NEAREST_HQ_STRING,
    latitude: 0,
    longitude: 0,
  });

  /** If The Location props is updated, it will be re-rendered with latest Array**/
  useEffect(() => {
    const locations = props.locations ? props.locations : [];
    const updateSelections = _.uniqBy([...locations, ...selections], "country");
    setSelections(updateSelections);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.locations]);

  /** Handle Selected HQ**/
  const handleClick = (location: HQLocationType) => {
    setSelected(location);
    if (location.country === NEAREST_HQ_STRING) {
      /** Head to Nearest Stored HQ**/
      return props.returnToNearest ? props.returnToNearest() : null;
    } else {
      return props.onClick({ HQLocation: location });
    }
  };
  return (
    <div className="hq-selector" aria-label="hq-selector">
      <div className="hq-selector-header">
        <img
          className="splyt-marker-svg"
          src="/splytMarker.svg"
          alt="/splytMarker.svg"
        />
        <span className="hq-selector-header-text">{selected.country}</span>{" "}
        <span className="hq-selector-header-arrow">{">"}</span>
      </div>
      <div className="hq-selector-selections">
        {selections.map((location) => (
          <div
            aria-label={`hq-selector-selection-${location.country.toLowerCase()}`}
            data-test-id=""
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
