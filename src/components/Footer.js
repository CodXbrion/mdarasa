import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/footer.css"


const Footer = () => {

    let currentYear = new Date().getFullYear()
  return (
    <>
      <footer>
        <Container className="container">
          <Row>
            <Col className="footer-items">
            
              <h3>Contacts</h3>
              <hr className="footer-rule"/>
              <p>
                {" "}
                <span>Phone</span> <br />  +254708068851
              </p>
              <p>
                <span>Email</span> <br /> info@mdarasa.com
              </p>
              <p>
                {" "}
                <span>Address</span> <br /> Embassy Cinema, <br /> Latema Road,{" "}
                <br /> Nairobi CBD, <br /> Kenya{" "}
              </p>
            </Col>
            <Col className="footer-items">
              <h3>Links</h3>
              <hr className="footer-rule"/>
              <Link to="/">mDarasa App</Link>
              <Link to="/"> kra</Link>
              <Link to="/">Sahara Digital Hub</Link>
            </Col>
            <Col className="footer-items">
              <h3 >Services</h3>
              <hr className="footer-rule"/>
              <Link to="/">Accounting and Taxation</Link>
              <Link to="/">E-learning provision</Link>
              <Link to="/">web development</Link>
              <Link to="/">web hosting</Link>
              <Link to="/">graphics design</Link>
              <Link to="/">digital marketing</Link>
            </Col>
            <Col className="footer-items">
              <h3>Social</h3>
              <hr className="footer-rule"/>
              <a href="#"> Facebook</a>
              <a href="#"> Twitter</a>
              <a href="#"> Instagram</a>
              <a href="#"> LinkedIn</a>
            </Col>
          </Row>
        </Container>
        <div className="footer-credits">
            &copy; 2015 - {currentYear}. All right reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
