export const compute = (left, right) => {
  if(left.length===0 && right.length===0) return 0;
  if(left.length===0) throw new Error('left strand must not be empty');
  if(right.length===0) throw new Error('right strand must not be empty');
  if(left.length !== right.length) throw new Error('left and right strands must be of equal length');

  return [...left].reduce((acc, x, i) => (x!==right[i])?acc+1:acc,0)

};




