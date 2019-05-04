import React, { Component } from 'react';
import './App.css';
import First from './First/First'
import Counter from './Counter/Counter'

class App extends Component {

    state = {
        persons: [
            { name: 'Ahosan Habib', email: 'mdahosahabib@outlook.com', address: 'Dhaka, Bangladesh' },
            { name: 'Ahosan', email: 'cseahosan@gmaill.com', address: 'Dhaka, Bangladesh' },
            { name: 'Habib', email: 'ahosan.laravel@gmail.com', address: 'Dhaka, Bangladesh' }
        ]
    }

  render() {
    return (
      <div className="App">
          <First name={ this.state.persons[0].name } email={ this.state.persons[0].email } address={this.state.persons[0].address}/>
    </div>
    );
  }
}

export default App;
