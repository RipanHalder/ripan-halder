import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProjectMedicalCorpsPage from "views/ProjectMedicalCorpsPage/ProjectMedicalCorpsPage.js";
import LittleThings from "views/Blogs/LittleThings.js";
import CycleOfLoveAndLoatheWithMangalore from "views/Blogs/CycleOfLoveAndLoatheWithMangalore.js";
import ResumePage from "views/ResumePage/ResumePage.js";

import IceBreaker from "views/Blogs/IceBreaker.js";
var hist = createBrowserHistory();
// var sslRedirect = require("heroku-ssl-redirect");
// const app = express();
// app.use(sslRedirect());
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/comp" component={Components} />
      <Route path="/mcms" component={ProjectMedicalCorpsPage} />
      <Route path="/little-things" component= {LittleThings} />
      <Route path="/cycle-of-love-and-loathe-with-mangalore" component = {CycleOfLoveAndLoatheWithMangalore} />
      <Route path="/ice-breaker" component= {IceBreaker} />
      <Route path="/aboutme" component= {ResumePage} />
      <Route path="/" component={ProfilePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

