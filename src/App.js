import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    let check = true;
    let h2 = 'Welcome to React-JS'
    let p = 'To get started, edit <code>src/App.js</code> and save to reload.'

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{ h2 }</h2>
        </div>
        <p className="App-intro">
          { p }
        </p>
        <div>{ check ? 'Yes' : 'No' }</div>
      </div>
    );
  }
}

export default App;
