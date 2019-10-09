export const toRna = (dna) => [...dna].map(x => NUCLEOTIDES[x]).join('')

const NUCLEOTIDES = {// DNA => RNA lookup
	G: 'C', C: 'G', T: 'A', A: 'U' }
