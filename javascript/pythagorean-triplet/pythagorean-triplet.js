export class Triplet {
  constructor(...xs) {
	  this._xs = xs.slice(0,3).sort((m,n) => m - n)
  }

  sum() {
  	return this._xs.reduce((acc, x) => acc+x)
  }

  product() {
  	return this._xs.reduce((prod, x) => prod*x)
  }

  isPythagorean() {
	const [a, b, c] = this._xs
  	return a*a + b*b === c*c
  }

  static where(conditions){
	
	const
	  triplets  = [],
	  sum       = {given: (a) => conditions.sum || conditions.maxFactor*3-a},
	  minFactor = conditions.minFactor || 3,
	  maxFactor = {given: (a, b) => conditions.maxFactor || sum-(a+b)};
	
  	for(var a = minFactor; a <= sum.given(a)/4; a++){
		for(var b = a+1; b < maxFactor.given(a,b); b++){
			const c = Math.sqrt(a * a + b * b);
			
			if(c%1===0) triplets.push([a,b,c])	
		}
  	}	

	const results = (conditions.sum)
	  		? triplets.filter(xs => xs.reduce((a,x)=>a+x)===conditions.sum)
		  	: triplets
	
	return results.map(xs => new Triplet(...xs))
  }
}
