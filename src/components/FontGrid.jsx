import React from 'react';
import FontPoint from './FontPoint'
import FontLine from './FontLine';

import './FontGrid.css';

const padding = 27;
const unit = 35;
const paddedCoords = (point) =>
  [point.first() * unit + padding, point.last() * unit + padding]

class FontGrid extends React.Component{

  shouldComponentUpdate(nextProps) {
    return this.props.grid.activeVertices !== nextProps.grid.activeVertices;
  }

  render() {
    const { onEdgeClick, letter, grid } = this.props;
    const { nodes, activeVertices, gridVertices } = grid;
    return (
      <svg className="FontGrid">
        {nodes.map(it =>
          <FontPoint
            key={it.toString()}
            coords={paddedCoords(it)} />
        )}
        {gridVertices.toArray().map(vertex =>
          <FontLine
            key={vertex.toString()}
            coords={[paddedCoords(vertex.first()), paddedCoords(vertex.last())]}
            onClick={() => onEdgeClick(vertex, letter)}
          />
        )}
        {activeVertices.toArray().map(vertex =>
          <FontLine
            key={vertex.toString()}
            coords={[paddedCoords(vertex.first()), paddedCoords(vertex.last())]}
            active
          />
        )}
      </svg>
    )
  }
}

export default FontGrid;
