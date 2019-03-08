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
  componentWillUpdate() {
    console.log("component will update");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  unMountChild() {
    this.setState({ name: "Rajesh" });
  }

  render() {
    console.log("render");
    if (this.state.name === "Rajesh") {
      return <div />;
    }
    return (
      <div className="App">
        name : {this.state.name} |{this.state.innerWidth}
        <Child name={this.state.name} />
        <button onClick={this.changeState.bind(this)}>Change State</button>
        <button onClick={this.unMountChild.bind(this)}>Child Unmount</button>
      </div>
    );
  }
}

export default App;
