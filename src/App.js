import React, { Component } from "react";
import "./App.css";
import Child from "./child";

class App extends Component {
  // constructor runs initially
  constructor() {
    super();
    this.state = {
      name: "santhosh"
    };
    // only runs one time when it initially renders
    console.log("constructor");
  }
  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth });
    }
    console.log("component will mount");
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <Child name={this.state.name} />
        {this.state.name}
        {this.state.innerWidth}
      </div>
    );
  }
  // children get rendered here
  componentDidMount() {
    console.log("component did mount");
  }
}

export default App;
