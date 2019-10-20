export const isPangram = (str) => {
	str = str.toLowerCase()
	return ALPHABET
		.every(letter => str.includes(letter)  === true)
}

const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz']
