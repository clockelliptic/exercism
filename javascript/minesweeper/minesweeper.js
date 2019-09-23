export function annotate (field) {
	//map over rows
	return field.map((row, j, field_arr) => {
		//map over characters in each row
		return row.split('').map((cell_value, i) => {
			//count mines adjacent to each char
			const sweep_zone = field_arr
				.slice((j<=0) ? 0 : j-1, j+2) 
				.map(row => row.substring(i-1, i+2));
			const mines = sweep_zone.join('').match(/[*]/g);
			//annotate each cell in the minefield
			return (cell_value==MINE) ? MINE : (mines==null) ? ' ' : mines.length.toString()
		}).join('')
	});
}

const MINE = '*'
