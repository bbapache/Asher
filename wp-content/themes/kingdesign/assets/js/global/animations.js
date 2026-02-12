function animationControl() {
	var viewportHeight = window.innerHeight,
		animationClasses = animationSelectors,
		animationElements = document.querySelectorAll( animationClasses ),
		numAnimationElements = animationElements.length,
        scrollHeight = document.body.scrollHeight,
        scrollAmount = viewportHeight + window.pageYOffset,
		trigger = 0.92;

	for (var a = 0; a < numAnimationElements; a += 1) {
		let element = animationElements[a],
			top = element.getBoundingClientRect().top;
		
		element.classList.add( 'waiting-to-animate' );

		if (viewportHeight * trigger > top && !element.classList.contains('animate') || scrollAmount >= (scrollHeight - 100)) {
			setTimeout(()=>{ element.classList.add( 'animate' ); }, 15);
		}
	}

	window.requestAnimationFrame(animationControl);
}

window.requestAnimationFrame(animationControl);
