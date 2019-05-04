import React, { Component } from 'react';
import './App.css';
import First from './First/First'
import Counter from './Counter/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<First name='Ahosan Habib' email='mdahosanhabib@outlook.com' address='Dhaka, Bangladesh'/>*/}
          <Counter/>
    </div>
    );
  }
}

export default App;
