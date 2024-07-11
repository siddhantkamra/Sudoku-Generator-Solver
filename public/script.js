var arr = [[], [], [], [], [], [], [], [], []]

for (var i = 0; i < 9; i++) {
	for (var j = 0; j < 9; j++) {
		arr[i][j] = document.getElementById(i * 9 + j);
	}
}


var board = [[], [], [], [], [], [], [], [], []]

function FillBoard(board) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (board[i][j] != 0) {
				arr[i][j].innerText = board[i][j]
			}
			else
				arr[i][j].innerText = ''
		}
	}
}

let GetPuzzle = document.getElementById('GetPuzzle');
let SolvePuzzle = document.getElementById('SolvePuzzle');
let DifficultySelect = document.getElementById('DifficultySelect');

GetPuzzle.onclick = function () {
    let difficulty = DifficultySelect.value;
    
    fetch(`http://127.0.0.1:5000/generate?difficulty=${difficulty}`)
        .then(response => response.json())
        .then(data => {
            board = data.board;
            FillBoard(board);
        })
        .catch(error => console.error('Error fetching puzzle:', error));
};

SolvePuzzle.onclick = () => {
	SudokuSolver(board, 0, 0, 9);
};

function isValid(board, i, j, num, n){
	//row and col checks
	for (let x = 0; x < n; x++) {
		if (board[i][x] == num || board[x][j] == num) {
			return false;
		}
	}

	//square check
	let rn = Math.sqrt(n);
	let x = Math.floor(i / rn) * rn;
	let y = Math.floor(j / rn) * rn;
	for (let x1 = 0; x1 < rn; x1++) {
		for (let y1 = 0; y1 < rn; y1++) {
			if (board[x + x1][y + y1] == num) {
				return false;
			}
		}
	}

	return true;
}

function SudokuSolver(board, i, j, n) {
	//Base case
	if (i == n) {
		//console.log(board)
		FillBoard(board);
		return true;
	}

	if(j==n){
		return SudokuSolver(board, i+1, 0, n);
	}

	//if cell is already filled
	if(board[i][j]!=0){
		return SudokuSolver(board, i, j+1, n);
	}

	for(let num =1;num<=9;num++){
		if(isValid(board, i, j, num, n)){
			board[i][j] = num;
			if(SudokuSolver(board, i, j+1, n)){
				return true;
			}
			//backtracking - undo the change
			board[i][j] = 0;
		}
	}

	return false;
}
