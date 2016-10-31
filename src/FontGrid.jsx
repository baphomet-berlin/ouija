import React, { Component } from 'react';
import FontPoint from './FontPoint'
import FontLine from './FontLine';
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
    const { lines } = this.props;
    return (
      <svg className="FontGrid" {...paddedSize()} >
        {
          matrix.reduce((a, b) => a.concat(b))
          .map((it, key) => 
            <FontPoint coords={it} key={key} />
          )
        }
        {
          lines.map((it, key) =>
            <FontLine key={key} coords={[paddedRange(...it[0]), paddedRange(...it[1])]} />
          )
        }
      </svg>
    );
  }
}

export default FontGrid;
