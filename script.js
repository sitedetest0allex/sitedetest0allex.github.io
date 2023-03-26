const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const link = input.value;
  window.location.href = `https://downloadgram.net/download?vid=${link}`;
});

