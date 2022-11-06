import React from "react";
import "./css/SearchForm.css";
import SearchIcon from "./search-icon.png";
import LocationIcon from "./location-icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

export default function SearchForm() {
  return (
    <>
      <Container className="mb-3">
        <Row>
          <Col lg={8} xs={12} className="mb-1">
            <Form.Control
              id="search-form"
              className="city-search d-block"
              type="search"
              placeholder="Enter your city..."
            />
          </Col>
          <Col lg={2} xs={6} className="mb-1">
            <Button className="search-button d-block" type="submit">
              <img className="button-icon" src={SearchIcon} alt="Search" />
            </Button>
          </Col>
          <Col lg={2} xs={6} className="mb-1">
            <Button className="location-button d-block" type="submit">
              <img className="button-icon" src={LocationIcon} alt="Search" />
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
