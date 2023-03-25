let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let guessInput = document.getElementById('guessInput');
let guessButton = document.getElementById('guessButton');
let feedback = document.getElementById('feedback');
let info = document.getElementById('info');

function checkGuess() {
  let userGuess = Number(guessInput.value);
  guessCount++;
  if (userGuess === randomNumber) {
    feedback.textContent = 'Parabéns! Você acertou em ' + guessCount + ' tentativas!';
    info.style.display = 'none';
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else if (guessCount === 10) {
    feedback.textContent = 'Game over. O número correto era ' + randomNumber + '.';
    info.style.display = 'none';
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else {
    feedback.textContent = 'Tente novamente.';
    if (userGuess < randomNumber) {
      info.textContent = 'O número é maior que ' + userGuess + '.';
    } else {
      info.textContent = 'O número é menor que ' + userGuess + '.';
    }
  }
  guessInput.value = '';
  guessInput.focus();
}

guessButton.addEventListener('click', checkGuess);

