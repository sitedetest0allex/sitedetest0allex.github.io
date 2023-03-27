
const images = document.querySelectorAll('.images img');

images.forEach(img => {
	img.addEventListener('click', () => {
		window.open('https://unsplash.com');
	})
})
