//@flow
import Grid from './Grid';
import { Map, List, Set } from 'immutable';

type GlyphMap = Map<string, Grid>;

class Font {
  glyphs: GlyphMap;

  static fromAlphabet(alphabet:Array<string>) {
    const glyphs = Map(alphabet.map(el => [el, (new Grid())]))
    return new Font(glyphs);
  }

  static fromJS({alphabet, grids}) {
    const glyphs = Map(alphabet.map((it, i) =>
      [it, Grid.fromGridFontJS(grids[i])]
    ));
    return new Font(glyphs)
  }

  constructor(glyphs:GlyphMap) {
    this.glyphs = glyphs;
  }

  set(letter:string, grid:Grid) {
    return new Font(this.glyphs.set(letter, grid));
  }

  toggleVertex(letter:string, vertex:Set<List<number>>) {
    const letterGrid = this.glyphs.get(letter).toggleVertex(vertex);
    return this.set(letter, letterGrid);
  }

  get(letter:string) {
    return this.glyphs.get(letter);
  }

  toJS() {
    const glyphsObject = this.glyphs.toObject();
    const alphabet = Object.keys(glyphsObject);
    return {
      alphabet,
      grids: alphabet.map(it => this.get(it).toGridFontJS()),
    }
  }
}

export default Font;
