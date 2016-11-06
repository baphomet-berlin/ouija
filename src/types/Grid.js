//@flow
import { Range, List, Set} from 'immutable';
import R from 'ramda';
type Node = List<number>;
type Vertex = Set<Node>;
type VertexSet = Set<Vertex>;

class Grid {
  xPoints: number;
  yPoints: number;
  gridVertices: VertexSet;
  activeVertices: VertexSet;
  nodes: Array<Node>;

  constructor(
    { w=3, h=7, activeVertices=Set()} :
    { w?:number, h?:number, activeVertices?:VertexSet } = { }
  ) {
    this.xPoints = w;
    this.yPoints = h;
    this.nodes = this.nodeArray(this.xPoints, this.yPoints);
    this.gridVertices = this.vertexArray(this.nodes);
    this.activeVertices = activeVertices;
  }

  toGridFontJS() {
    return this.activeVertices.toJS();
  }

  static fromGridFontJS(verticesArray) {
    const vertices = Set(verticesArray.map(vertex =>
      Set(vertex.map(List))
    ));
    return new Grid({ activeVertices: vertices });
  }

  toggleVertex(vertex:Vertex) {
    const activeVertices = this.activeVertices.has(vertex) ?
      this.activeVertices.delete(vertex) :
      this.activeVertices.add(vertex);
    return new Grid({w: this.xPoints, h: this.yPoints, activeVertices })
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
