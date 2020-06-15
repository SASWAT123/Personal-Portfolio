/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Saswat from "../assets/Saswat.jpg";
import Typical from "react-typical";

const LandingPage = () => {
  return (
    <div className="intro" id="home">
      <h1 className="intro_title">
        Hi, I am <strong>Saswat Priyadarshan</strong>
      </h1>
      <div className="intro_subtitle tagline">
        I am a{" "}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "FULL-STACK DEVELOPER",
            1500,
            "TEAM PLAYER",
            1500,
            "CREATIVE THINKER",
            1500,
            "TECH ENTHUSIAST",
            1500,
          ]}
        />
      </div>
      <img src={Saswat} alt="" className="intro_img" />
      <div className="icons-social">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/saswat-priyadarshan-ba2241122/"
        >
          <i className="fa fa-linkedin-square"></i>
        </a>
        <a target="_blank" href="https://github.com/SASWAT123">
          <i className="fa fa-github-square"></i>
        </a>
        <a target="_blank" href="https://twitter.com/P21Saswat">
          <i className="fa fa-twitter-square"></i>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
