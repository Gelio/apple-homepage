var menuOpened = false;

function toggleableMenu() {
    menuList.slideToggle();
    menuOpened = !menuOpened;
}

function hideMenu() {
    menuList.slideUp();
    menuOpened = false;
}

function checkWidthForMenu() {
    if(menuOpened && $(window).width() >= breakpointWidths[1]) {
        hideMenu();
    }
}