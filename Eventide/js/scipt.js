// $(".speakers__list-avatar").hover((e) =>
//   $(e.currentTarget)
//     .find(".avatar-twitter")
//     .addClass("hover-icon")
//     .end()
//     .siblings(".speakers__list-avatar")
//     .find(".avatar-twitter")
//     .removeClass("hover-icon")
// );
$(".speakers__list-avatar").hover(
  function (e) {
    $(e.currentTarget)
      .find(".avatar-twitter")
      .addClass("hover-icon")
      .end()
      .siblings(".speakers__list-avatar")
      .find(".avatar-twitter")
      .removeClass("hover-icon");
  },
  function (e) {
    $(e.currentTarget).find(".avatar-twitter").removeClass("hover-icon");
  }
);
$(".tabs__item").click(function () {
  $(".tabs__item").removeClass("active");
  $(this).addClass("active");
});
$(".event__card-item-event").click(function (e) {
  $(e.currentTarget)
    .find(".plus, .minus, .card__text-hide")
    .toggleClass("active")
    .end();
});

$(".select-plan__arrow").click(function () {
  $(".price").toggleClass("active");
  $(".fa-sort-down").toggleClass("fa-sort-up")
});