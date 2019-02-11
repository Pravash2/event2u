import React from "react";
import Corrousel from "./Corrousel";
import TimeUntil from "./TimeUntil";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Corrousel />
      <TimeUntil />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
    </div>
  );
};

export default Featured;
