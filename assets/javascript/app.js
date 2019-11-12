$(document).ready(function () {

  $("#about-me").on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#navbar-example2").offset().top
    }, 300);
  });

});