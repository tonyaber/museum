import { LANGUAGES } from './const.js';
import { setSetting } from "./set-setting.js";
import { showTime, timer } from './show_time.js';
import { getWeather } from './get_weather.js';
import { getQuotes } from './get_quotes.js';
import { createTodo } from './todo-list.js';

const settingContainer = document.querySelector('.setting-container'),
  languagesItems = settingContainer.querySelectorAll('.language_list_item input'),
  city = document.querySelector('.city');

let language = localStorage.getItem('language') || LANGUAGES[1];

const changeLanguage = () => {
  setSetting(language);

  if (language == LANGUAGES[0]) {
    languagesItems[0].checked = true;
  } else {
    languagesItems[1].checked = true;
  }

  languagesItems.forEach((item, index) => {
    item.addEventListener('click', (evt) => {
      if (evt.target.checked) {
        language = LANGUAGES[index]
        clearTimeout(timer);
        showTime(language);
        getWeather(language, city.value);
        getQuotes(language);
        setSetting(language);
        createTodo(language);
      }
    })
  })
}

const setLocalStorage = () => {
  localStorage.setItem('language', language);
}

window.addEventListener('beforeunload', setLocalStorage);

export { changeLanguage, language }