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
    this.xPoints = w + 1;
    this.yPoints = h + 1;
    const successors = [[1, -1], [0, 1], [1, 0], [1, 1]];
    this.nodes = Range(0, this.xPoints).flatMap(col => 
      Range(0, this.yPoints).map(row =>
        List.of(col, row)
    )).toSet();
    // this.vertices = this.nodes.reduce((acc, node) => {
    //   const nodeSuccessors = successors
    //     .map(([x, y]) => [x + node.first(), y + node.last()])
    //     .filter(([x, y]) => 
    //       (x <= this.cols.last() && x >= this.cols.first()) && 
    //       (y <= this.rows.last() && x >= this.rows.first()))
    //     .map(([x, y]) => [node, List.of(x, y), false]);
    //   return acc.union(Set(nodeSuccessors));
    // }, Set());
 }

  isValidVertex(a:List<number>, b:List<number>) {
    return a != b && (b.first() - a.first() <= 1) && (b.last() - a.last() <= 1) && (a.first() <= b.first()) && (a.last() <= b.last());
  }
}

export default Grid;
