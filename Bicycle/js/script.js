$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

// $(".gallery__item").click((e) =>
//   $(e.currentTarger)
//   .find(".gallery__overlay")
//   .toggleClass("active")
// // );
// $(".gallery__item").hover(function (e) {
//   $(e.currentTarget)
//     .find(".gallery__overlay")
//     .toggleClass("active")
//     .end();
// });

$(".gallery__item").click(function (e) {
  $(e.currentTarget)
    .find(".gallery__overlay")
    .toggleClass("active")
    
});