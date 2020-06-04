let slider = document.getElementsByClassName('slider');
let slide = document.getElementsByClassName('slide-single');
let nextSlide = document.getElementById('next');
let prevSlide = document.getElementById('prev');
let offset = 0;

function next() {
  for (let i = 0; i < slide.length; i++) {
    slider[i].style.left = offset * 600 -600 + 'px';
    offset++;
  }
}

nextSlide.onclick = next;
