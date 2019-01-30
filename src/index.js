import React, { Component } from "react";
import ReactDOM from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import "./styles.css";

class App extends Component {
  state = {
    counter: 0
  };

  add = () => {
    this.setState({
      counter: (this.state.counter += 1)
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Contador</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={() => this.add()}>Clique aqui para contar</button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
