$('.menu__item').hover(
  function (e) {
    $(e.currentTarget).find('.dropdown').addClass('active');
  },
  function () {
    $('.dropdown').removeClass('active');
  }
);
