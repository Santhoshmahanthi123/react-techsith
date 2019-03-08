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
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update");
    return true;
  }
  changeState = () => {
    this.setState({ name: "peter" });
  };
  // children get rendered here
  componentDidMount() {
    console.log("component did mount");
  }
  componentWillReceiveProps() {
    console.log("component will receive props");
  }
  render() {
    console.log("render");
    return (
      <div className="App">
        name : {this.state.name} |{this.state.innerWidth}
        <Child name={this.state.name} />
        <button onClick={this.changeState.bind(this)}>Change State</button>
      </div>
    );
  }
}

export default App;
