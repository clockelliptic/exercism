export class Matrix {
  /* 
   * DESC: Initialized with a string of newline ('\n') separated
   *       rows and space-separated row-elements.
   *
   * ARGS:
   *  - str: String => string-encoded matrix
   *
   * PUBLIC METHODS:
   *  - rows() => getter, array of arrays
   *  - columns() => getter, array of arrays 
   */

  constructor(str) {
    // construct row views
    this._rows = str.split('\n').map(row => row.split(' ').map(Number))

    // construct column views
    this._cols = this._rows[0].map(col => [])
    for(let r in this._rows){
      for(let c in this._rows[r]) {
        this._cols[c][r] = this._rows[r][c]
      }
    }
  }

  get rows() {
    return this._rows
  }

  get columns() {
    return this._cols
  }
}
