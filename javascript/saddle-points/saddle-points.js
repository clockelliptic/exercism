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
   *  - saddlePoints() => getter, array of arrays 
   */

  constructor(str) {
    // construct row views
    this._rows = str.split('\n').map(row => row.trim().split(' ').map(Number))

    // construct column views
    this._cols = this._rows[0].map(_ => [])
    this._rows.map((row, r) => row.map((_, c) => {this._cols[c][r] = this._rows[r][c]}))
  }

  get rows() {
    return this._rows
  }

  get columns() {
    return this._cols
  }

  get _rowMaxima() {
    /* 
     * DESC: Returns the indices of Matrix elements that are equal to the
     *       the maximum values of their rows. Return value is encoded
     *       as a String containing space-separated values.
     * 
     * RETURN: String => "row_indix column_index"
     */
    return this._rows.reduce((row_maxima, row, r) => {
      const max = Math.max(...row);
      const curr_row_maxs = row.reduce((acc, cell_val, c) => (cell_val===max) ? acc.concat([[r, c]]) : acc
        , [])
      return row_maxima.concat(curr_row_maxs)
    }, []).map(x => x.join(' '))

  }

  get _columnMinima(){
    /* 
     * DESC: Returns the indices of Matrix elements that are equal to the
     *       the minimum values of their columns. Return value is encoded
     *       as a String containing space-separated values.
     * 
     * RETURN: String => "row_indix column_index"
     */
    return this._cols.reduce((col_minima, col, c) => {
			const min = Math.min(...col);
			const curr_col_mins = col.reduce((acc, cell_val, r) => (cell_val===min) ? acc.concat([[r, c]]) : acc
        , [])
      return col_minima.concat(curr_col_mins)
	  }, []).map(x => x.join(' '))

  }

  get saddlePoints() {
    /* 
    * DESC: A saddle point is defined as being >= every other element
    *       in its row and <= every element in its column.
    * 
    *       This returns the indices of any saddle points that exist in
    *       the current Matrix instance.
    * 
    * RETURN: array of arrays (or empty array) => [[row_index, column_index]]
    */
  
    const row_maxima = this._rowMaxima
    const col_minima = this._columnMinima

    return row_maxima.reduce((acc, x) => (col_minima.includes(x)) ? acc.concat([x.split(' ').map(Number)]) : acc
      , [])
  }
}
