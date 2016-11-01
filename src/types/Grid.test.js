import Grid from './Grid';
import { List, Range } from 'immutable';

describe('#constructor', () =>{
  const a = new Grid(3, 8);
  const b = new Grid(4, 4);
  it('sets rows and columns', () => {
    expect(a.rows).toEqual(Range(1, 4));
    expect(a.cols).toEqual(Range(1, 9));
    expect(b.rows).toEqual(Range(1, 5));
    expect(b.cols).toEqual(Range(1, 5));
  });
  it('sets nodes', () => {
    expect(a.nodes.size).toBe(24);
    expect(a.nodes.first).toBe(List(1,1));
  });

  it('sets vertices', () => {
    // expect(a.vertices.size).toBe(51);
    // expect(b.vertices.size).toBe(42);
  });
});
