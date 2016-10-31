import Grid from './Grid';
const a = new Grid(3, 8);
const b = new Grid(4, 4);

describe('#initialize', () => {
  it('sets rows and columns', () => {
    expect(a.rows).to.eql([1, 2, 3]);
    expect(a.cols).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(b.rows).to.eql([1, 2, 3, 4]);
    expect(b.cols).to.eql([1, 2, 3, 4]);
  });
});
