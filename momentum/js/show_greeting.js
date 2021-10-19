import { GREETING } from "./const.js";
import { getTimeOfDay } from "./util.js";
const greetingContainer = document.querySelector('.greeting');

const showGreeting = (date, lang) => {
  greetingContainer.textContent = GREETING[lang][getTimeOfDay(date)];
}

export { showGreeting };