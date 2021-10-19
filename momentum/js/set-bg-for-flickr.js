import { TIMES_OF_DAY } from "./const.js";
import { getTimeOfDay, getRandomNum } from "./util.js";
const body = document.querySelector('body'),
  btnPrev = body.querySelector('.slide-prev'),
  btnNext = body.querySelector('.slide-next');

let isEnabled = true;

const changeImage = (img, randomNumber, data) => {
  isEnabled = false;  
  img.src = data['photos']['photo'][randomNumber]['url_l'];
  img.onload = () => {
    body.style.background = `url(${img.src}) center/cover `;
  };
  setTimeout(() => { isEnabled = true }, 1000);
}


const setBg = () => {
  const date = new Date();
  const timeOfDate = TIMES_OF_DAY[getTimeOfDay(date)];
  const img = new Image();
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=${timeOfDate}&extras=url_l&format=json&nojsoncallback=1&per_page=30`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const dataSize = data['photos']['photo'].length - 1
      let randomNumber = getRandomNum(0, dataSize);
      console.log(dataSize)
      changeImage(img, randomNumber, data);
      btnPrev.addEventListener('click', () => {
        if (isEnabled) {
          randomNumber = randomNumber <= 0 ? dataSize : --randomNumber;
          changeImage(img, randomNumber, data);
        }  
      })
      btnNext.addEventListener('click', () => {
        if (isEnabled) {
          randomNumber = randomNumber >= dataSize ? 0 : ++randomNumber;
          changeImage(img, randomNumber, data);
        }
      })
    });
}

export { setBg };