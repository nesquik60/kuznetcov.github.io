let slides = document.querySelectorAll('.slide-single'),
  slider = [],
  nextSlide = document.getElementById('next'),
  prevSlide = document.getElementById('prev');
console.log(slides);
for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i].src;
  slides[i].remove();
}
console.log(slider);

let step = 0,
  offset = 0;

function draw() {
  let img = document.createElement('img');
  img.src = slider[step];
  img.classList.add('slide-single');
  img.style.left = offset * 600 + 'px';
  document.querySelector('.slide').appendChild(img);
  if (step + 1 == slider.length) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
}
function draw2() {
  let img2 = document.createElement('img');
  img2.src = slider[step];
  img2.classList.add('slide-single');
  img2.style.left = offset * -600 + 'px';
  document.querySelector('.slide').appendChild(img2);
  if (step + 1 == slider.length) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
}
draw();
draw2();

nextSlide.onclick = function () {
  function next() {
    let slidesVisible = document.querySelectorAll('.slide-single'),
      offset2 = 0;
    for (let i = 0; i < slidesVisible.length; i++) {
      slidesVisible[i].style.rigth = 600  + 'px';
      offset2++;
    }
    setTimeout(function () {
      slidesVisible[0].remove();
      draw();
    }, 500);
  }
  next();
};

prevSlide.onclick = function () {
  function prev() {
    let slidesVisible = document.querySelectorAll('.slide-single'),
      offset2 = 0;
    for (let i = 0; i < slidesVisible.length; i++) {
      slidesVisible[i].style.left = -600 + 'px';
      offset2++;
    }
    setTimeout(function () {
      slidesVisible[0].remove();
      draw();
    }, 500);
  }
  prev();
};
