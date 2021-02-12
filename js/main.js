$(document).ready(function () {
  // Sp-Menu
  $('.menu-btn').click(function() {
    $('.menu-btn, .sp-menu').toggleClass('open');
  });

  $('#sp-menu a[href]').click(function() {
    $('.menu-btn').trigger('click');
  });

  // Sidebar Menu
  $('.hamburger').click(function() {
    $('.sidebar-menu, .container').toggleClass('active')
  });
});