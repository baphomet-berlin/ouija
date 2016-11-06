import React from 'react';
import FontPoint from './FontPoint'
import FontLine from './FontLine';

import './FontGrid.css';

const padding = 27;
const unit = 35;
const paddedCoords = (point) =>
  [point.first() * unit + padding, point.last() * unit + padding]

class FontGrid extends React.Component{

  state = {
    nodes: this.props.grid.nodes,
    activeVertices: this.props.grid.activeVertices,
    gridVertices: this.props.grid.gridVertices,
  }

  toggleVertex(vertex) {
    const activeVertices = this.state.activeVertices.has(vertex) ?
      this.state.activeVertices.delete(vertex) :
      this.state.activeVertices.add(vertex);
    this.setState({activeVertices});
  }

  render() {
    const { nodes, activeVertices, gridVertices } = this.state;
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
            onClick={() => this.toggleVertex(vertex)}
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
