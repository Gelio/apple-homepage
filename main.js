var menuList = null;

$(document).ready(function() {
    $(".toggle-menu-button").on("click", toggleableMenu);
    menuList = $('.toggleable-menu');
    menuList.find('li').on("click", hideMenu);
});