import React from "react";
import "../../assets/css/why.css"
import { Container, Row } from "react-bootstrap";
import WhyBox from "./WhyBox";

let whyData = [
  {
    id: "01",
    title: "Timely",
    desc:
      "we respond to issues and problems promptly",
  },
  {
    id: "02",
    title: "Interactive",
    desc:
      "We listen to and sometimes adhere to what our honest clients tell us or instruct us to do",
  },
  {
    id: "03",
    title: "Goal Oriented",
    desc:
      "We try as hard as possible to ensure that our clients achieve the best of what we offer",
  },
  {
    id: "04",
    title: "Understanding",
    desc:
      "We are an understanding team in case of any bargaining whether in terms of pricing or any other thing",
  },
  {
    id: "05",
    title: "Ready Team",
    desc:
      "We have a fully responsive team that can help our clients for the best",
  },
  {
    id: "06",
    title: "Specialization",
    desc:
      "We position the most fitting personel in a particular field so as to provide the best service to the client",
  },
];

const WhyComponent = () => {
  return (
    <>
      <Container>
          <div className="why-heading">
              <h3 className="text-center">Why Choose Us</h3>
              <hr className="why-rule"/>
              <p>we have a number of reasons why you should opt for us</p>
          </div>
        <Row>
          {whyData.map((why, index) => {
            return <WhyBox key={index} {...why} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default WhyComponent;
