import React from "react";
import "./dashboard.css";
import Infos from "../Infos/Infos";

export default function Dashboard() {
  return (
    <div className="dash-container">
      <div className="panel-container">
        <div className="container">
          <div className="row">
            <div className="col one"></div>
            <div className="col two">
              <div>
                <Infos />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col three"></div>
            <div className="col four"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
