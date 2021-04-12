import React from "react";
import '../assets/css/navbar.css'
import  brandImage  from "../assets/images/mdarasaBrand.png";
// import { Link } from "react-router-dom";
import {  Navbar, Nav } from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <>
      <Navbar className="navbar" bg="light" expand="lg">
        <Navbar.Brand href="/"><img src={brandImage} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/services">SERVICES</Nav.Link>
            <Nav.Link href="/whyus">WHY US</Nav.Link>
            <Nav.Link href="/testimonials">TESTIMONIALS</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
            <Nav.Link href="/signup">SIGN UP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComp;
