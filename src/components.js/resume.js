import React from "react";
import { Container, Row, Col } from "reactstrap";
import Saswat from "../assets/Saswat.jpg";
import About from "./aboutme";

const Resume = () => {
  return (
    <div className="resume_page">
      <Container fluid={true}>
        <Row>
          <Col sm="3" xs="12" className="left_pane">
            <Row className="personal_info">
              <Col>
                <img className="profile_image" src={Saswat} alt="" />
              </Col>
            </Row>
            <Row className="user_name">
              <h3>Saswat Priyadarshan</h3>
            </Row>
            <Row className="basic_details">
              <h6>Software Engineer</h6>
            </Row>
            <div className="contact_details">
              <Row className="contact_icons">
                <i className="fa fa-envelope"></i>
                psaswat21@gmail.com
              </Row>
              <Row className="contact_icons call">
                <i className="fa fa-phone"></i>
                +91-9962551950
              </Row>
            </div>
            <div className="skills">
              <Row>
                <h6>Skill Set</h6>
              </Row>
              <Row>
                <p>
                  HTML, CSS, Bootstrap, Javascript, Git, Jquery, React, Redux,
                  Material Design, Java, Python, Eureka, Mysql, Node.js,
                  Dialogflow, SpringBoot, Restful APIs, Oracle, Microservice
                  Architecture, Algorithms, Data Structures
                </p>
              </Row>
            </div>
          </Col>
          <Col sm="9" xs="12" className="right_pane">
            <About />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
