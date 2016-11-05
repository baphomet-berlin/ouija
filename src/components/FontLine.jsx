import React, { Component } from 'react';
import classNames from 'classnames';
import './FontLine.css';

class FontLine extends Component {
  render() {
    const { coords, active, onClick } = this.props;
    const [[ x1, y1 ], [ x2, y2 ]] = coords;
    return (
      <line {...{x1, y1, x2, y2}}
        fill="transparent"
        className={classNames('FontLine', { active, eventToggler: onClick })}
        onClick={onClick}
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
