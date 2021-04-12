import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../assets/css/elearning.css"


//image imports
import store from "../../assets/images/store.jpeg"
const Elearning = () => {
    return (
        <>
            <Container>
            <Row>
                
                <Col md={6}>
                    <h5>MDARASA PLATFORM</h5>
                    <h6>WELCOME TO MDARASA ONLINE CLASSES PLATFORM</h6>
                    <p>mDarasa provides associations with a comprehensive suite of solutions based on their needs. From professional CV development, practical accounting skills development to eLearning and professional development. mDarasa has everything associations need to engage their members from start to finish.</p>
                    <a href="#home">
                        <Button>CONTACT US</Button>
                    </a>
                </Col>
                <Col md={6}>
                    <a href="#home">
                        <img className="store-image" src={store} alt=""/>
                    </a>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Elearning
