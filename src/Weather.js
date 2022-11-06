import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentTime from "./CurrentTime";
import SearchForm from "./SearchForm";
import PlaceAndDate from "./PlaceAndDate";
import CurrentTemp from "./CurrentTemp";
import Description from "./Description";
import Forecast from "./Forecast";
import Credit from "./Credit";

export default function Weather() {
  return (
    <div className="app-box">
      <CurrentTime />
      <SearchForm />
      <PlaceAndDate />
      <CurrentTemp />
      <Description />
      <Forecast />
      <Credit />
    </div>
  );
}
