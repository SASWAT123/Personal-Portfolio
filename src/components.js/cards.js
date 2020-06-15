/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const CardView = (props) => {
  return (
    <div className="card">
      <Card className="card_template">
        <CardImg
          className="card_img"
          top
          width="100%"
          height="200px"
          src={props.cardDetails.src}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <h4>{props.cardDetails.title}</h4>
          </CardTitle>
          <CardSubtitle>
            <h6>{props.cardDetails.technology}</h6>
          </CardSubtitle>
          <CardText className="card_text">
            {props.cardDetails.description}
          </CardText>
          <a
            className="git_link"
            target="_blank"
            href={props.cardDetails.link}
            style={{ color: "black" }}
          >
            <i class="fa fa-github" aria-hidden="true">
              {" "}
              Source Code
            </i>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardView;
