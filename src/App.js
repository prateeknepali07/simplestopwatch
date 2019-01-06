import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Welcome to Timer App built in React js </p>
        <br />
        <Timer start={Date.now()} />
      </div>
    );
  }
}

export default App;
