import React from "react";
import { Row, Col } from "reactstrap";

const About = () => {
  return (
    <div className="about_me">
      <div className="about_me_details">
        <p>
          <p>HOLA!!!</p>I am a Software Engineer. I have been developing
          websites and applications for around 2 years. Most of my experience
          lies in full-stack development. I did my bachelors in Information
          Technology from <b>SRM University</b> in Chennai and graduated with a
          CGPA of 9.261.
        </p>
        <p>
          I love to read tech blogs, read novels, play video games. I am a
          FOOTBALL FANATIC. I also do competitive coding in my free time. I am
          also venturing into deep learning to create some revolutionay
          solutions for global problems.
        </p>
      </div>

      <h4>Work Experience</h4>
      <div className="work_experience">
        <Row className="contact_icons">
          <Col xs="6" sm="6" md="6" lg="6">
            <Row>
              <i class="fa fa-laptop"></i>
              <h6>VERIZON</h6>
            </Row>
          </Col>
          <Col xs="6" sm="6" md="6" lg="6">
            <h6>Jul 2018 - Present</h6>
          </Col>
          <p>
            Developing highly scalable, efficient and robust applications that
            can handle millions of users simultaneously.
          </p>
          <p>
            1. Designing and implementing the engineering architecture for
            enable 5G connectivity across the USA.
          </p>
          <p>
            2. Solved the discrepancies between physical and logical layer
            mapping for network equipments.
          </p>
          <p>
            3. Initiated a shift towards Material Design in the User interface
            for the internal projects.
          </p>
        </Row>
        <Row className="contact_icons">
          <Col xs="6" sm="6" md="6" lg="6">
            <Row>
              <i class="fa fa-laptop"></i>
              <h6>INFOSYS</h6>
            </Row>
          </Col>
          <Col xs="6" sm="6" md="6" lg="6">
            <h6>Jan 2018 - May 2018</h6>
          </Col>
          <p>
            Developed automated educator allotment system to automate the
            educator allotment process which was done manually earlier.
          </p>
        </Row>
      </div>
    </div>
  );
};

export default About;
