// definindo variáveis do jogo
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var tamanhoCauda = 3;
var tamanhoCobrinha = 20;
var cobrinha = [];
var comida = {x: 0, y: 0};
var pontuacao = 0;
var direcao = "direita";

// função para criar a cobrinha
function criarCobrinha() {
	for (var i = tamanhoCauda - 1; i >= 0; i--) {
		cobrinha.push({x: i, y: 0});
	}
}

// função para desenhar a cobrinha na tela
function desenharCobrinha() {
	for (var i = 0; i < cobrinha.length; i++) {
		ctx.fillStyle = "#fff";
		ctx.fillRect(cobrinha[i].x * tamanhoCobrinha, cobrinha[i].y * tamanhoCobrinha, tamanhoCobrinha, tamanhoCobrinha);
	}
}

// função para mover a cobrinha
function moverCobrinha() {
	var cabecaX = cobrinha[0].x;
	var cabecaY = cobrinha[0].y;

	if (direcao == "direita") cabecaX++;
	else if (direcao == "esquerda") cabecaX--;
	else if (direcao == "cima") cabecaY--;
	else if (direcao == "baixo") cabecaY++;

	// verifica se a cobrinha saiu da tela
	if (cabecaX < 0 || cabecaX >= canvas.width / tamanhoCobrinha || cabecaY < 0 || cabecaY >= canvas.height / tamanhoCobrinha) {
		// fim de jogo
		clearInterval(intervalo);
		alert("Fim de jogo! Sua pontuação foi: " + pontuacao);
	}

	// verifica se a cobrinha comeu a comida
	if (cabecaX == comida.x && cabecaY == comida.y) {
		pontuacao++;
		tamanhoCauda++;
		criarComida();
	} else {
		cobrinha.pop();
	}

	var novaCabeca = {x: cabecaX, y: cabecaY};
	cobrinha.unshift(novaCabeca);
}

// função para criar a comida
function criarComida() {
	comida.x = Math.floor(Math.random() * (canvas.width / tamanhoCobrinha));
	comida.y = Math.floor(Math.random() * (canvas.height / tamanhoCobrinha));

	for (var i = 0; i < cobrinha.length; i++) {
		if (cobrinha[i].x == comida.x && cobrinha[i].y == comida.y) {
			criarComida();
		}
	}

	ctx.fillStyle = "#f00";
	ctx.fillRect(comida.x * tamanhoCobrinha
