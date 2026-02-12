var animationSelectors = '.wp-block-post-content > *, .wp-block-post-content > * > *, .team_categories-staff';

jQuery(document).ready(function($){
    $('.partners .team').click((e)=>{
        $('.partners .team').removeClass('active');
        $(e.target.closest('.team')).addClass('active');
        //$('html').addClass('no-scroll');
        e.stopPropagation();
    });

    $(document).on( 'click', '.bio-modal', (e)=>{
        e.stopPropagation();
    });

    $('.close').click((e)=>{
        $(e.target.closest('.team')).removeClass('active');
        //$('html').removeClass('no-scroll');
        e.stopPropagation();
    });

    $('.hero-image img').attr('srcset', '').attr('data-srcset', '');
});

document.body.addEventListener('click', hide_all_bios);

function hide_all_bios() {
    let active_teams = document.querySelectorAll('.partners .team.active');
    for (let b = 0; b < active_teams.length; b += 1) {
        active_teams[b].classList.remove('active');
    }
    //$('html').Class('no-scroll');
}