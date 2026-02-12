function setElementHeights() {
    var header = document.getElementById('header');
    var headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', headerHeight + 'px');

    var footer = document.getElementById('footer');
    var footerHeight = footer.offsetHeight;
    document.documentElement.style.setProperty('--footer-height', footerHeight + 'px');
}
  
window.addEventListener('load', setElementHeights);
window.addEventListener('resize', setElementHeights);
  