export class Triangle {
  constructor(N, seed = 1) {
	this._triangle = []
	for(let j = 0; j < N; j++){
		this._triangle[j] = [seed]
		for(let i = 1; i <= j; i++){
			this._triangle[j][i] = this._triangle[j-1]
						.slice(i-1, i+1)
						.reduce((a,x)=>a+x)
		}
	}
  }

  get lastRow() {
  	return this._triangle.slice(-1)[0]
  }

  get rows() {
  	return this._triangle
  }
}
