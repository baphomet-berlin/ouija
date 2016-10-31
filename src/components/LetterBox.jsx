import React from 'react';
import FontGrid from './FontGrid';
import './LetterBox.css';

export default function LetterBox ({letter}) {
  return (
    <div className="LetterBox">
      <FontGrid lines={[[[0, 0], [0, 1]]]} />
      {letter}
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
  }
}
