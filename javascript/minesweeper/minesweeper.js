function Minefield(array_of_lines) { 
	this.MINE = '*'
	this.grid = array_of_lines.map(line => [...line].map(c=>(c!==this.MINE)?0:c));
};

Minefield.prototype.sweep_kernel = (i, j, i_max, j_max) =>
	[[i-1, j-1],[i-1,j],[i-1,j+1],[i,j-1],[i, j+1],[i+1, j-1],[i+1, j],[i+1, j+1]]
		.filter(a => a[0] > -1     && a[1] > -1)
		.filter(a => a[0] <= i_max && a[1] <= j_max)

Minefield.prototype.which_mines = function(){ 
	return this.grid	
			.map((r, j) => r
				.flatMap((c, i) => (c===this.MINE) ? [i, j] : c)
				.filter(x => x!== this.MINE))
			.filter(x => x.length > 0)
}

Minefield.prototype.count_mines = function(){
	return this.which_mines()
			.reduce(this._count_mine(this), this.grid)
			.map(r => r.map(c => (c==0) ? ' ' : c.toString()));
}

Minefield.prototype._count_mine = function(_this){
	return function(acc_array, mine_pos){
	return _this.sweep_kernel(mine_pos[0], mine_pos[1], acc_array[0].length-1, acc_array.length-1)
		.reduce((acc, kern_pos) => _this._inc_cell(acc, kern_pos), acc_array);
	}
}

Minefield.prototype._inc_cell = (arr, pos) =>
	arr.map((r,j) => r.map((c,i) => (i==pos[0] && j==pos[1]) ? Math.floor(c)+1 : Math.floor(c)));

export const annotate = (lines) => {
	const mf = new Minefield(lines); 
	return mf.count_mines().map(x => x.join(''))
};

//const field0 = ["  *", " * ", "   "]
//const f = new Minefield(field0)
//console.log("which mines: ", f.which_mines())
//console.log("sweep kernel: ", f.sweep_kernel(0,0,2,2))
//console.log("count mines: ", f.count_mines())
//console.log(annotate(field0));
