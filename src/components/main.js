import React from "react";
import LandingPage from "./landingpage";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./aboutme";
import Project from "./projects";
import Contact from "./contact";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Project} />
    </Switch>
  );
};

export default Main;
