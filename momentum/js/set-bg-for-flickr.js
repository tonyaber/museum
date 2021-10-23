import { TIMES_OF_DAY } from "./const.js";
import { getTimeOfDay, getRandomNum } from "./util.js";
const body = document.querySelector('body'),
  btnPrev = body.querySelector('.slide-prev'),
  btnNext = body.querySelector('.slide-next');

const date = new Date(),
  timeOfDate = TIMES_OF_DAY[getTimeOfDay(date)],
  img = new Image();

let isEnabled = true,
  randomNumber = 0,
  photos = [];

const changeImage = (img, randomNumber, data) => {
  isEnabled = false;  
  img.src = data[randomNumber]['url_l'];
  if (img.src != undefined) {
    img.onload = () => {
      body.style.backgroundImage = `url(${img.src})`;
    };
  } 
  setTimeout(() => { isEnabled = true }, 1000);
}

const getSlidePrev = () => {
  if (isEnabled) {
    randomNumber = randomNumber <= 0 ? (photos.length  - 1) : --randomNumber;
    changeImage(img, randomNumber, photos);
  }
}

const getSliderNext = () => {
  if (isEnabled) {
    randomNumber = randomNumber >= photos.length - 1 ? 0 : ++randomNumber;
    changeImage(img, randomNumber, photos);    
  }
}

const setBgForFrickr = () => {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=${timeOfDate},nature&tag_mode=all&extras=url_l&format=json&nojsoncallback=1&per_page=20`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      photos = data['photos']['photo'];
      randomNumber = getRandomNum(0, photos.length - 1);

      changeImage(img, randomNumber, photos);

      btnPrev.addEventListener('click', getSlidePrev);
      btnNext.addEventListener('click', getSliderNext);
    });
}

const removeListenerFrickr = () => {
  btnPrev.removeEventListener('click', getSlidePrev);
  btnNext.removeEventListener('click', getSliderNext);
}

export { setBgForFrickr, removeListenerFrickr };