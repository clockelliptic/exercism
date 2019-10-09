export const encode = (str) => 
	str.replace(/(\D)\1+/g, (match) => `${match.length}${match[0]}`)

export const decode = (str) => 
	str.replace(/(\d+)(\D)/g, (m) => m.slice(-1).repeat(parseInt(m)))
