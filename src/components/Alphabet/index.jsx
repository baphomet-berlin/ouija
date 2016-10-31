import React from 'react';

import LetterBox from '../LetterBox';

export default function Alphabet ({letters}) {
  return (
    <div className="Alphabet">
      {letters.split('').map(letter => (
        <LetterBox key={letter} letter={letter} />
      ))}
    </div>
  )
}

Alphabet.defaultProps = {
  letters: 'abcdefghijklmnopqrstuvwxyz'
}


