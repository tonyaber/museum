import { GREETING } from "./const.js";
import { getTimeOfDay } from "./util.js";
const greetingContainer = document.querySelector('.greeting');

const showGreeting = (date) => {
  greetingContainer.textContent = GREETING['ru'][getTimeOfDay(date)];
}

export { showGreeting };