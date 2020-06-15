import React, { Component } from "react";
import CardView from "./cards";
import cutomer_churn from "../assets/customer-churn.png";
import flutter_chat from "../assets/flutter_chat.jpg";
import portfolio from "../assets/portfolio.png";
import webmap from "../assets/webmap.png";
import { Row, Col } from "reactstrap";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        title: "Amigo",
        technology: "Android + DialogFlow",
        description:
          "Rehabilitation android application with integrated paypal payment gateway. We used DialogFlow (formerly api.ai) for implementing the chatbot in this. Firebase is used for backend.",
        link: "https://github.com/garvitkhamesra/Amigo",
      },
      {
        title: "Portfolio",
        technology: "ReactJs",
        description:
          "This is a react project that showcase my portfolio. I have used material design components to develop this. It is mobile friendly, lightweight and follows responsive UI design principles.",
        link: "https://github.com/SASWAT123/Portfolio",
        src: portfolio,
      },
      {
        title: "Peer to Peer Chat",
        technology: "Flutter",
        description:
          "This is a peer to peer chat application developed using Flutter and Firebase for managed backend services. It works in real time and you can also see the chat history of their recent chats.",
        link:
          "https://github.com/SASWAT123/BlackJack/blob/master/BalackJack.py",
        src: flutter_chat,
      },
      {
        title: "Volcanoe distribution",
        technology: "Python3 + Folium Library",
        description:
          "This webmap tell about the volcanoes distributed across American continent and the distribution of countries based on population. I used Folium library visualisation.",
        link: "https://github.com/SASWAT123/WebMap-using-Python",
        src: webmap,
      },
      {
        title: "Customer Churn Analysis",
        technology: "R + Machine Learning",
        description:
          "This was my final year project where I developed predictive machine learning models to predict the customer churn in the Telecom industry based on IBM Telco dataset.",
        link: "https://github.com/SASWAT123/Customer-Churn-Analysis",
        src: cutomer_churn,
      },
      {
        title: "EmpManagement System",
        technology: "Full Stack Application",
        description:
          "This is a full stack web application that is developed using Angular 2, Springboot and MongoDb as part of my full stack bootcamp. This performs all the basic CRUD operations.",
        link: "https://github.com/SASWAT123/Full-Stack-Project",
      },
    ];
  }
  render() {
    return (
      <div className="project_Cards">
        <Row>
          <Col xs="12" sm="6" md="4" lg="4">
            <CardView cardDetails={this.state[4]} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="4">
            <CardView cardDetails={this.state[0]} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="4">
            <CardView cardDetails={this.state[1]} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4" lg="4">
            <CardView cardDetails={this.state[5]} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="4">
            <CardView cardDetails={this.state[3]} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="4">
            <CardView cardDetails={this.state[2]} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Projects;
