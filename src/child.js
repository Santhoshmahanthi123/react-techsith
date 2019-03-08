import React, { Component } from "react";
import "./App.css";

class Child extends Component {
  // constructor runs initially
  constructor() {
    super();

    // only runs one time when it initially renders
    console.log("child constructor");
  }
  componentWillMount() {
    console.log("child component will mount");
  }
  componentDidMount() {
    console.log("child component did mount");
  }
  render() {
    console.log("child render");
    return <div className="App">Childname : {this.props.name}</div>;
  }
  // children get rendered here
}

export default Child;
