import React, { Component } from 'react';
import FontPoint from './FontPoint'
import FontLine from './FontLine';
import './FontGrid.css';

const padding = 5;
const unit = 10;
const paddedCoords = (point) =>
  [point.first() * unit + padding, point.last() * unit + padding]


export default function FontGrid ({letter, grid}) {
  return (<svg className="FontGrid">
    {grid.nodes.map(it =>
      <FontPoint key={it.toString()} coords={paddedCoords(it)} />
    )}
    {grid.vertices.map(([p1, p2, active]) =>
      <FontLine
        key={p1.toString() + p2.toString()} 
        coords={[paddedCoords(p1), paddedCoords(p2)]} />
    )}
  </svg>)
}

FontGrid.propTypes = {
  lines: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.arrayOf(
        React.PropTypes.number))),
}
