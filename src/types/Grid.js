//@flow
import { Range, Seq, List, Map, Set, OrderedSet } from 'immutable';
import R from 'ramda';
type Node = List<number>;
type Vertex = [Node, Node, boolean];

class Grid {
  xPoints: number;
  yPoints: number;
  vertices: Array<Vertex>;
  nodes: Array<Node>;

  constructor(w:number, h:number) {
    this.xPoints = w + 1;
    this.yPoints = h + 1;
    this.nodes = this.nodeArray(this.xPoints, this.yPoints);
    this.vertices = this.vertexArray(this.nodes);
  }

  nodeArray(xPoints:number, yPoints:number):Array<Node> {
    return Range(0, xPoints).flatMap(col => 
      Range(0, yPoints).map(row =>
        List.of(col, row)
    )).toArray();   
  }

  vertexArray(nodes:Array<Node>) {
    const successors = [[1, -1], [0, 1], [1, 0], [1, 1]];
    return R.unnest(this.nodes.map(node =>
      successors
        .map(([x, y]) => [x + node.first(), y + node.last()])
        .filter(it => this.isValidNode(it))
        .map(([x, y]) => [node, List.of(x, y), false])
    ))
  }

  isValidNode([x, y]:Array<number>):boolean {
    return x >= 0 && y >= 0 && y < this.yPoints && x < this.xPoints;
  }
}

export default Grid;
