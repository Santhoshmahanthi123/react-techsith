import React, { Component } from "react";
import User from "./User";
const Console = console;
class Users extends Component {
  state = {
    users: [
      { name: "jhon", age: 20 },
      { name: "jill", age: 30 },
      { name: "peter", age: 40 },
      { name: "jim", age: 30 },
      { name: "tony", age: 60 },
      { name: "santhosh", age: 20 }
    ],
    title: "Welcome to Rezerva application"
  };
  makeMeYounger = () => {
    // below is hard coded
    // this.setState({
    //   users: [
    //     { name: "jhon", age: 10 },
    //     { name: "jill", age: 20 },
    //     { name: "peter", age: 30 }
    //   ]
    // });
    // making code to dynamiclly change its state
    const newState = this.state.users.map(user => {
      const tempUser = user;
      tempUser.age -= 10;
      return tempUser;
    });
    this.setState({
      newState
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h3>These are the users of our application</h3>
        {this.state.users.map(user => {
          return <User age={user.age}>{user.name}</User>;
        })}
        <br />
        <button onClick={this.makeMeYounger}>
          Make users 10 years younger
        </button>
      </div>
    );
  }
}
export default Users;
