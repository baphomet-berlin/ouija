import Grid from './Grid';

const a = new Grid(3, 8);
const b = new Grid(4, 4);

test('#initialize', () =>{
  it('sets rows and columns', () => {
    expect(a.rows).toEqual([1, 2, 3]);
    expect(a.cols).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(b.rows).toEqual([1, 2, 3, 4]);
    expect(b.cols).toEqual([1, 2, 3, 4]);
  });
});