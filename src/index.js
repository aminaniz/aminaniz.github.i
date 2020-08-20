/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import SignUp from "views/index-sections/SignUp";
import Donated from "views/examples/donated";
import Contact from "views/examples/contact"
import Add from "views/examples/add"
import AcceptedBooks from "views/examples/acceptedbooks";
import Bookshelf from "views/examples/bookshelf";
import Wishlist from "views/examples/wishlist";
import Reset from "views/examples/reset";
import EditProfile from "views/examples/editprofile";
import Search from "views/examples/search";
import OtherProfile from "views/examples/otherprofile";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        />
         <Route
          path="/otherprofile"
          render={props => <OtherProfile {...props} />}
        />
        <Route
          path="/landing-page"
          render={props => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        />
        <Route path="/login-page" render={props => <LoginPage {...props} />} />
        <Route path="/add" render={props => <Add {...props} />} />
        <Route path="/register" render={props => <SignUp {...props} />} />
        <Route
          path="/acceptedbooks"
          render={props => <AcceptedBooks {...props} />}
        />
         <Route
          path="/search-page"
          render={props => <Search {...props} />}
        />
        <Route
          path="/donated"
          render={props => <Donated {...props} />}
        />
        <Route
          path="/search"
          render={props => <Search {...props} />}
        />
        <Route
          path="/bookshelf"
          render={props => <Bookshelf {...props} />}
        />
         <Route
          path="/reset"
          render={props => <Reset {...props} />}
        />
        <Route
          path="/ProfilePage"
          render={props => <ProfilePage {...props} />}
        />
        <Route
          path="/editprofile"
          render={props => <EditProfile {...props} />}
        />
        <Route
          path="/wishlist"
          render={props => <Wishlist {...props} />}
        />
        
        <Route
          path="/contact"
          render={props => <Contact {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
