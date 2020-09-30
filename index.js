$(".nav-item").click(function() {
  console.log("0");
  $('.nav-item').removeClass("active-custom");
  $(this).addClass("active-custom");
});

$(document).ready(function() {
  $('.slider').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });
});
