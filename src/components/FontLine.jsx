import React, { Component } from 'react';
import './FontLine.css';

class FontLine extends Component {
  render() {
    const { coords, active, points } = this.props;
    const [[ x1, y1 ], [ x2, y2 ]] = coords;
    return (
      <line {...{x1, y1, x2, y2}}
        onClick={() => console.log(points)}
        fill="transparent" 
        strokeWidth="1" 
        className={`FontLine ${active ? 'active' : ''}`}
      />
    );
  }
}

FontLine.propTypes = {
  coords: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.number
    )       
  ),
  active: React.PropTypes.bool,
}

export default FontLine;
export { FontLine };
