import React, { Component } from 'react';
import './FontPoint.css';

class FontPoint extends Component {
  render() {
    const { coords } = this.props;
    const [ x, y ] = coords;
    return (
      <circle cx={x} cy={y} r={2} className="FontPoint" />
    );
  }
}


FontPoint.propTypes = {
  coords: React.PropTypes.arrayOf(
    React.PropTypes.number
  ),
}

export default FontPoint;
