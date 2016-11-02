//@flow
import { Range, Seq, List, Map, Set, OrderedSet } from 'immutable';
import R from 'ramda';
type Node = List<number>;
type NodeSet = Set<Node>;
type Vertex = [Node, Node, boolean];
type VertexSet = Set<Vertex>;

class Grid {
  rows: Seq.Indexed;
  cols: Seq.Indexed;
  vertices: VertexSet;
  nodes: NodeSet;
  successors: Array<Array<number>>;

  constructor(w:number, h:number) {
    this.rows = Range(1, w + 1);
    this.cols = Range(1, h + 1);
    const successors = [[0, -1], [0, 1], [1, 0], [1, 1]];
    this.nodes = this.cols.flatMap(col => 
      this.rows.map(row =>
        List.of(row, col)
      )
    ).toSet();
    this.vertices = this.nodes.reduce((acc, node) => {
      const nodeSuccessors = successors
        .map(([x, y]) => [x + node.first(), y + node.last()])
        .filter(([x, y]) => 
          (x <= this.rows.last() && x >= this.rows.first()) && 
          (y <= this.cols.last() && x >= this.rows.first()))
        .map(([x, y]) => [node, List.of(x, y), false]);
      return acc.union(Set(nodeSuccessors));
    }, Set());
 }

  isValidVertex(a:List<number>, b:List<number>) {
    return a != b && (b.first() - a.first() <= 1) && (b.last() - a.last() <= 1) && (a.first() <= b.first()) && (a.last() <= b.last());
  }
}

export default Grid;
