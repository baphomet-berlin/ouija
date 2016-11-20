//@flow
import Grid from './Grid';
import { Map, List, Set } from 'immutable';

type GlyphMap = Map<string, Grid>;

class Font {
  glyphs: GlyphMap;
  name: string;

  static fromAlphabet(alphabet:Array<string>, name:string) {
    const glyphs = Map(alphabet.map(el => [el, (new Grid())]))
    return new Font(glyphs, name);
  }

  static fromJS({alphabet, grids, name}) {
    const glyphs = Map(alphabet.map((it, i) =>
      [it, Grid.fromGridFontJS(grids[i])]
    ));
    return new Font(glyphs, name);
  }

  constructor(glyphs:GlyphMap, name:string) {
    this.glyphs = glyphs;
    this.name = name;
  }

  set(letter:string, grid:Grid) {
    return new Font(this.glyphs.set(letter, grid), this.name);
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
    if (this.name === undefined) {
      throw new Error('A name property must be set before calling .toJS()');
    }
    return {
      alphabet,
      grids: alphabet.map(it => this.get(it).toGridFontJS()),
      name: this.name,
    }
  }

  toJSON() {
    return JSON.stringify(this.toJS());
  }

  hashCode() {
    return this.glyphs.hashCode();
  }
}

export default Font;
