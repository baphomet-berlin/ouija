import React, { Component } from 'react';

import LetterBox from './components/LetterBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ouija</h1>
        <LetterBox />
      </div>
    );
  }
}

export default App;
