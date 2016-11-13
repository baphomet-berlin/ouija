//@flux

import React, {Component} from 'react';

import LetterBox from './LetterBox';
import Font from '../types/Font';

import './Editor.css';


class Editor extends Component {
  state = {
    font: this.props.font,
  }

  saveFont(e) {
    e.preventDefault();
    const fontName = e.target.elements.fontName.value || 'myFont';
    window.localStorage.setItem(fontName, JSON.stringify(this.state.font))
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
        <form
          className="SaveSection"
          onSubmit={(e) => this.saveFont(e)}>
          <input
            className="SaveInput"
            name="fontName"
            placeholder="Name your font" />
          <button
            className="SaveButton"
            type="submit">
            Save
          </button>
        </form>
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
