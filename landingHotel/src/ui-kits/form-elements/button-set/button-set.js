var nonLinearStepSlider = document.getElementById('slider-non-linear-step');

noUiSlider.create(nonLinearStepSlider, {
  start: [1000, 4000],
  connect: true,
  range: {
    min: [0],
    '10%': [500, 500],
    '30%': [4000, 500],
    max: [20000],
  },
});
var nonLinearStepSliderValueElement = document.getElementById('slider-non-linear-step-value');

nonLinearStepSlider.noUiSlider.on('update', function (values) {
  nonLinearStepSliderValueElement.innerHTML = values.join('₽ ' + ' - ') + '₽';
});

