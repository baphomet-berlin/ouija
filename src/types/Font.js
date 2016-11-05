//@flow
import Grid from './Grid';
import { Map } from 'immutable';
import R from 'ramda';


type GlyphMap = Map<string, Grid>;

class Font {
  glyphs: GlyphMap;

  static fromAlphabet(alphabet:Array<string>) {
    const glyphs = Map(alphabet.map(el => [el, (new Grid())]))
    return new Font(glyphs);
  }

  constructor(glyphs:GlyphMap) {
    this.glyphs = glyphs;
  }

  set(letter:string, grid:string) {
    return this.glyphs.set(letter, grid);
  }

  get(letter:string) {
    return this.glyphs.get(letter);
  }
}

export default Font;