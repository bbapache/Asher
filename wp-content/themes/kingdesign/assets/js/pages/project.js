document.body.addEventListener('click', hide_team);

function hide_team() {
    let active_teams = document.querySelectorAll('.list-wrapper.show');
    for (let b = 0; b < active_teams.length; b += 1) {
        active_teams[b].classList.remove('show');
    }
}

jQuery(document).ready(function(e){
    var icon = $('<img decoding="async" alt="Plus icon" class="plus-icon" src="https://asherslaunwhit.wpengine.com/wp-content/uploads/2022/12/plus-icon-white.svg">');
    $('.single-projects .project-gallery .wp-block-image a').append(icon);

    $('.team-title').click((e)=>{
        $(this).find('.list-wrapper').toggleClass('show');
        e.stopPropagation();
    });

    $('.project-gallery .wp-block-column').each(function() {
        var flexBasis = $(this).css("flex-basis");
        if (flexBasis == '50%' || flexBasis == '100%') {
            $(this).addClass('wide');
        } else {
            $(this).addClass('skinny');
        }
    });
});