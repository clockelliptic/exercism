export const annotate = (minefield) => {
	const grid = minefield.map(r => [...r].map(c => (c===MINE) ? MINE : 0))
	const mines = grid.flatMap((r, j) => r		
			.map((c, i) => (c==MINE) ? [i, j] : ' ')
			.filter(x => x !== ' '));
	const annotated_grid = mines
		.reduce(count_mine, grid)
		.map(r => r.map(c => (c==0) ? ' ' : c.toString()).join(''))
	return annotated_grid
}

const count_mine = (acc_arr, mine_pos) =>
	acc_arr.map((r, j) => 
		r.map((c, i) => 
			(c!==MINE && adjacent_to_mine([i, j], mine_pos))
				? c += 1
				: c
		)
	);

const adjacent_to_mine = (curr_pos, mine_pos) => 
	((curr_pos[0]-mine_pos[0])**2 + (curr_pos[1]-mine_pos[1])**2) <= 2

const MINE = '*';

//const field0 = ["  *", " * ", "*  "]
//annotate(field0);
