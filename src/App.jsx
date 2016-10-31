import React, { Component } from 'react';

import Alphabet from './components/Alphabet';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ouija</h1>
        <Alphabet />
      </div>
    );
  }
}

export default App;
