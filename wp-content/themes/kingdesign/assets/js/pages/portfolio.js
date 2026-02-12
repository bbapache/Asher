//var animationSelectors = '.wp-block-post-content > *, .wp-block-post-content > * > *, .type-projects';


jQuery(document).ready(function($){
    $('.project-gallery .wp-block-column').each(function() {
        var flexBasis = $(this).css("flex-basis");
        if (flexBasis == '50%') {
            $(this).addClass('wide');
        } else {
            $(this).addClass('skinny');
        }
    });
});