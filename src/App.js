import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";

const User = ({ match }) => {
  return <h1>Welcome {match.params.username} to user page!</h1>;
};
class App extends Component {
  render() {
    console.log("render app");
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{ color: "green" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeStyle={{ color: "black" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/santhosh"
                exact
                activeStyle={{ color: "blue" }}
              >
                User Santhosh
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/peter" exact activeStyle={{ color: "red" }}>
                User Peter
              </NavLink>
            </li>
          </ul>
          <Route
            path="/"
            exact
            render={() => {
              return <h1>Welcome to home page!</h1>;
            }}
          />
          <Route
            path="/about"
            exact
            strict
            render={() => {
              return <h1>Welcome to About page!</h1>;
            }}
          />
          <Route path="/user/:username" exact strict component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
