import React from "react";
import LandingPage from "./landingpage";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./aboutme";
import Resume from "./resume";
import Project from "./projects";
import Contact from "./contact";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Project} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  );
};

export default Main;
