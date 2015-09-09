var menuList = null,
    fontSize = null;

var breakpointEms = [34, 48, 62, 75],
    breakpointWidths = [];

var slidesChangeInterval = 5000,
    slidesChangeIntervalAfterClick = 10000;

$(document).ready(function() {
    // Toggleable menu
    $(".toggle-menu-button").on("click", toggleableMenu);
    menuList = $('.toggleable-menu');
    var menuItems = menuList.find('li');
    menuItems.slice(0, menuItems.length-1).on("click", hideMenu);

    $(window).on("resize", checkWidthForMenu);

    $(".album-photo").on("click", redirectToHeroPage);

    fontSize = parseFloat($("body").css("font-size"));
    breakpointEms.forEach(function(value) {
        breakpointWidths.push(fontSize*value);
    });

    initHeroSectionControls();
});