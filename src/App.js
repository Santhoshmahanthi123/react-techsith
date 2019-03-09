import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import Route from "react-router-dom/Route";

const User = params => {
  return <h1>Welcome {params.username} to user page!</h1>;
};
class App extends Component {
  state = {
    loggedIn: false
  };
  loginHanle = () => {
    this.setState({ loggedIn: true });
  };
  render() {
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
          <input
            type="button"
            value="Log In"
            onClick={this.loginHanle.bind(this)}
          />
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
          {/* to check whether the user is logged in or not */}
          <Route
            path="/user/:username"
            exact
            strict
            render={({ match }) =>
              this.state.loggedIn ? (
                <User username={match.params.username} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
