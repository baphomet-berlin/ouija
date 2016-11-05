import React from 'react';
import FontPoint from './FontPoint'
import FontLine from './FontLine';
import './FontGrid.css';

const padding = 5;
const unit = 20;
const paddedCoords = (point) =>
  [point.first() * unit + padding, point.last() * unit + padding]


export default function FontGrid ({letter, grid}) {
  return (<svg className="FontGrid">
    {grid.nodes.map(it =>
      <FontPoint
        key={it.toString()}
        coords={paddedCoords(it)} />
    )}
    {grid.vertices.toSeq().map((active, [p1, p2]) =>
      <FontLine
        key={p1.toString() + p2.toString()}
        points={[p1, p2]}
        coords={[paddedCoords(p1), paddedCoords(p2)]}
        active={active}
      />
    )}
  </svg>)
}

FontGrid.propTypes = {
  lines: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.arrayOf(
        React.PropTypes.number))),
}
