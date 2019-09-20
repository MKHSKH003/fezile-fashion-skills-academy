import "@patternfly/react-core/dist/styles/base.css"

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/login/";
import SignupPage from "views/sign-up/";

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/login-page" component={LoginPage} />
            <Route path="/sign-up" component={SignupPage} />
            <Route path="/components" component={Components} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
