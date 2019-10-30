export const translate = (dna = '') => {
  /*
   * DESC: 
   *  Translates a string of codons to corresponding proteins.
   * ARGS:
   *  - dna: String
   * RETURN:
   *  Array of Strings
   */
  const codons = [...dna].groupBy(3).map(x => x.join(''))
  const proteins = []

  for(let codon of codons){
    if (PROTEIN_TO_CODONS['STOP'].includes(codon)) break;
    if (! CODONS.includes(codon)) {throw new Error('Invalid codon')};
    proteins.push(CODON_TO_PROTEIN[codon])
  }

  return proteins;
};

const PROTEIN_TO_CODONS = {
  /* Lookup Object */
  'Methionine': ['AUG'],
  'Phenylalanine': ['UUU', 'UUC'],
  'Leucine': ['UUA', 'UUG'],
  'Serine': ['UCU', 'UCC', 'UCA', 'UCG'],
  'Tyrosine': ['UAU', 'UAC'],
  'Cysteine': ['UGU', 'UGC'],
  'Tryptophan': ['UGG',],
  'STOP': ['UAA', 'UAG', 'UGA'],
}

const CODON_TO_PROTEIN = function() {
  /* Lookup Object */
  const ret = []
  for(let protein of Object.keys(PROTEIN_TO_CODONS)){
    PROTEIN_TO_CODONS[protein].map(codon => ret[codon] = protein)
  }
  return ret
}()

const CODONS = /* Lookup Object */ Object.keys(CODON_TO_PROTEIN)

Array.prototype.groupBy = function(n) {
  return this.reduce((groups, x, i) => {
    const c = Math.floor(i/n)
    groups[c] = (groups[c]) ? groups[c].concat([x]) : [x]
    return groups
  }, [])
}