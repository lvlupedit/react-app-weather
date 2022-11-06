import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Weather.css";

export default function PlaceAndDate() {
  return (
    <Container className="place-and-date mb-2">
      <Row className="location-and-date">
        <Col xl={5} id="city-name">
          Barcelona
        </Col>
        <Col xl={2}>
          <img
            id="weather-icon"
            className="img-fluid"
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="icon"
          />
        </Col>
        <Col xl={5} id="current-date">
          May 6
        </Col>
      </Row>
    </Container>
  );
}
