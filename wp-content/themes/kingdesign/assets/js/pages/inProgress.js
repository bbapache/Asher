jQuery(document).ready(function(e){
    var icon = $('<img decoding="async" alt="Plus icon" class="plus-icon" src="https://asherslaunwhit.wpengine.com/wp-content/uploads/2022/12/plus-icon-white.svg">');
    $('.project-gallery .wp-block-image a').append(icon);

    $('.project-gallery .wp-block-column').each(function() {
        var flexBasis = $(this).css("flex-basis");
        if (flexBasis == '50%') {
            $(this).addClass('wide');
        } else {
            $(this).addClass('skinny');
        }
    });
});