import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Projects from "./projects";
import AboutPage from "./about";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/resume" component={AboutPage} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  );
};

export default Main;
