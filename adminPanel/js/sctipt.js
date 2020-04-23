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

$('.menu__burger-icon').click(function (e) {
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
    $(arr1.randElement()).css({ color: color[hello()] });
  }
});

let arr3 = $('.color-percent');
$(arr3[0]).css({ 'background-color': '#2ccc71' });
$(arr3[1]).css({ 'background-color': '#e74c3c' });
$(arr3[2]).css({ 'background-color': '#5a51de' });
$(arr3[3]).css({ 'background-color': '#f39c13' });

let arr4 = [];
document.querySelectorAll('.small-block__percent').forEach(function (item) {
  if (item.textContent.indexOf('-')) {
    $(item).css({ color: '#2ccc71' });
  } else if (item.textContent.indexOf('+')) {
    $(item).css({ color: '#e74c3c' });
  }
});
// ====== //
var dataset = [
  {
    value: 45.4,
    color: '#2ccc71', //green
  },
  {
    value: 25.6,
    color: '#5a51de', //blue
  },
  {
    value: 20.9,
    color: '#f39c13', //orange
  },
  {
    value: 15.1,
    color: '#e74c3c', //red
  },
];
var maxValue = 25;
var container = $('.circle-diagramm');

var addSector = function (data, startAngle, collapse) {
  var sectorDeg = 3.6 * data.value;
  var skewDeg = 90 + sectorDeg;
  var rotateDeg = startAngle;
  if (collapse) {
    skewDeg++;
  }

  var sector = $('<div>', {
    class: 'sector',
  }).css({
    background: data.color,
    transform: 'rotate(' + rotateDeg + 'deg) skewY(' + skewDeg + 'deg)',
  });
  container.append(sector);

  return startAngle + sectorDeg;
};

dataset.reduce(function (prev, curr) {
  return (function addPart(data, angle) {
    if (data.value <= maxValue) {
      return addSector(data, angle, false);
    }

    return addPart(
      {
        value: data.value - maxValue,
        color: data.color,
      },
      addSector(
        {
          value: maxValue,
          color: data.color,
        },
        angle,
        true
      )
    );
  })(curr, prev);
}, 0);

$('.white').click(function () {
  $('*').addClass('active-white');
  $('.active-white').addClass('active');
  $('.white. .dark').addClass('active');
});
$('.dark, .white').click(function () {
  $('*').removeClass('active');
  $('*').removeClass('active-white');
});
