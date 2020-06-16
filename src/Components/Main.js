import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import About from './About/About'
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import RouteManager from "./RouteManage";

const Main = () => (
    <BrowserRouter>
            <Switch>

                <RouteManager exact path="/" component={About} />
                <RouteManager exact path="/education" component={Education} />
                <RouteManager exact path="/skills" component={Skills} />
                <RouteManager exact path="/projects" component={Project} />
                <RouteManager exact path="/contacts" component={Contact} />
            </Switch>
    </BrowserRouter>
)

export default Main;