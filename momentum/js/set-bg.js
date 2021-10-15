import { TIMES_OF_DAY } from "./const.js";
import { getTimeOfDay, getRandomNum } from "./util.js";
const body = document.querySelector('body'),
  btnPrev = body.querySelector('.slide-prev'),
  btnNext = body.querySelector('.slide-next');

let randomNumber = getRandomNum(1, 20),
  isEnabled = true;


const getSlideNext = () => {
  randomNumber = randomNumber >= 20 ? 1 : ++randomNumber;
  setBg();
}

const getSlidePrev = () => {
  randomNumber = randomNumber <= 1 ? 20 : --randomNumber;
  setBg();
}

const setBg = () => {
  isEnabled = false;

  const date = new Date();
  const timeOfDate = TIMES_OF_DAY[getTimeOfDay(date)];  
  const bgNum = randomNumber >= 10 ? randomNumber : '0' + randomNumber;

  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDate}/${bgNum}.jpg`;

  img.onload = () => {
    body.style.background = `url(${img.src}) center/cover `;
  };
  
  setTimeout(() => { isEnabled = true }, 1000);
}

btnPrev.addEventListener('click', () => {
  if (isEnabled) {
    getSlidePrev();
  }
});

btnNext.addEventListener('click', () => {
  if (isEnabled) {
    getSlideNext();
  }
});

export { setBg };

