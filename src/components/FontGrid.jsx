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
    vertices: this.props.grid.vertices,
  }

  toggleVertex(points) {
    const vertices = this.state.vertices.update(points, it => !it)
    console.log(vertices)
    this.setState({vertices})
  }

  render() {
    const { nodes, vertices } = this.state;
    return (
      <svg className="FontGrid">
        {nodes.map(it =>
          <FontPoint
            key={it.toString()}
            coords={paddedCoords(it)} />
        )}
        {vertices.entrySeq().toArray().map(([points]) =>
          <FontLine
            key={points.toString()}
            coords={[paddedCoords(points.first()), paddedCoords(points.last())]}
            onClick={() => this.toggleVertex(points)}
          />
        )}
        {vertices.entrySeq().toArray().map(([points, active]) =>
          <FontLine
            key={points.toString()}
            coords={[paddedCoords(points.first()), paddedCoords(points.last())]}
            active={active}
          />
        )}
      </svg>
    )
  }
}
FontGrid.propTypes = {
  lines: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.arrayOf(
        React.PropTypes.number))),
}

export default FontGrid;
