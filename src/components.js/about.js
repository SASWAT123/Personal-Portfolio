import React from "react";
import saswat_full from "../assets/saswat_full.jpg";
import Experience from "./experience";

const AboutPage = () => {
  return (
    <div>
      <div className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          DEVELOPER & QUICK LEARNER
        </p>

        <div className="about-me__body">
          <p>HOLA!!!</p>My name is Saswat Priyadarshan and I am a software
          engineer. I have been developing websites and applications for around
          2 years. Most of my experience lies in{" "}
          <strong>full-stack development</strong>. I have worked with{" "}
          <strong>
            HTML/CSS, Jquery, Javascript/NodeJS, ReactJs, AngularJs, Java,
            SpringBoot, Microservices and API development, Mysql, Oracle
          </strong>{" "}
          and a bit of <strong>Python</strong>.
          <p>
            I love to read tech blogs, read novels, play video games. I am a
            FOOTBALL FANATIC. I also do competitive coding in my free time. I am
            also venturing into deep learning to create some revolutionay
            solutions for global problems.
          </p>
        </div>
        <img src={saswat_full} alt="" className="about-me__img"></img>
      </div>
      <Experience />
    </div>
  );
};

export default AboutPage;
