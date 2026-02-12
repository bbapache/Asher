jQuery(document).ready(function(){
    jQuery('.recognition-slider').slick({
      slidesToShow: 1.5,
      slidesToScroll: 1,
      cssEase: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
      infinite: false,
      lazyload: 'ondemand',
      mobileFirst: true,
      //variableWidth: true,
      responsive: [
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            speed: 300,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 1,
            speed: 300,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4.5,
            slidesToScroll: 2,
            speed: 500,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5.5 ,
            slidesToScroll: 2,
            speed: 500,
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 2,
            speed: 500,
          }
        }
      ]
    });

    jQuery('.recognition-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      if ( slick.options.slidesToShow + nextSlide >= slick.slideCount ) {
        jQuery('.recognition-slider').addClass('end');
      } else {
        jQuery('.recognition-slider').removeClass('end');
      }
    });

    // plus sign click
    $(document).on('click', '.slick-slide .wp-block-media-text__content', (e)=>{
      var href = $(e.target).closest('.slick-slide').find('a').attr('href');
      window.open(href);
      return false;
    });
  });