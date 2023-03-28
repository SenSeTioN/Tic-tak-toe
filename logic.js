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
	if (
		(field[0][0] == shot && field[0][1] == shot && field[0][2] == shot) ||
		(field[0][0] == shot && field[1][0] == shot && field[2][0] == shot) ||
		(field[0][0] == shot && field[1][1] == shot && field[2][2] == shot) ||
		(field[2][0] == shot && field[2][1] == shot && field[2][2] == shot) ||
		(field[1][0] == shot && field[1][1] == shot && field[1][2] == shot) ||
		(field[0][1] == shot && field[1][1] == shot && field[2][1] == shot) ||
		(field[0][2] == shot && field[1][2] == shot && field[2][2] == shot)
	) {
		return true;
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

	if (checkWin() === true) {
		showWinner(activePlayer);
	}

	counter++;
}
