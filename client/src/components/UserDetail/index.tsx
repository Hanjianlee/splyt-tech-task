import React from "react";
import { UserInterface } from "../../reducers/usersReducer";

import "./styles.scss";
export interface PropsInterface {
  user: UserInterface | undefined;
}
export const UserDetail = (props: PropsInterface) => {
  return (
    <div className="user-detail" aria-label="user-detail">
      {props.user ? (
        <React.Fragment>
          {props.user.geoPermission === "Granted" ? (
            <React.Fragment>
              <div
                className="user-detail-header"
                aria-label="user-detail-granted"
              >
                <span className="user-detail-header-text">
                  {" "}
                  Location Access : {props.user.geoPermission}
                </span>{" "}
                <span className="user-detail-header-arrow">{">"}</span>
              </div>
              <div className="user-detail-selections">
                <div className="user-detail-selection">
                  Longitude : {props.user.longitude}
                </div>
                <div className="user-detail-selection">
                  Latitude : {props.user.latitude}
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {" "}
              <div
                className="user-detail-header"
                aria-label="user-detail-denied"
              >
                <span className="user-detail-header-text">
                  {" "}
                  Location Access : {props.user.geoPermission}
                </span>{" "}
                <span className="user-detail-header-arrow">{">"}</span>
              </div>
              <div className="user-detail-denied-content-section">
                <div className="user-detail-denied-content">
                  Allow Location Permission of your browser to localhost:3000
                  <br />
                  and get the best experience :)
                </div>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="user-detail-header" aria-label="user-detail-loading">
            <span className="user-detail-header-text"> Getting Permission</span>{" "}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
export default UserDetail;
