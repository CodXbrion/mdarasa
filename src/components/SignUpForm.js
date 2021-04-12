import React from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/forms.css";

const SignUpForm = () => {
  return (
    <>
      <Container>
        <div className="contact-heading">
          <h3>Student Sign Up</h3>
          <hr className="contact-rule" />
        </div>
        <div className="contact-form">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridSecondName">
                <Form.Label>Second Name</Form.Label>
                <Form.Control type="text" placeholder="Second Name" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCode">
                <Form.Label>Referral code (optional)</Form.Label>
                <Form.Control type="text" placeholder="Referral code" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPasswordConfirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password Confirmation"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>
                  Already have an account?
                  <Button variant="primary" type="submit">
                    <a
                      href="https://web.mdarasa.co.ke/users/sign_in?__u_i=student"
                      className="sign-in-link"
                    >
                      log in
                    </a>
                  </Button>
                </Form.Label>
              </Form.Group>
              <Form.Group as={Col}>
                {/* <a href="https://web.mdarasa.co.ke/users/sign_in?__u_i=student">sihaj</a> */}
                <a href="https://web.mdarasa.co.ke/users/sign_in?__u_i=student">
                  <Button variant="primary" type="submit">
                    Sign UP
                  </Button>
                </a>
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default SignUpForm;
