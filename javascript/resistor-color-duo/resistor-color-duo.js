export const resistanceValue = (colors) => {
	/* DESC: Returns (double-digit, 0-99) resistance value
	 * ARGS: @colors: list of strings containing colors (encoded resistance value)
	 * RET:  Number
	 */
	return Number(getIndices(colors.slice(0,2), COLORS).join(''))
}

const getIndices = (vals, arr) => vals.map(val => arr.indexOf(val))

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
