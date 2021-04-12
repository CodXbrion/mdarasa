import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import errorGIF from "../assets/images/error.gif";

const Error = () => {
  return (
    <>
      <Container>
        <div className="error-page">
          <img src={errorGIF} alt="" />
          <h3> Ooops!</h3>
          <h3>Something went wrong</h3>
          <Link to="/">
            <Button>Let's Start Over</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Error;
