import React, { Component } from 'react';
import './App.css';
import First from './First/First'
class App extends Component {
  render() {
    return (
      <div className="App">
          <First name='Ahosan Habib' email='mdahosanhabib@outlook.com' address='Dhaka, Bangladesh'/>
      </div>
    );
  }
}

export default App;
