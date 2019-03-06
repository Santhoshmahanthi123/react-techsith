import React, { Component } from "react";
import User from "./User";
class Users extends Component {
  state = {
    users: [
      { name: "jhon", age: 20 },
      { name: "jill", age: 30 },
      { name: "peter", age: 40 }
    ]
  };
  render() {
    return (
      <div>
        <h3>These are the users of our application</h3>
        <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
        <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
        <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
      </div>
    );
  }
}
export default Users;
