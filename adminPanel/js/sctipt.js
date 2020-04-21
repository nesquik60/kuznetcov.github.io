// скрипт на смену цвета SVG
$('img.img-svg').each(function () {
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(
    imgURL,
    function (data) {
      var $svg = $(data).find('svg');
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
      }
      $img.replaceWith($svg);
    },
    'xml'
  );
});

$('.header__burger-icon').click(function (e) {
  $(
    '.cross, .header__menu, .nav, .sidebar__link, .sidebar__btn, .menu-link, .sidebar__head'
  ).addClass('active');
});

$('.cross').click(function (e) {
  $(
    '.cross, .header__menu, .nav, .sidebar__link, .sidebar__btn, .menu-link, .sidebar__head'
  ).removeClass('active');
});
let color = ['#f39c13', '#00caff', '#5a51de', '#ff004f'];
let hello = function () {
  return Math.floor(Math.random() * color.length);
};

Object.defineProperty(Object.prototype, 'randElement', {
  value: function () {
    var rand = Math.floor(Math.random() * this.length);
    return this[rand];
  },
});

let line = $('.diving-line');
let history = $('.fa-history');
let arr = jQuery.makeArray(line);
let arr1 = jQuery.makeArray(history);
$(document).ready(function () {
  for (var i = 0; i < arr.length; i++) {
    $(arr.randElement()).css({ 'background-color': color[hello()] });
    $(arr1.randElement()).css({ 'color': color[hello()] });
  }
});

// for (var i = 0; i < arr.length; i++) {
//   if (mas < arr) {
//     mas.push(Math.floor(Math.random() * arr));
//   }
// }
