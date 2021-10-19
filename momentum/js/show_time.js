import { showDate } from './show-date.js';
import { showGreeting } from './show_greeting.js';
const time = document.querySelector('.time');

const showTime = (lang) => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate(date, lang);
  showGreeting(date, lang);
  setTimeout(() => showTime(lang), 1000);
}

export { showTime };