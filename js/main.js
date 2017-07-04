var menu = document.querySelector('.page-header__menu');
var toggler = document.querySelector('.page-header__toggler');
var menuClose = document.querySelector('.page-header__menu-list-item--close');

toggler.addEventListener("click", function() {
    "use strict";
    menu.style.display = "block";
    menuClose.style.display = "block";
});
menuClose.addEventListener("click", function() {
    "use strict";
    menu.style.display = "none";
    menuClose.style.display = "none";
});
