import React, { Component } from 'react';

import Editor from './components/Editor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ouija</h1>
        <Editor />
      </div>
    );
  }
}

export default App;
