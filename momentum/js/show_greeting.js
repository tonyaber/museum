import { GREETING, PLACEHOLDER} from "./const.js";
import { getTimeOfDay } from "./util.js";
const greetingContainer = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  city = document.querySelector('.city');

const showGreeting = (date, lang) => {
  greetingContainer.textContent = GREETING[lang][getTimeOfDay(date)];
  name.setAttribute('placeholder', PLACEHOLDER[lang]['name']);
  city.setAttribute('placeholder', PLACEHOLDER[lang]['city']);
}

export { showGreeting };