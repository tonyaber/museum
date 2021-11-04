import { LANGUAGES } from './const.js';
import { setSetting } from "./set-setting.js";
import { showTime, timer } from './show_time.js';
import { getWeather } from './get_weather.js';
import { getQuotes } from './get_quotes.js';
import { createTodo } from './todo-list.js';

const settingContainer = document.querySelector('.setting-container'),
  languagesItems = settingContainer.querySelectorAll('.language_list_item input'),
  city = document.querySelector('.city'),
  btnQuote = document.querySelector('.change-quote');

const updateLanguagesSetting = (lang) => {
  clearTimeout(timer);
  showTime(lang);
  getWeather(lang, city.value);
  getQuotes(lang);
  setSetting(lang);
  createTodo(lang);
}

const changeLanguage = () => {
  let language = localStorage.getItem('language') || LANGUAGES[1];
  
  city.value = localStorage.getItem('city')||'Minsk';

  updateLanguagesSetting(language);

  city.addEventListener('change', (evt) => getWeather(language, evt.target.value));
  btnQuote.addEventListener('click', () => getQuotes(language));

  if (language == LANGUAGES[0]) {
    languagesItems[0].checked = true;
  } else {
    languagesItems[1].checked = true;
  }

  languagesItems.forEach((item, index) => {
    item.addEventListener('click', (evt) => {
      if (evt.target.checked) {
        language = LANGUAGES[index]
        updateLanguagesSetting(language);
      }
    })
  })
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('language', language);
  });
}



export { changeLanguage }