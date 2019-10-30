export class Squares {
  constructor(N) {
  	this.ns = () => this._range(N)
  }

  get sumOfSquares() {
	return [...this.ns()].reduce((acc, x) => acc + x**2, 0)
  }

  get squareOfSum() {
	return [...this.ns()].reduce((acc, x) => acc + x)**2
  }

  get difference() {
	return this.squareOfSum - this.sumOfSquares
  }

  *_range(f, i=1, step=1) {while(i<=f){ yield i; i+=step }}
}
