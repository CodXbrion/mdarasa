import React from 'react'
import "../../assets/css/platform.css"
import { Container, Row, Col, Button } from "react-bootstrap";

//assets imports
// import carousel1 from "../../assets/images/carousel1.jpg"

import t from "../../assets/videos/t.mp4"

const Platform = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <video controls>
                        <source src={t} type="video/mp4"/>
                    </video>
                </Col>
                <Col md={6}>
                    <h5>MDARASA PLATFORM</h5>
                    <h6>WELCOME TO MDARASA ONLINE CLASSES PLATFORM</h6>
                    <p>mDarasa provides associations with a comprehensive suite of solutions based on their needs. From professional CV development, practical accounting skills development to eLearning and professional development. mDarasa has everything associations need to engage their members from start to finish.</p>
                    <a href="#home">
                        <Button>CONTACT US</Button>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Platform
