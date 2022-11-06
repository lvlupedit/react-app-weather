import React from "react";
import "./Weather.css";

export default function Credit() {
  return (
    <div className="credit">
      <p>
        <a
          href="https://github.com/lvlupedit/my-weather-app"
          target="_blank"
          rel="noreferrer"
          className="open-source-code"
        >
          Open-source code{" "}
        </a>
        by Kateryna Koliada
      </p>
    </div>
  );
}
