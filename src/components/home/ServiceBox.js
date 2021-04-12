import React from "react";
import { Col } from "react-bootstrap";

const ServiceBox = ({ icon, title, desc }) => {
  return (
    <>
      <Col md={4} sm={6} xs={12}>
        <div className="service-box">

        <div className="icon">
          <i className="fas fa-{icon}">{icon}</i>
        </div>
        <a href="#home">
          <h3 className="text-center">{title}</h3>
        </a>
        <div className="short-description text-center">
          <p>{desc}</p>
        </div>
        </div>
      </Col>
    </>
  );
};

export default ServiceBox;
