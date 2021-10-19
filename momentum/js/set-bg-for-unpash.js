import { TIMES_OF_DAY } from "./const.js";
import { getTimeOfDay } from "./util.js";
const body = document.querySelector('body'),
  btnPrev = body.querySelector('.slide-prev'),
  btnNext = body.querySelector('.slide-next');

let isEnabled = true;

const setBg = () => {
  isEnabled = false;

  const date = new Date();
  const timeOfDate = TIMES_OF_DAY[getTimeOfDay(date)];
  const img = new Image();
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDate}&client_id=JQfdUh248AE_YVxX6O2nVv1YFgwaaWp-2j5WyqmVPFs`;
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      img.src = data.urls.regular;
      img.onload = () => {
        body.style.background = `url(${img.src}) center/cover `;
      };
      setTimeout(() => { isEnabled = true }, 1000);
    });
}

btnPrev.addEventListener('click', () => {
  if (isEnabled) {
    setBg();
  }
});

btnNext.addEventListener('click', () => {
  if (isEnabled) {
    setBg();
  }
});

export { setBg };