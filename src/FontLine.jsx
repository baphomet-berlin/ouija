import React, { Component } from 'react';

class FontLine extends Component {
  render() {
    const { coords } = this.props;
    const [[ x1, y1 ], [ x2, y2 ]] = coords;
    return (
      <line {...{x1, y1, x2, y2}} strokeWidth="1" stroke="red"/>
    );
  }
}

export default FontLine;
