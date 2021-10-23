import { TIMES_OF_DAY } from "./const.js";
import { getTimeOfDay } from "./util.js";
const body = document.querySelector('body'),
  btnPrev = body.querySelector('.slide-prev'),
  btnNext = body.querySelector('.slide-next');

const img = new Image();
const date = new Date();
let isEnabled = true;

const changeImage = (timeOfDate = TIMES_OF_DAY[getTimeOfDay(date)]) => {
  isEnabled = false;

  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDate},nature&client_id=ovKWJmeg3bbJTfundBT8zFpKPJGICMiaoe17bNwgsHc`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      img.src = data.urls.regular;     
      img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
      };
      setTimeout(() => { isEnabled = true }, 1000);
    });
}

const setBgForUnsplash = (tags) => {
  changeImage(tags);
  
  btnPrev.addEventListener('click', getSlidePrev);
  btnNext.addEventListener('click', getSliderNext);  
}

const getSlidePrev = () => {
  if (isEnabled) {
    changeImage();
  }
}

const getSliderNext = () => {
  if (isEnabled) {
    changeImage();
  }
}

const removeListenerUnsplash = () => {
  btnPrev.removeEventListener('click', getSlidePrev);
  btnNext.removeEventListener('click', getSliderNext);
}

export { setBgForUnsplash, removeListenerUnsplash }
