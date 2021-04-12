import React, { useState, useEffect } from "react";
import "../../assets/css/testimonials.css"
import { Container, Col } from "react-bootstrap";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import Testimony from "./Testimony";
  
//image imports
import test1 from "../../assets/images/test1.png";
import test2 from "../../assets/images/test2.jpg";
import test3 from "../../assets/images/test3.png";

let testmonialData = [
  {
    img: test1,
    name: "James Omondi",
    msg:
      "Mdarasa is the most responsive sight i have ever worked with. the design is very user friendly thereby making the user explore their experience to the ultimum.",
  },
  {
    img: test2,
    name: "Joyce Maina",
    msg:
      "whenever i have a problem while using this site and happen to call the office for assistance, they always get back to me. they even go ahead and call you in case one is low on credit.",
  },
  {
    img: test3,
    name: "John Wanyamar",
    msg:
      "through online learning offered by this site, i am now able to graduate from my business school having gotten all the revision materials from this site",
  },
];

const TestimonyComp = () => {
  const [testimony, setTestimony] = useState(testmonialData);
  const [value, setValue] = useState(0);

  //function to ensure value does not fall out of index range
  function checkValue(value){
      let len = testimony.length-1
    //   console.log(len);
      if (value>len) {
          return 0;
      }
      if (value<0) {
          return len;
      }
    //   console.log(value);
      return value;
      
  }

  //function to display next testimony on click
  function next() {
        setValue(()=>{
             return checkValue(value+1)
        })
  }
  //function to display prev testimony on click
  function prev() {
      setValue(()=>{
          return checkValue(value-1)
      })
  }

  //function for auto scroll
  useEffect(() => {
      let timeout = setTimeout(() => {
          setValue(()=>{
              return checkValue(value + 1)
          })
      }, 3000);
      return () => {
          clearTimeout(timeout)
      }
  }, [value])

  //picking testimony to display
  let displayTestimony = testimony[value];

  return (
    <>
      <Container>
        <div className="testimonial-heading">
          <h3>Client Testimonials</h3>
          <hr className="testimonial-rule"/>
        </div>
        <div className="testimonial-container">
          <Col lg={4}>
            <div className="testimonial-box">
              <AiOutlineLeftCircle size="30px" className="control-icon" onClick={prev} />
              <Testimony {...displayTestimony}/>
              <AiOutlineRightCircle size="30px" className="control-icon" onClick={next} />
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
};

export default TestimonyComp;
