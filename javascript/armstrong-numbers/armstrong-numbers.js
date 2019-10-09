export const validate = (n) =>
	n == [...`${n}`]
		.map(Number)
		.map((x, _, ar) => Math.pow(x, ar.length))
		.reduce((acc, x) => acc+x);
