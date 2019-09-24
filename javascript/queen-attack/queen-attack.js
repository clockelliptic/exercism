export class QueenAttack {
	constructor(positions = {white: [0,3], black: [7,3]}){
		this._BLANK_ROW = ['_','_','_','_','_','_','_','_'] 
		
		this._validate(positions)
		
		this.positions = positions
		this.white = positions.white
		this.black = positions.black
		this._board = this._makeBoard()
	}
	
	get board(){
		return this._board.map(row => row.join(' '))
	}

	toString(){
		return this.board.join('\n')+"\n";
	}

	canAttack(){
		const white = this.positions.white
		const black = this.positions.black
		const slope = Math.floor(white[0]-black[0]) / Math.floor(white[1]-black[1])

		const row_attack = white[1] === black[1]
		const col_attack = white[0] === black[0]
		const dia_attack = (slope === 1 || slope === -1)
		
		return (row_attack || col_attack || dia_attack)
	}

	_validate(pos){
		const same_pos = (pos.white[0] === pos.black[0]
				&& pos.white[1] === pos.black[1])
		if (same_pos) {
			console.log("error")
			throw new Error("Queens cannot share the same space")
		}
	}
	
	_makeBoard(){
		const black = this.positions.black
		const white = this.positions.white
		const board = [1,2,3,4,5,6,7,8].map(x => this._BLANK_ROW.slice())
		board[white[0]][white[1]] = 'W'
		board[black[0]][black[1]] = 'B'
		
		return board;
	}
	
	*_dup(val, n){
                for(let i; i<n; i++){yield val;}
        }
}

//let Q = new QueenAttack({white: [7, 0], black:[0, 7]})
//console.log("new attack obj created");
//console.log(Q.canAttack())
//console.log(Q.board)
//console.log(Q.toString())
