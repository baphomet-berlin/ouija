import Grid from './Grid';
import { List, Range, Set } from 'immutable';

describe('#constructor', () => {
  const oneByOne = new Grid({ w: 2, h: 2 });
  const twoByTwo = new Grid({ w: 3, h: 3 });
  const gridFont = new Grid();
  it('sets x and y points from w and h', () => {
    expect(oneByOne.xPoints).toEqual(2);
    expect(oneByOne.yPoints).toEqual(2);
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

describe('#toggleVertex', () => {
  const oneByOne = new Grid({ w: 2, h: 2 });
  const toggled = oneByOne.toggleVertex(Set.of(List.of(0, 1), List.of(0, 0)));
  it('toggles a vertex', () => {
    expect(toggled.activeVertices.size).toBe(1);
  });
  it('returns a copy of the original Grid with the new vertices', () => {
    expect(oneByOne.activeVertices.size).toBe(0);
  });
});