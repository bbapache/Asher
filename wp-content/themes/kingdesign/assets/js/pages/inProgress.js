jQuery(document).ready(function(){
    var icon = jQuery('<img decoding="async" alt="Plus icon" class="plus-icon" src="https://asherslaunwhit.wpengine.com/wp-content/uploads/2022/12/plus-icon-white.svg">');
    jQuery('.project-gallery .wp-block-image a').append(icon);

    jQuery('.project-gallery .wp-block-column').each(function() {
        var flexBasis = jQuery(this).css("flex-basis");
        if (flexBasis == '50%') {
            jQuery(this).addClass('wide');
        } else {
            jQuery(this).addClass('skinny');
        }
    });
});