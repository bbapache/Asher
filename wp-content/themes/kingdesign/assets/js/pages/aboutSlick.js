function initSlider() {
  if (jQuery(window).width() <= 999) {
      
  } else {
    jQuery('.slider').slick({
      fade: true,
      speed: 800,
      adaptiveHeight: true,
    });

    $(".slick-next").on('click', function(e) { 
      var $parent = $(this).parent();
      $('html, body').animate({ scrollTop: $parent.offset().top}, '2000');
      $(this).toggleClass('left');
      e.preventDefault();
    });
  }
}

jQuery(document).ready(function() {
  initSlider();
});

jQuery(window).resize(function() {
  initSlider();
});
