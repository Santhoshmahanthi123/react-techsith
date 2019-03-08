import React, { Component } from "react";
import "./App.css";

class Child extends Component {
  // constructor runs initially
  constructor(props) {
    super(props);

    // only runs one time when it initially renders
    console.log("child constructor");
  }
  componentWillMount() {
    console.log("child component will mount");
  }
  componentDidMount() {
    console.log("child component did mount");
  }
  componentWillReceiveProps() {
    console.log("child component will receive props");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("child should component update");
    return true;
  }
  componentWillUpdate() {
    console.log("child component will update");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`child component did update`, prevProps);
    console.log(`child component did update`, prevState);
    console.log(`child component did update`);
  }
  componentWillUnmount() {
    console.log("child component will unmount");
  }
  render() {
    console.log("child render");
    return <div className="App">Childname : {this.props.name}</div>;
  }
  // children get rendered here
}

export default Child;
