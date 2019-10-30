export const isIsogram = (str) => {
	let acc = {}
	for(let x of str.toLowerCase()){ 
		    if(acc[x] && !(x=='-' || x==' ')) return false
		    else acc[x] = 1
	}
	return true
};
