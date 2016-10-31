//@flow
import { Range } from 'immutable';

class Grid {
  rows:   [number];
  cols:   [number];

  initialize(w:number, h:number) {
    this.rows = Range(1, w);
    this.cols = Range(1, h);
  }
}
