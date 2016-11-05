//@flux

import React from 'react';

import LetterBox from './LetterBox';
import Grid from '../types/Grid';

import './Editor.css';

export default function Editor({letters}) {
  return (
    <div className="Editor">
      <span className="SaveButton"></span>
      <div className="Alphabet">
        {letters.split('').map(letter => (
          <LetterBox
            key={letter}
            letter={letter}
            grid={new Grid(2, 6)} />
        ))}
      </div>
    </div>
  )
}

Editor.defaultProps = {
  letters: 'abcdefghijklmnopqrstuvwxyz'
}
