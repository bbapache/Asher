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