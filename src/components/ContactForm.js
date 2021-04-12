import React from "react";
import { Container, Form, Button, Col } from "react-bootstrap";

const ContactForm = () => {
  return (
    <>
      <Container>
        <div className="contact-heading">
          <h3>CONTACT US</h3>
          <hr className="contact-rule" />
          <h6>
            Mdarasa Office is a company located in Nairobi CBD, Embassy Cinenma
            House
          </h6>
          <hr className="contact-rule" />
        </div>
        <div className="contact-form">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>

            {/* <Form.Row> */}
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} cols={12} />
              </Form.Group>
            {/* </Form.Row> */}

            <Button variant="primary" type="submit">
              Contact Now
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default ContactForm;
