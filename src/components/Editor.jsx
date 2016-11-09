//@flux

import React, {Component} from 'react';

import LetterBox from './LetterBox';
import Font from '../types/Font';

import './Editor.css';


class Editor extends Component {
  state = {
    font: this.props.font,
  }

  saveFont(font) {
    window.localStorage.setItem(font.hashCode(), JSON.stringify(font))
  }

  loadFont(name) {
    this.setState({ font: Font.fromJS(JSON.parse(window.localStorage.getItem(name)))})
  }

  toggleVertexFor(vertex, letter) {
    this.setState({font: this.state.font.toggleVertex(letter, vertex)});
  }

  render() {
    const { font } = this.state;
    const glyphsObject = font.glyphs.toObject();

    return (
      <div className="Editor">
        <span
          className="SaveButton"
          onClick={() => this.saveFont(font.toJS())}>
        </span>
        <span
          className="LoadButton"
          onClick={() => this.loadFont('myfont')}>
          load
        </span>
        <div className="Alphabet">
          {
            Object.keys(glyphsObject).map(letter => (
              <LetterBox
                key={letter}
                letter={letter}
                grid={glyphsObject[letter]}
                onEdgeClick={(vertex, letter) => this.toggleVertexFor(vertex, letter)}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

Editor.defaultProps = {
  font: Font.fromAlphabet('abcdefghijklmnopqrstuvwxyz'.split('')),
}

export default Editor;
