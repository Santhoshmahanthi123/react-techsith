import React, { Component } from "react";
import "./App.css";
const Temp = () => {
  return [<div>Hi......</div>, <div>Hello...</div>];
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Temp />
      </div>
    );
  }
}

export default App;
