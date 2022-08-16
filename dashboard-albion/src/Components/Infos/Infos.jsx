import React, { useContext } from "react";
import Context from "../../Context/Context";
import "./infos.css";

export default function Infos() {
  const { userSelected } = useContext(Context);

  const valueNumber = Number(userSelected);

  return (
    <div className="container-graph">
      <div className="container-value">
        {userSelected}
        <div
          className="container-gap"
          style={{
            height: isNaN(valueNumber) ? "350px" : `${valueNumber / 10}px`,
          }}
        ></div>
      </div>
    </div>
  );
}
