//@flow
import { Range, Seq, List, Map, Set } from 'immutable';
import R from 'ramda';

class Grid {
  rows: Seq.Indexed;
  cols: Seq.Indexed;
  nodes: List<List<number>>;
  vertices: Map<Set<List<number>>, bool>;

  constructor(w:number, h:number) {
    this.rows = Range(1, w + 1);
    this.cols = Range(1, h + 1);
    this.nodes = this.cols.flatMap(col => this.rows.map(row => List.of(row, col))).toList();
    const combinations = this.nodes.map(a => 
      this.nodes.map(b => [a, b]))
    // this.vertices = new Map(combinations.filter(it => 
    //   this.isValidVertex(it.first(), it.last())).map(it =>
    //      [Set(it), false]
    // ))

    //this.vertices = R.map(this.isValidVertex, this.nodes, this.nodes)
  }

  isValidVertex(a:List<number>, b:List<number>) {
    return a != b && (b.first() - a.first() <= 1) && (b.last() - a.last() <= 1) && (a.first() <= b.first()) && (a.last() <= b.last());
  }
}

export default Grid;
