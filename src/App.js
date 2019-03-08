import React, { Component } from "react";
import "./App.css";
import User from "./components/user";

class App extends Component {
  state = {
    users: [
      {
        name: "santhosh",
        age: 22
      },
      {
        name: "rajesh",
        age: 23
      },
      {
        name: "tinsy",
        age: 24
      }
    ]
  };

  // do delete a userwe have to copy those users in the below method
  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    // replacing users inside the above state
    this.setState({ users: users });
  };
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map((user, index) => {
            return (
              <User
                age={user.age}
                deleteEvent={this.deleteUser.bind(this, index)}
              >
                {user.name}
              </User>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
