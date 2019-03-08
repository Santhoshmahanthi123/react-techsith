import React, { Component } from "react";
import "./App.css";
const Temp = props => {
  console.log("render Temp");
  return <div>{props.val}</div>;
};
class App extends Component {
  state = {
    val: 1
  };

  // for every 2 seconds component updated that is it sets its state for ever 2 seconds
  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { val: 1 };
      });
    }, 2000);
  }

  // to fix above problem we have one method called should component update

  shouldComponentUpdate(nextProp, nextState) {
    console.log("next state", nextState);
    console.log("current state", this.state);
    return this.state.val === nextState.val ? false : true;
  }
  render() {
    console.log("render app");
    return (
      <div className="App">
        <Temp val={this.state.val} />
      </div>
    );
  }
}

export default App;
