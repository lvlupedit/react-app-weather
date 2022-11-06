import React from "react";
import "./Weather.css";

export default function Description() {
  return (
    <div className="weather-description">
      <p>
        <span id="description-main">Description</span> <br />
        <small>
          {" "}
          Max <strong id="maximum-temp">temperature</strong>°C, min{" "}
          <strong id="minimum-temp">temperature</strong>°C
        </small>{" "}
        &#9679; <small id="windspeed">Windspeed</small>
      </p>
    </div>
  );
}
