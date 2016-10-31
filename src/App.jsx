import React, { Component } from 'react';
import FontGrid from './FontGrid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ouija</h1>
        <FontGrid lines={[[[0, 0], [0, 1]]]} />
      </div>
    );
  }
}

export default App;
