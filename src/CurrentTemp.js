import React from "react";
import "./Weather.css";

export default function CurrentTemp() {
  return (
    <div className="current-temp">
      <h2 className="temperature-number">
        <span id="temperature-main">30</span>
        <span id="current-system">°C</span>
      </h2>
    </div>
  );
}
