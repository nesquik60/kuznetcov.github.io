$('.burger').click(function (e) {
  $('.burger, .nav').toggleClass('active');
  jQuery('body').toggleClass('lock');
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
