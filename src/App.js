import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Trainers from "./pages/trainers";
import Home from "./pages/home";
import About from "./pages/about";

import NavBar from "./components/NavBar/NavBar";
import Layout from "./components/Layout/Layout";
import Instructors from "./pages/instructors";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <NavBar />
            <Layout>
              <Route path="/" exact component={Home} />
              <Route path="/trainers" component={Trainers} />
              <Route path="/about" component={About} />
              <Route path="/instructors" component={Instructors} />
            </Layout>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
