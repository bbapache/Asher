var animationSelectors = '.wp-block-post-content > *, .wp-block-post-content > * > *';
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

// Disable hover effects while scrolling
var body = document.body,timer;
window.addEventListener('scroll', function() {
   clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }
   timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  },500);
}, false);
document.addEventListener('contextmenu', event => event.preventDefault());
// opens a global modal
jQuery('.open-modal a').click(function(e){
    let modal = $(this).attr('href');
    jQuery(modal).addClass('open');
    //$('html').addClass('no-scroll');
    e.preventDefault();
});

// prevents modal from closing by clicking content in popup
jQuery('.modal-popup').click(function(e){
    e.stopPropagation();
});

// closes a global modal
jQuery('.modal-close, .global-modal').click(function(e){
    $(this).closest('.global-modal').removeClass('open');
    //$('html').removeClass('no-scroll');
    e.preventDefault();
});
document.querySelector('header nav').addEventListener('click', (e)=>{
    e.stopPropagation();
});

document.body.addEventListener('click', ()=>{
    if ( document.querySelector('html.has-modal-open') != null ) {
        document.querySelector('.wp-block-navigation__responsive-container-close').click();
    }
});

document.querySelector('.wp-block-navigation__responsive-container-open').addEventListener('click', (e)=>{
    e.stopPropagation();
    if ( document.querySelector('.wp-block-navigation__responsive-container.is-menu-open') != null ) {
        setTimeout(()=>{
            document.querySelector('.wp-block-navigation__responsive-container-close').click();
        }, 100);
    }
});
// SMOOTH ANCHOR LINK   
jQuery(function(){
    jQuery('a[href*="#"]:not([href="#"])').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           jQuery('html, body').animate({
             scrollTop: target.offset().top
           }, 800);
           return false;
         }
       }
     });
  });