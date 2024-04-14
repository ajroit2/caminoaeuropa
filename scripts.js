$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('.parallax').css('background-position', 'center ' + -(scroll/10) + 'px'); // Ajusta la velocidad de parallax cambiando el valor 10
  });
});
