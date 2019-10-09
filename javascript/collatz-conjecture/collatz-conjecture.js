export const steps = (n) => {
	if(n <= 0){throw new Error('Only positive numbers are allowed')}
	let acc = 0;
	while(n !== 1){
		n = collatz_step(n)
		acc++
	}
	return acc;
}

const collatz_step = (n) => (n%2==0) ? n/2 : 3*n+1
