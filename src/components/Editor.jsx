//@flux

import React, {Component} from 'react';

import LetterBox from './LetterBox';
import Font from '../types/Font';

import './Editor.css';


class Editor extends Component {
  state = {
    chars: this.props.chars,
    fonts: []
  }

  componentWillMount() {
    this.setState({
      fonts: Object.keys(window.localStorage)
    });
  }

  saveFont(e) {
    e.preventDefault();
    const fontName = e.target.elements.fontName.value || 'myFont';
    window.localStorage.setItem(fontName, JSON.stringify(this.state.font))
    this.setState({
      fonts: [
        ...this.state.fonts,
        fontName
      ]
    })
  }

  loadFont(name) {
    this.setState({
      chars: Font.fromJS(JSON.parse(window.localStorage.getItem(name)))
    })
  }

  toggleVertexFor(vertex, letter) {
    this.setState({
      chars: this.state.font.toggleVertex(letter, vertex)
    });
  }

  render() {
    const { chars, fonts } = this.state;
    const glyphsObject = chars.glyphs.toObject();

    return (
      <div className="Editor">
        <div className="Menu">
          <span className="FontList">
            {
              fonts.map(font => <span key={font}>{font}</span>)
            }
          </span>
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
        </div>
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
  chars: Font.fromAlphabet('abcdefghijklmnopqrstuvwxyz'.split(''))
}

export default Editor;
