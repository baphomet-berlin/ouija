import React from 'react';
import FontPoint from './FontPoint'
import FontLine from './FontLine';
import { Set } from 'immutable';

import './FontGrid.css';

const padding = 5;
const unit = 20;
const paddedCoords = (point) =>
  [point.first() * unit + padding, point.last() * unit + padding]

class FontGrid extends React.Component{


  render() {
    const { nodes, vertices } = this.props.grid;

    return (<svg className="FontGrid">
      {nodes.map(it =>
        <FontPoint
          key={it.toString()}
          coords={paddedCoords(it)} />
      )}
      {vertices.toSeq().map((active, [p1, p2]) =>
        <FontLine
          key={p1.toString() + p2.toString()}
          coords={[paddedCoords(p1), paddedCoords(p2)]}
          active={active}
          onClick={() => console.log(Set(p1, p2))}
        />
      )}
    </svg>)
  }
}
FontGrid.propTypes = {
  lines: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.arrayOf(
        React.PropTypes.number))),
}

export default FontGrid;