import React from "react";
import { Col } from "react-bootstrap";

const ServiceDisplay = ({ title, desc }) => {
  return (
    <>
      <Col md={6}>
        <div className="service-display">
          <h4 className="text-center">{title}</h4>
          <p className="text-center">{desc}</p>
        </div>
      </Col>
    </>
  );
};

export default ServiceDisplay;
