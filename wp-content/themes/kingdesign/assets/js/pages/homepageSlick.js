setTimeout(()=>{
  jQuery(document).ready(function(){
    var autoplaySpeed = 4000,
        speed = 3000;

    jQuery('.hero-slider').slick({
      autoplay: true,
      autoplaySpeed: autoplaySpeed,
      arrows: false,
      fade: true,
      lazyload: 'progressive',
      mobileFirst: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      speed: speed,
      cssEase: 'linear',
      useCSS: false
    });

    jQuery('.hero-slider').on('beforeChange', function(event, slick, direction){
      var currentSlide = slick.currentSlide,
          nextSlide = currentSlide + 1;
      
      if (nextSlide > slick.slideCount - 1) {
        nextSlide = 0;
      }
      
      slick.$slides[nextSlide].classList.add('animate');

      setTimeout(function(){ 
        slick.$slides[currentSlide].classList.remove('animate');
      }, autoplaySpeed);
    });

    // fixes first slide not animating
    setTimeout(()=>{
      jQuery('.slick-slide.slick-active').addClass('animate');
    }, 100);
    setTimeout(()=>{
      jQuery('.slick-slide:first-child').removeClass('animate');
    }, autoplaySpeed + speed );
  });
}, first_slide_delay);


jQuery(document).ready(function(e){
    jQuery(".page-homepage .down-arrow a").on('click', function () {
        jQuery(this).addClass('clicked');
    });
});