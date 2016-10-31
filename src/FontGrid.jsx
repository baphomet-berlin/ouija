import React, { Component } from 'react';
import './FontGrid.css';

const padding = 5;
const unit = 10;
const units = {
  x: 2,
  y: 8,
};

const paddedDimension = (dimension) =>
  (units[dimension] * unit) + (padding * 2);

const paddedSize = () => ({
  width: paddedDimension('x'),
  height: paddedDimension('y'),
});

class FontGrid extends Component {
  render() {
    return (
      <svg className="FontGrid" {...paddedSize()} >
      </svg>
    );
  }
}

export default FontGrid;
