import React, { Component } from "react";
import User from "./User";
class Users extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>These are the users of our application</h3>
        <User />
        <User age="21">Sujith</User>
        <User age="22">Rajesh</User>
      </div>
    );
  }
}
export default Users;
