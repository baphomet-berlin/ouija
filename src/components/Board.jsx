import React from 'react';
import LetterBox from './LetterBox';

export default function Board ({letters}) {
  return (
    <div className="Alphabet">
      {letters.split('').map(letter => (
        <LetterBox key={letter} letter={letter} />
      ))}
    </div>
  )
}

Board.defaultProps = {
  letters: 'abcdefghijklmnopqrstuvwxyz'
}
