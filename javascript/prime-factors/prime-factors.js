export const primeFactors = (x) => {
	const factors = [];
	
	while (x % 2 === 0){
		factors.push(2)
		x = x/2
	}

	for (let i = 3; i <= Math.sqrt(x); i+=2){
		while (x % i === 0) {
			factors.push(i);
			x = x/i
		}
	}

	if (x > 2){
		factors.push(x)
	}

	return factors
};
