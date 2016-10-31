//@flow

class Grid {
  rows:   [number];
  cols:   [number];

  initialize(w:number, h:number) {
    this.rows = Array.from(new Array(w), (it, i) => i + 1);
    this.cols = Array.from(new Array(h), (it, i) => i + 1);
  }
}
