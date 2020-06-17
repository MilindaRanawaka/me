import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import About from "./About/About";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";

const Main = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/education" component={Education} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Project} />
      <Route path="/contacts" component={Contact} />
    </Switch>
  </HashRouter>
);

export default Main;
