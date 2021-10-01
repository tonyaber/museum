/*const slider = document.querySelector('.welcome_section'),
  buttonRight = slider.querySelector('.welcome_slider_button .right'),
  buttonLeft = slider.querySelector('.welcome_slider_button .left'),
  list = slider.querySelectorAll('.welcome_slider_list li'),
  number = slider.querySelector('#welcome_slider_number');

const pictures = [
  'assets/img/welcome_slider/1.jpg',
  'assets/img/welcome_slider/2.jpg',
  'assets/img/welcome_slider/3.jpg',
  'assets/img/welcome_slider/4.jpg',
  'assets/img/welcome_slider/5.jpg'
]

const changeImageToNext = (index) => {
  slider.style.background = `url("${pictures[index]}") no-repeat 100% calc(100% - 60px)`;

  list.forEach(item => item.style.background = '#ffffff');
  list[index].style.background = '#D2B183';

  number.textContent = `0` + (index + 1);
}

const changeImageToPrev = (index) => {
  slider.style.background = `url("${pictures[index - 1]}") no-repeat 100% calc(100% - 60px)`;

  list.forEach(item => item.style.background = '#ffffff');
  list[index - 1].style.background = '#D2B183';

  number.textContent = `0` + index;
}

slider.style.background = `url("${pictures[0]}") no-repeat 100% calc(100% - 60px)`;

list.forEach((item, index) => {
  item.addEventListener('click', () => {
    changeImageToNext(index);
  })
})


buttonRight.addEventListener('click', () => {
  let index = Number(slider.style.backgroundImage.match(/\d/)[0]);
  if (index > pictures.length - 1) {
    index = 0;
  }
  changeImageToNext(index);  
})

buttonLeft.addEventListener('click', () => {
  let index = Number(slider.style.backgroundImage.match(/\d/)[0]) - 1;
    if (index < 1) {
    index = pictures.length;
  }
  changeImageToPrev(index);
})

let isSwap = false,
  pageX = null;

slider.addEventListener('mousedown', (evt) => {
  isSwap = true;
  pageX = evt.pageX;
})

slider.addEventListener('mouseup', (evt) => {
  if (!isSwap) {
    return;
  }

  let index = Number(slider.style.backgroundImage.match(/\d/)[0]);

  if (pageX < evt.pageX) {
    if (index > pictures.length - 1) {
      index = 0;
    }
    changeImageToNext(index);
  }

  if (pageX > evt.pageX) {
    index--;
    if (index < 1) {
      index = pictures.length;
    }
    changeImageToPrev(index);
  }
})

*/