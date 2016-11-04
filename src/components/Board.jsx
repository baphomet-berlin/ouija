//@flux

import React from 'react';
import LetterBox from './LetterBox';
import Grid from '../types/Grid';

export default function Board ({letters}) {
  return (
    <div className="Alphabet">
      {letters.split('').map(letter => (
        <LetterBox
          key={letter}
          letter={letter}
          grid={new Grid(2, 6)} />
      ))}
    </div>
  )
}

Board.defaultProps = {
  letters: 'abcdefghijklmnopqrstuvwxyz'
}
