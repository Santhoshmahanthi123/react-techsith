import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "Rezerva"
  };

  changeName = newName => {
    this.setState({
      name: newName
    });
  };
  changeNameFromInput = event => {
    this.setState({
      name: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <button onClick={() => this.changeName("Welcome to Rezerva :(")}>
          Changing Name using Anonymous function :(
        </button>
        <br />
        <br />
        <button onClick={this.changeName.bind(this, "Welcome to Rezerva :)")}>
          Change Name using Anonymous function :)
        </button>
        <br />
        <br />
        <input
          type="text"
          onChange={this.changeNameFromInput}
          value={this.state.name}
        />
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
