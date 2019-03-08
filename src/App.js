import React, { Component } from "react";
import "./App.css";
import User from "./components/user";
import UniqueId from "react-html-id";

class App extends Component {
  constructor() {
    super();
    UniqueId.enableUniqueIds(this);
    this.state = {
      users: [
        { id: this.nextUniqueId(), name: "santhosh", age: 22 },
        {
          id: this.nextUniqueId(),
          name: "rajesh",
          age: 23
        },
        {
          id: this.nextUniqueId(),
          name: "tinsy",
          age: 24
        }
      ]
    };
    console.log(this.state);
  }

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
                key={user.id}
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
