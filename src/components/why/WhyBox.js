import React from "react";
import { Col } from "react-bootstrap";
 

const WhyBox = ({ id, title, desc }) => {
  return (
    <>
      <Col md={6}>
        <div className="why-box">
          <div className="why-box-heading">
            <h4>{title}</h4>
            <h4>{id}</h4>
          </div>
          <p>{desc}</p>
        </div>
      </Col>
    </>
  );
};

export default WhyBox;
