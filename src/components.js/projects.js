import React, { Component } from "react";
import CardView from "./cards";
import cutomer_churn from "../assets/customer-churn.png";
import flutter_chat from "../assets/flutter_chat.jpg";
import portfolio from "../assets/portfolio.png";
import webmap from "../assets/webmap.png";
import slack_clone from "../assets/slack_clone.png";
import microservices from "../assets/microservices.png";
import url_shortner from "../assets/URL-shortener.png";
import Dialogflow from "../assets/Dialogflow.png";
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
        src: Dialogflow,
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
        technology: "Flutter + Firebase",
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
      {
        title: "URL Shortner",
        technology: "React + Express + Mongo Application",
        description:
          "This is a simple application that takes in a long URL and converts it into a small URL. This can be extended to build some real world application that involves shortening of urls.",
        link: "https://github.com/SASWAT123/URLShortener",
        src: url_shortner,
      },
      {
        title: "Slack Clone",
        technology: "React + Redux + Firebase",
        description:
          "This is a clone of the slack app and its functionality. I am using React semantic UI for this application. Redux is used for the global state management of the application.",
        link: "https://github.com/SASWAT123/Slack-Clone",
        src: slack_clone,
      },
      {
        title: "Springboot Microservices",
        technology: "Springboot + Eureka Microservices",
        description:
          "This is a simple application demonstrating the implementation of microservices with Eureka. I am implemenitng Eureka service discovery and registry along with Hysterix for fault tolerance. ",
        link: "https://github.com/SASWAT123/Microservices-Architecture",
        src: microservices,
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
            <CardView cardDetails={this.state[7]} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="4">
            <CardView cardDetails={this.state[1]} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4" lg="4">
            <CardView cardDetails={this.state[8]} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="4">
            <CardView cardDetails={this.state[2]} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="4">
            <CardView cardDetails={this.state[6]} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4" lg="4">
            <CardView cardDetails={this.state[3]} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="4">
            <CardView cardDetails={this.state[0]} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="4">
            <CardView cardDetails={this.state[5]} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Projects;
