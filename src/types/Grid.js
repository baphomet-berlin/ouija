//@flow
import { Range, List, Set, Map } from 'immutable';
import R from 'ramda';
type Node = List<number>;
type Vertex = Set<Node>;

class Grid {
  xPoints: number;
  yPoints: number;
  gridVertices: Set<Vertex>;
  activeVertices: Set<Vertex>;
  nodes: Array<Node>;

  constructor(w:number=2, h:number=6) {
    this.xPoints = w + 1;
    this.yPoints = h + 1;
    this.nodes = this.nodeArray(this.xPoints, this.yPoints);
    this.gridVertices = this.vertexArray(this.nodes);
    this.activeVertices = Set();
  }

  nodeArray(xPoints:number, yPoints:number):Array<Node> {
    return Range(0, xPoints).flatMap(col => 
      Range(0, yPoints).map(row =>
        List.of(col, row)
    )).toArray();   
  }

  vertexArray(nodes:Array<Node>) {
    const successors = [[1, -1], [0, 1], [1, 0], [1, 1]];
    return Set(R.unnest(this.nodes.map(node =>
      successors
        .map(([x, y]) => [x + node.first(), y + node.last()])
        .filter(it => this.isValidNode(it))
        .map(([x, y]) => Set.of(node, List.of(x, y)))
    )))
  }

  isValidNode([x, y]:Array<number>):boolean {
    return x >= 0 && y >= 0 && y < this.yPoints && x < this.xPoints;
  }
}

export default Grid;
