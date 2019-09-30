import "@patternfly/react-core/dist/styles/base.css"
import "react-toastify/dist/ReactToastify.css";
import "./index.css"

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import Courses from "views/courses";

var hist = createBrowserHistory();

ReactDOM.render(
    <div>
        <Router history={hist}>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/profile-page" component={ProfilePage} />
                <Route path="/courses" component={Courses} />
            </Switch>
        </Router>
        <ToastContainer />
    </div>,
    document.getElementById("root")
);
