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
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <button onClick={() => this.changeName("Welcome to Rezerva :(")}>
          Change Name using Anonymous function :(
        </button>
        <br />
        <br />
        <button onClick={this.changeName.bind(this, "Welcome to Rezerva :)")}>
          Change Name using Anonymous function :)
        </button>
        <br />
        <br />
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
