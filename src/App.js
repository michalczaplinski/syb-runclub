import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import "./App.css";

import Home from "./pages/home";
import About from "./pages/about";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Instructors from "./pages/instructors";
import Profile from "./pages/profile";

import NavBar from "./components/NavBar/NavBar";
import Layout from "./components/Layout/Layout";
import InstructorProfile from "./components/InstructorProfile/InstructorProfile";

const PrivateRoute = ({ component: Component, ...props }) => {
  const token = localStorage.getItem("access_token");
  const expiresAt = parseInt(localStorage.getItem("token_expires_at"));
  const currentTime = Math.round(new Date().getTime() / 1000);

  return token && expiresAt > currentTime ? (
    <Route {...props} component={Component} />
  ) : (
    <Redirect to="/login" />
  );
};

const App = () => (
  <div className="App">
    <Router>
      <>
        <NavBar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/instructors" component={Instructors} />
            <Route path="/instructors/:slug" component={InstructorProfile} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Layout>
      </>
    </Router>
  </div>
);

export default App;
