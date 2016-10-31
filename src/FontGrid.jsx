import React, { Component } from 'react';
import FontPoint from './FontPoint'
import './FontGrid.css';

const padding = 5;
const unit = 10;
const units = {
  x: 3,
  y: 7,
};

const paddedRange = (x, y) =>
  [x * unit + padding, y * unit + padding]

const matrix = Array.from(new Array(units.x), (x, i) => 
  Array.from(new Array(units.y), (y, j) => paddedRange(i, j) ));

const paddedDimension = (dimension) =>
  (units[dimension] * unit);

const paddedSize = () => ({
  width: paddedDimension('x'),
  height: paddedDimension('y'),
});

class FontGrid extends Component {
  render() {
    return (
      <svg className="FontGrid" {...paddedSize()} >
        {
          matrix.reduce((a, b) => a.concat(b))
          .map((coords, key) => 
            <FontPoint coords={coords} key={key} />
          )

        }
      </svg>
    );
  }
}

export default FontGrid;
