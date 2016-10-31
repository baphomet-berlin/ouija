//@flow
import { Range, Seq, Map } from 'immutable';
import R from 'ramda';

class Grid {
  rows: Seq.Indexed;
  cols: Seq.Indexed;
  nodes: Array<Set<number>>;
  vertices: Map<Set<number>, bool>;

  initialize(w:number, h:number) {
    this.rows = Range(1, w);
    this.cols = Range(1, h);
    this.nodes = R.chain(new Set, this.cols, this.rows);
  }
}

export default Grid;
