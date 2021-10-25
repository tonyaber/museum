import { DATE } from './const.js';
const dateContainer = document.querySelector('.date');

const showDate = (date, lang) => {
  const options = { weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = date.toLocaleDateString(DATE[lang], options);
  
  dateContainer.textContent = currentDate;
}

export {showDate}