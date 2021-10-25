import { TIMES_OF_DAY } from "./const.js";
import { getTimeOfDay, getRandomNum } from "./util.js";
const body = document.querySelector('body'),
  btnPrev = body.querySelector('.slide-prev'),
  btnNext = body.querySelector('.slide-next');

let randomNumber = getRandomNum(1, 20),
  isEnabled = true,
  bgNum = randomNumber;

const changeImage = () => {
  const img = new Image(),
    date = new Date(),
    timeOfDate = TIMES_OF_DAY[getTimeOfDay(date)];
  
  isEnabled = false;
  bgNum = randomNumber >= 10 ? randomNumber : '0' + randomNumber;

  img.src = `https://raw.githubusercontent.com/tonyaber/stage1-tasks/assets/images/${timeOfDate}/${bgNum}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
  };
  setTimeout(() => { isEnabled = true }, 1000);
}

const getSlideNext = () => {
  if (isEnabled) {
    randomNumber = randomNumber >= 20 ? 1 : ++randomNumber;
    changeImage();
  }
  
}

const getSlidePrev = () => {
  if (isEnabled) {
    randomNumber = randomNumber <= 1 ? 20 : --randomNumber;
    changeImage();
  }
 
}

const setBg = () => {
  changeImage();
  btnPrev.addEventListener('click', getSlidePrev);
  btnNext.addEventListener('click', getSlideNext);
}

const removeListenerGitHub = () => {
  btnPrev.removeEventListener('click', getSlidePrev);
  btnNext.removeEventListener('click', getSlideNext);
}

export { setBg, removeListenerGitHub};

