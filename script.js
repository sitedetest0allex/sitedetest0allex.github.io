// variáveis globais
var currentPlayer = "X";
var cells = document.querySelectorAll(".cell");
var status = document.querySelector(".status");

// função para reiniciar o jogo
function reset() {
	currentPlayer = "X";
	cells.forEach(function(cell) {
		cell.innerHTML = "";
		cell.style.backgroundColor = "#ddd";
		cell.addEventListener("click", handleClick, false);
	});
	status.innerHTML = "";
}

// função para verificar se houve vencedor
function checkWinner() {
	var winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (var i = 0; i < winningCombinations.length; i++) {
		var a = cells[winningCombinations[i
