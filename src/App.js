import React, { Component } from "react";
import "./App.css";

class App extends Component {
  onClick = () => {
    alert(
      `yey: ${this.firstName.value} |  ${this.firstName.value} submitted :)`
    );
  };
  onKeyUp = (target, e) => {
    if (e.keyCode === 13) {
      switch (target) {
        case "firstName":
          this.lastName.focus();
          break;
        case "lastName":
          this.age.focus();
          break;
        case "age":
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
      }
    }
  };
  render() {
    return (
      <div className="App">
        <div>
          <span>First Name:</span>
          <input
            type="text"
            ref={input => {
              this.firstName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "firstName")}
          />
        </div>
        <div>
          <span>Last Name:</span>
          <input
            type="text"
            ref={input => {
              this.lastName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "lastName")}
          />
        </div>
        <div>
          <span>Age:</span>
          <input
            type="text"
            ref={input => {
              this.age = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "age")}
          />
        </div>
        <div>
          <input
            type="submit"
            value="submit"
            onClick={this.onClick}
            ref={input => {
              this.submit = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "submit")}
          />
        </div>
      </div>
    );
  }
}

export default App;
