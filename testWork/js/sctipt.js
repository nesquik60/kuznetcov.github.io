$('.burger').click(function () {
  if ($(window).width() <= '768') {
    jQuery('body').toggleClass('lock');
    $('.burger, .nav, .register').toggleClass('active');
  } else if ($(window).width() > '768') {
    $('.burger, .register, .nav').toggleClass('active');
  }
});

$('.programm__item').hover(
  function (e) {
    $(e.currentTarget)
      .find('.overlay, .overlay__link, .overlay__no-link')
      .addClass('hover')
      .end()
      .siblings('.programm__item')
      .find('.overlay, .overlay__link, .overlay__no-link')
      .removeClass('hover');
  },
  function (e) {
    $(e.currentTarget)
      .find('.overlay, .overlay__link, .overlay__no-link')
      .removeClass('hover');
  }
);
