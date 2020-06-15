import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import About from './About'
import Education from "./Education";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

const Main = () => (
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/projects" component={Project} />
                <Route exact path="/contacts" component={Contact} />
            </Switch>
    </BrowserRouter>
)

export default Main;