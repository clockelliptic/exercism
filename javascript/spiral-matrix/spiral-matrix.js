export const SpiralMatrix = {
    ofSize: function (N) {
		let matrix = new Array(N).fill().map(arr => new Array(N).fill('empty'))

		let n     = 1,  // value to add to next cell (increment with each iteration)
			max_n = N*N,
			pos   = {i: 0, j: -1}; // i: row index,   j: column index

		/* Validate the current iteration of the matrix computation. */
		const okay_to_step = () => {
			// try-catch handles indexing errors
			try {return /* valid row index?  */ (pos.i < N) && (pos.i > -1)
					 && /* valid col index?  */ (pos.j < N) && (pos.j > -1)
					 && /* valid cell?       */ (matrix[pos.i][pos.j] === 'empty')
					 && /* filled all cells? */ (n <= max_n)} 
			catch {return false}
		}

		/* Fill a single cell of the matrix and increment the next-cell value. */
		const take_step = () => {
			matrix[pos.i][pos.j] = n	
			n++;
		}
		
		/* Walk in a straight line, filling in matrix cells until the spiral turns. */
		const walk = (dir, increment) => {
			while(true){
				pos[dir] += increment
				if(okay_to_step()){take_step()}
				else {break;}
			} 
			// corrective backstep after failing okay_to_step() 
			pos[dir] -= increment
		}

		/* Perform the actual matrix computation */
		while(n < max_n+1){
			walk('j',  1);
			walk('i',  1); 
			walk('j', -1); 
			walk('i', -1); 
		}
		return matrix;

    }
}
