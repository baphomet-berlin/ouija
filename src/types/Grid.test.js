import Grid from './Grid';
import { List, Range } from 'immutable';

describe('#constructor', () =>{
  const oneByOne = new Grid(1, 1);
  const gridFont = new Grid(2, 6);
  const fourSquare = new Grid(4, 4);
  it('sets x and y points', () => {
    expect(oneByOne.xPoints).toEqual(2);
    expect(oneByOne.yPoints).toEqual(2);
    expect(gridFont.xPoints).toEqual(3);
    expect(gridFont.yPoints).toEqual(7);
  });
  it('sets nodes', () => {
    expect(oneByOne.nodes.size).toBe(4);
    expect(gridFont.nodes.size).toBe(3 * 7);
  });

  // it('sets vertices', () => {
  //   expect(oneByOne.vertices.size).toBe(6);
  //   expect(oneByOne.vertices.size).toBe(59);
  //   expect(gridFont.vertices.size).toBe(37);
  // });
});
