import React, { Component } from "react";
import "./App.css";
import Child from "./components/parentToChild/child";

class App extends Component {
  state = {
    title: "placeholder title"
  };

  changeTheWorld = newTitle => {
    this.setState({ title: newTitle });
  };

  render() {
    return (
      <div className="App">
        <Child
          doSomeThing={this.changeTheWorld.bind(this, "new world")}
          title={this.state.title}
        />
      </div>
    );
  }
}

export default App;
