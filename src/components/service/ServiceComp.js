import React from "react";
import "../../assets/css/servicePage.css"
import { Container, Row} from "react-bootstrap";
import ServiceDisplay from "./ServiceDisplay";
  

let serviceData = [
  {
    title: "Online Class Teaching",
    desc:
      "we provide a platform where students and teachers can interact to provide the learning experience",
  },
  {
    title: "Accounting and Taxation",
    desc:
      "Mdarasa carries out the task of accounting through company outsourcing with our experienced personnel",
  },
  {
    title: "Website Development",
    desc:
      "through our experienced progaramming team we develop functional websites inline withe client's requirements",
  },
  {
    title: "Website Hosting",
    desc:
      "we provide the best website hosting solutions with three months website management",
  },
  {
    title: "Design and Video editting",
    desc: "With our experienced team we carry out designing and video editting",
  },
  {
    title: "Digital Marketing",
    desc:
      "we carry out marketing through various means like outdoor screen marketing…",
  },
];

const ServiceComp = () => {
  return (
    <>
      <Container>
        <Row>
        
            {serviceData.map((service, index) => {
              return <ServiceDisplay key={index} {...service} />;
            })}
          
        </Row>
      </Container>
    </>
  );
};

export default ServiceComp;
