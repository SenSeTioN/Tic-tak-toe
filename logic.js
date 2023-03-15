let players = ['x', 'o'];
let activePlayer = 0;

let counter = 0;

let field = [
	['', '', ''],
	['', '', ''],
	['', '', ''],
];

function checkWin() {
	let shot = players[activePlayer];
	for (let i = 0; i <= 2; i++) {
		for (let j = 0; j <= 2; j++) {
			if (field[i][0] == shot && field[i][1] == shot && field[i][2] == shot) {
				showWinner(activePlayer);
			} else if (
				field[0][j] == shot &&
				field[1][j] == shot &&
				field[2][j] == shot
			) {
				showWinner(activePlayer);
			} else if (
				field[0][0] == shot &&
				field[1][1] == shot &&
				field[2][2] == shot
			) {
				showWinner(activePlayer);
			} else if (
				field[0][2] == shot &&
				field[1][1] == shot &&
				field[2][0] == shot
			) {
				showWinner(activePlayer);
			}
		}
	}
}

function startGame() {
	field = [
		['', '', ''],
		['', '', ''],
		['', '', ''],
	];

	renderBoard(field);
	counter = 0;
}

function click(row, col) {
	if (counter % 2 == 0) {
		activePlayer = 0;
	} else {
		activePlayer = 1;
	}

	field[row][col] = players[activePlayer];
	renderBoard(field);
	checkWin();

	counter++;
}
