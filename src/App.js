import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "Rezerva"
  };

  changeName = () => {
    this.setState({
      name: "Welcome to Rezerva"
    });
  };
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <button onClick={this.changeName}>Change State </button>
        <br />
        <br />
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
