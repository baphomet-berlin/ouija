//@flow

import { Map, Set, List } from 'immutable';
import Font from './Font';
import Grid from './Grid';

const miniGrid = new Grid({activeVertices: new Set()});
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const glyphs = Map(alphabet.map(el => [el, (new Grid())]));
const miniGlyphs = Map([['a', miniGrid]]);

describe('::fromAlphabet()', () =>{
  const myFont = Font.fromAlphabet(alphabet);
  it('returns Font with empty glyphs', () => {
    expect(myFont.glyphs.size).toEqual(26);
  });
});

describe('#constructor', () =>{
  it('constructs from empty glyph map', () => {
    const myFont = new Font(glyphs);
    expect(myFont.glyphs.size).toEqual(26);
  });
  it('constructs from custom glyph map', () => {
    const myFont = new Font(miniGlyphs);
    expect(myFont.glyphs.size).toEqual(1);
  });
});
