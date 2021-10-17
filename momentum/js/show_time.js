import { showDate } from './show-date.js';
import { showGreeting } from './show_greeting.js';
const time = document.querySelector('.time');

const showTime = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate(date);
  showGreeting(date);
  setTimeout(showTime, 1000);
}

export { showTime };