import React, { Component } from 'react';
import logo from './logo.svg';
import Toggle from './Components/Toggle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Toggle>
          <h1>ERROOOOR</h1>
        </Toggle>
      </div>
    );
  }
}

export default App;
