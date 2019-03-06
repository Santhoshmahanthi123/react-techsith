import React, { Component } from "react";
import User from "./User";
const Console = console;
class Users extends Component {
  state = {
    users: [
      { name: "jhon", age: 20 },
      { name: "jill", age: 30 },
      { name: "peter", age: 40 }
    ],
    title: "Welcome to Rezerva application"
  };
  makeMeYounger = () => {
    Console.log("Button clicked");
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h3>These are the users of our application</h3>
        <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
        <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
        <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
        <br />
        <button onClick={this.makeMeYounger}>
          Make users 10 years younger
        </button>
      </div>
    );
  }
}
export default Users;
