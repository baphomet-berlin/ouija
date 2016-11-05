//@flow

import React from 'react';
import FontGrid from './FontGrid';
import './LetterBox.css';
import Grid from '../types/Grid';

export default function LetterBox ({letter, grid}) {
  return (
    <div className="LetterBox">
      <FontGrid grid={grid}/>
      <div>{letter}</div>
    </div>
  )
}

LetterBox.propTypes = {
  letter: (propValue, key, componentName) => {
    if (!/^[a-zA-Z]+$/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propValue[key] + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      )
    }
  },
  grid: React.PropTypes.instanceOf(Grid),
}
