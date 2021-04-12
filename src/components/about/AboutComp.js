import React from "react";
import "../../assets/css/about.css"
import { Container, Row, Col } from "react-bootstrap";
import AboutDescription from "./AboutDescription"
import aboutpng from "../../assets/images/about.png";
  
let aboutData = [
  {
    title: "About Us",
    desc:
      "mDarasa provides associations with a comprehensive suite of solutions based on their needs. From professional CV development, practical accounting skills development to eLearning and professional development. mDarasa has everything associations need to engage their members from start to finish.",
  },
  {
    title: "mDarasa has clients in over 4 countries.",
    desc:
      "mDarasa has offices in Nairobi, Kenya and is the leading organization in providing e-learning solutions to Emerging markets. Since inception in 2018, we are committed to providing an integrated, cost effective and highly scalable modern Learning management system to promote continuous learning by leveraging education technology and innovations.",
  },
  {
    title: "What we do",
    desc:
      "Providing learners with an exceptional and holistic experience with technology and customer service to promote learning anytime, anywhere, and on any device. We provide comprehensive eLearning solutions for higher education and skill development. mDarasa tailors turnkey solutions with its customer centric approach to deliver best in class learning experience.",
  },
];

const AboutComp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <div className="about-image">
              <img src={aboutpng} alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className="about-box">
              {/* <div className="about-item"></div> */}
              {
                 aboutData.map(about=>{
                     return <AboutDescription {...about}/>
                 })
              }
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutComp;
