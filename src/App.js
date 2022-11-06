import React from "react";
import "./App.css";
import Video from "./mountains.mp4";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <video id="background-video" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>

      <Weather />
    </div>
  );
}

export default App;
