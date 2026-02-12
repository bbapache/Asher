requestAnimationFrame(function() {
	const images = document.querySelectorAll('img[fetchpriority]');
	images.forEach(function(img) {
		img.removeAttribute('fetchpriority');
		img.setAttribute('loading', 'lazy');
		img.classList.add('lazyload');
	});
});