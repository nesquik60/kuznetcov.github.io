$(function ($) {
  $('.date').mask('99.99.9999');
  $('.phone').mask('(999) 999-9999');
  $('.phoneext').mask('(999) 999-9999? x99999');
  $('.tin').mask('99-9999999');
  $('.ssn').mask('999-99-9999');
  $('.product').mask('a*-999-a999');
  $('.eyescript').mask('~9.99 ~9.99 999');
});

$('.input-text').click(function () {
  $(this).find('.entry-field__input').toggleClass('active');
  $(this).siblings('.dropdown').toggleClass('active');
});
$('.input-date').click(function () {
  $(this).find('.input-witch-icon__chivron').css('transform', 'rotate(180deg)');
});
$('.minus').click(function () {
  let numbers = $(this).siblings('.dropdown__numbers');
  let count = parseInt(numbers.val()) - 1;
  count = count < 1 ? 0 : count;
  numbers.val(count);
  numbers.change();
  return false;
});

$('.plus').click(function () {
  let numbers = $(this).siblings('.dropdown__numbers');
  numbers.val(parseInt(numbers.val()) + 1);
  numbers.change();
  return false;
});
$('.apply-dropdown').click(function () {
  let values = $(this)
    .siblings('.dropdown__item')
    .find('.dropdown__numbers')
    .map((i, el) => $(el).val())
    .get();
  let sum = 0;
  for (var i = 0; i < values.length; i++) {
    sum = sum + parseInt(values[i]);
  }
  $(this)
    .closest('.dropdown')
    .siblings('.entry-field')
    .find('.entry-field__input')
    .val(function () {
      if (sum === 0) {
        return;
      } else if (sum === 1) {
        return sum + ' гость';
      } else if (sum <= 4) {
        return sum + ' гостя';
      } else if (sum >= 5) {
        return sum + ' гостей';
      }
    });
});
