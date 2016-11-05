import { Map } from 'immutable';
import Font from './Font';
import Grid from './Grid';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const glyphs = Map(alphabet.map(el => [el, (new Grid())]));
const miniGlyphs = Map([['a', new Grid()]]);

describe('::fromAlphabet()', () =>{
  const myFont = Font.fromAlphabet(alphabet);
  it('returns Font with empty glyphs', () => {
    expect(myFont.glyphs.size).toEqual(26);
  });
});

describe('#constructor', () =>{
  const myFont = new Font(glyphs);
  it('sets empty glyphs', () => {
    expect(myFont.glyphs.size).toEqual(26);
  });
});
