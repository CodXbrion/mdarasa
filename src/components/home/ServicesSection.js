import React from "react";
import "../../assets/css/services.css";
import { Container, Row } from "react-bootstrap";
import ServiceBox from "./ServiceBox";

let services = [
  {
    icon: "icon",
    title: "E-learning",
    desc:
      "mDarasa platform provides the best experience of a physical class on a phone for offline access without internet and through laptop/desktop on any modern web browser.",
  },
  {
    icon: "icon",
    title: "Practical Taxation",
    desc:
      "Every accounting professional career starts with the first step, but you don’t need to take it alone, mDrasa is on a mission to unlock your potential.",
  },
  {
    icon: "icon",
    title: "Professional CV Development",
    desc:
      "We assist you to establish your value proposition and become a candidate of choice.With our team of human resource experts we will assist you to come up with a powerful well branded professional CV & Cover letter.",
  },
  {
    icon: "icon",
    title: "Accounting",
    desc:
      "Every accounting professional career starts with the first step, but you don’t need to take it alone, mDrasa is on a mission to unlock your potential.",
  },
  {
    icon: "icon",
    title: "Online Classes",
    desc:
      "mDarasa platform provides the best experience of a physical class on a phone for offline access without internet and through laptop/desktop on any modern web browser.",
  },
  {
    icon: "icon",
    title: "Discussion Forums",
    desc:
      "With this tech in our platform, students sharing the same unit or course can create & join discussion forums and chat rooms.",
  },
];

const ServicesSection = () => {
    console.log({...services});
  return (
    <>
      <section>
      <Container>
        <div className="service-heading">
          <h2>Our services</h2>
          <hr className="service-rule" />
          <p className="text-center">
            With our vast team of expertees we are able to carryout the various
            activities in the organization
          </p>
          <hr className="service-rule" />
        </div>
       
        <Row>
          {/* <div className="service-items"> */}
            {services.map((service, index) => {
              return <ServiceBox key={index} {...service} />;
            })}
          {/* </div> */}
        </Row>
        </Container>
      </section>
    </>
  );
};

export default ServicesSection;
