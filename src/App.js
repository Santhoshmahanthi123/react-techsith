import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
class App extends Component {
  render() {
    console.log("render app");
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            exact
            render={() => {
              return <h1>Welcome to home page!</h1>;
            }}
          />
          <Route
            path="/about/"
            exact
            strict
            render={() => {
              return <h1>Welcome to About page!</h1>;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
