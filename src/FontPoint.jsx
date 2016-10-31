import React, { Component } from 'react';

class FontPoints extends Component {
  render() {
    const { coords } = this.props;
    const [ x, y ] = coords;
    return (
      <circle cx={x} cy={y} r={2} fill="red"/>
    );
  }
}

export default FontPoints;
