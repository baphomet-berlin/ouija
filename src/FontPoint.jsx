import React, { Component } from 'react';

class FontPoint extends Component {
  render() {
    const { coords } = this.props;
    const [ x, y ] = coords;
    return (
      <circle cx={x} cy={y} r={2} fill="red"/>
    );
  }
}


FontPoint.propTypes = {
  coords: React.PropTypes.arrayOf(
    React.PropTypes.number
  ),
}

export default FontPoint;
