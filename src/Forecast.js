import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Background from "./gradient-square.png";
import "./css/Forecast.css";

export default function Forecast() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <h3 className="next-days">5-days forecast:</h3>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={Background} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <h3>Sunday</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Background} alt="Second slide" />

          <Carousel.Caption className="carousel-caption">
            <h3>Monday</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Background} alt="Third slide" />

          <Carousel.Caption className="carousel-caption">
            <h3>Tuesday</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
