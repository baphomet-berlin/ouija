import Grid from './Grid';
import { List, Range } from 'immutable';

describe('#constructor', () =>{
  const oneByOne = new Grid(1, 1);
  const twoByTwo = new Grid(2, 2);
  const gridFont = new Grid();
  it('sets x and y points from w and h', () => {
    expect(oneByOne.xPoints).toEqual(2);
    expect(oneByOne.yPoints).toEqual(2);
  });
  it('sets default x and y points', () => {
    expect(gridFont.xPoints).toEqual(3);
    expect(gridFont.yPoints).toEqual(7);
  });
  it('sets nodes', () => {
    expect(oneByOne.nodes.length).toBe(4);
    expect(gridFont.nodes.length).toBe(3 * 7);
  });

  it('sets gridVertices', () => {
    expect(oneByOne.gridVertices.size).toBe(6);
    expect(twoByTwo.gridVertices.size).toBe(20);
    expect(gridFont.gridVertices.size).toBe(56);
  });
});
