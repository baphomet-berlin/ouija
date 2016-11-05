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

describe('#set', () => {
  const myFont = new Font(glyphs);
  it('sets fonts', () => {
    expect(myFont.glyphs.size).toEqual(26);
  })
})


describe('#toggleVertex', () => {
  const myFont = Font.fromAlphabet(['a']);
  const toggled = myFont.toggleVertex('a', Set.of(List.of(0, 1), List.of(0, 0)));
  it('toggles a vertex', () => {
    expect(toggled.get('a').activeVertices.size).toBe(1);
  });
  it('returns a copy of the original Grid with the new vertices', () => {
    expect(myFont.get('a').activeVertices.size).toBe(0);
  });
});
