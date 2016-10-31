import React from 'react';

import './index.css';

export default function LetterBox ({letter}) {
  return (
    <div className="LetterBox">
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
