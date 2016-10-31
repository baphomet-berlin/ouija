import React, { Component } from 'react';
import './FontGrid.css';

class FontGrid extends Component {
  static padding = 5;
  static unit = 10;
  render() {

    return (
      <svg className="FontGrid" width={20} height={90}>
      </svg>
    );
  }
}

export default FontGrid;
