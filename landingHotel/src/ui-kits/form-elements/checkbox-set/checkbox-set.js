$('.like-btn').click(function (e) {
  $(this).toggleClass('active');
  $(e.currentTarget)
  .find('.fav-filled, .fav-empty, .like-btn__text')
  .toggleClass('active');
});
