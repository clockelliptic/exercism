function annotate (field) {
	//Args:
	//	field: and array of strings representing the minefeld
	if(field.length==0){return field} else if(field[0].length == 0) {return field};
	field = prepare_minefield(field);
	for(var row in field){
		for(var col in field[row]){
			if(field[row][col] != '*'){
				field[row][col] = count_adjacent(field, Math.floor(row), Math.floor(col));
			};
		};
	};
	field = prepare_minefield(field, true);
	return field;
}

function prepare_minefield(minefield, ret=false){
	// Converts each row of the minefield array from string to list
	// Args:
	// 	minefield: array of strings
	let prepared_field = [];
	if(ret===false){
		for(var row in minefield){
			prepared_field.push(minefield[row].split(''));
		}
		return prepared_field;
	} else {
		for(var row in minefield){
			prepared_field.push(minefield[row].join(''))
		}
		return prepared_field;
	};
}

function count_adjacent(field, row, col){
	const width = Math.floor(field[0].length)
	const height = Math.floor(field.length)
	let y0, y1, x0, x1;

	//get 2d slice bounds; check for edges
	if (row==0) {y0 = 0} else {y0 = row-1};
	if (row==height-1){y1 = height} else {y1 = row+2};
	if (col==0) {x0 = 0} else {x0 = col-1};
    if (col==width-1){x1 = width} else {x1 = col+2};

	const _sweep_zone = field.slice(y0, y1);
	let sweep_zone = [];
	for(var row in _sweep_zone){sweep_zone.push(_sweep_zone[row].slice(x0, x1))};

	let count = 0;
	for(var r in sweep_zone){
		for(var c in sweep_zone[r]){
			if(sweep_zone[r][c] == '*'){
				count +=1;
			};
		};
    };
    console.log(x0, y0, x1, y1, row, col, count)
	if(count==0){return ' '};
	return count.toString();
};

let field1 = ['  *  ','  *  ','*****','  *  ','  *  ']
field1 = annotate(field1)
for (var i in field1) {console.log(field1[i])}

