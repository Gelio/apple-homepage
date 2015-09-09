var previousWidth = 0,
    isMenuOpen = [],
    menus = null;

function initSiteMapMenu() {
    var menuHeaders = $('.col-1 > h5'),
        menuHeadersAmount = menuHeaders.length;
    menuHeaders.on("click", slideMenu);

    menus = $('.col-1 > ul');

    for(var i=0; i < menuHeadersAmount; ++i)
        isMenuOpen.push(false);

    previousWidth = $(window).width();

    if(previousWidth < breakpointWidths[1]) {
        // if it's mobile then hide all menu's
        menus.hide();
    }
}

function slideMenu() {
    if($(window).width() <= breakpointWidths[1])
        $(this).next('ul').slideToggle();
}

function checkWidthForSiteMap() {
    var currentWidth = $(window).width();
    if(currentWidth >= breakpointWidths[1] && previousWidth < breakpointWidths[1]) {
        // changing mobile -> desktop (show all menus)
        menus.each(function(index) {
            isMenuOpen[index] = $(this).css("display") === 'block';
        });

        menus.show();
    }
    else if(currentWidth < breakpointWidths[1] && previousWidth >= breakpointWidths[1]) {
        // changing desktop -> mobile (show some menus, hide the rest)
        menus.each(function(index) {
            if(isMenuOpen[index])
                $(this).show();
            else
                $(this).hide();
        });
    }

    previousWidth = currentWidth;
}