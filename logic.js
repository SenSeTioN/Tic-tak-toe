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
		if (field[i][0] == shot && field[i][1] == shot && field[i][2] == shot) {
			showWinner(activePlayer);
		} else if (
			field[0][i] == shot &&
			field[1][i] == shot &&
			field[2][i] == shot
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
