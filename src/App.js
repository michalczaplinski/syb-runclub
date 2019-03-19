import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Dashboard from "./dashboard";
import Home from "./home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Router>
      </div>
    );
  }
}

export default App;
