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

$(window).load(function(){
    $('.items__list').masonry({
      columnWidth: '.items__list-item',
      itemSelector: '.items__list-item'
    });
});

var modalCart = document.getElementById('modal-filter');
var modalBackground = document.getElementById('modal-bg');
var closeModalCart = document.getElementById('close-modal-filter');
var filters = document.querySelectorAll('.items__list-item');

filters.forEach(function (filters) {
  filters.addEventListener('click', function () {
    modalCart.style.display = "block";
    modalBackground.style.display = "block";
  });
});

closeModalCart.addEventListener('click', function () {
    modalCart.style.display = "none";
    modalBackground.style.display = "none";
  });

modalBackground.addEventListener('click', function () {
    modalCart.style.display="none";
    modalBackground.style.display="none";
  });





