//@flux

import React, {Component} from 'react';

import LetterBox from './LetterBox';
import Font from '../types/Font';

import './Editor.css';


class Editor extends Component {
  onClickSaveButton(e) {
    console.log(e);
  }

  render() {
    const {letters} = this.props;
    const alphabet = Font.fromAlphabet(letters.split('')).glyphs.toObject();

    return (
      <div className="Editor">
        <span
          className="SaveButton"
          onClick={this.onClickSaveButton}>
        </span>
        <div className="Alphabet">
          {
            Object.keys(alphabet).map(letter => (
              <LetterBox
                key={letter}
                letter={letter}
                grid={alphabet[letter]} />
            ))
          }
        </div>
      </div>
    )
  }
}

Editor.defaultProps = {
  letters: 'abcdefghijklmnopqrstuvwxyz'
}

export default Editor;
