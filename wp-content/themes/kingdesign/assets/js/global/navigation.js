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