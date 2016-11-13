//@flux

import React, {Component} from 'react';

import LetterBox from './LetterBox';
import Font from '../types/Font';

import './Editor.css';


class Editor extends Component {
  state = {
    font: this.props.font,
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
    window.localStorage.setItem(fontName, JSON.stringify(this.state.font.toJS()))
    this.setState({
      fonts: [
        ...this.state.fonts,
        fontName
      ]
    })
  }

  onFontClick(name) {
    this.loadFont(name);
  }

  loadFont(name) {
    this.setState({
      font: Font.fromJS(JSON.parse(window.localStorage.getItem(name)))
    })
  }

  toggleVertexFor(vertex, letter) {
    this.setState({
      font: this.state.font.toggleVertex(letter, vertex)
    });
  }

  render() {
    const { font, fonts } = this.state;
    const glyphsObject = font.glyphs.toObject();

    return (
      <div className="Editor">
        <div className="Menu">
          <span className="FontList">
            {
              fonts.sort().map(font =>
                <span
                  className="Font"
                  onClick={() => this.onFontClick(font)}
                  key={font}>
                  {font}
                </span>
              )
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
  font: Font.fromAlphabet('abcdefghijklmnopqrstuvwxyz'.split(''))
}

export default Editor;
