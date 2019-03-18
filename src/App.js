import React, { Component } from "react";
import "./App.css";

class App extends Component {
  onClick = () => {
    console.log(this.firstName.value);
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
          />
        </div>
        <div>
          <span>Last Name:</span>
          <input type="text" />
        </div>
        <div>
          <span>Age:</span>
          <input type="text" />
        </div>
        <div>
          <input type="submit" value="submit" onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
