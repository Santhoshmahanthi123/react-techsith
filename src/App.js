import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "raj"
  };

  // constructor runs initially
  constructor() {
    super();
    this.state = {
      name: "santhosh"
    };

    // only runs one time when it initially renders
    console.log("Initial render in constructor main");
  }
  render() {
    return <div className="App">{this.state.name}</div>;
  }
}

export default App;
