import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dash-container">
      <div className="panel-container">
        <div className="container">
          <div className="row">
            <div className="col one">1 of 2</div>
            <div className="col two">
              <div>
                DADOS
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col three">1 of 3</div>
            <div className="col four">2 of 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
