import { LANGUAGES } from './const.js';
import { setSetting } from "./set-setting.js";
import { showTime, timer } from './show_time.js';
import { getWeather } from './get_weather.js';
import { getQuotes } from './get_quotes.js';;

const settingContainer = document.querySelector('.setting-container'),
  languageRu = settingContainer.querySelector('#ru'),
  languageUs = settingContainer.querySelector('#us');

let language = localStorage.getItem('language') || LANGUAGES[1];

const changeLanguage = () => {
  setSetting(language);

  if (language == LANGUAGES[1]) {
    languageRu.setAttribute('checked', '');
  } else {
    languageUs.setAttribute('checked', '');
  }

  languageRu.addEventListener('click', (evt) => {
    if (evt.target.checked) {
      language = LANGUAGES[1]
      clearTimeout(timer);
      showTime(language);
      getWeather(language);
      getQuotes(language);
      setSetting(language);
    }
  })

  languageUs.addEventListener('click', (evt) => {
    if (evt.target.checked) {
      language = LANGUAGES[0]
      clearTimeout(timer);
      showTime(language);
      getWeather(language);
      getQuotes(language);
      setSetting(language);
    }
  })
}

const setLocalStorage = () => {
  localStorage.setItem('language', language);
}
window.addEventListener('beforeunload', setLocalStorage);


export { changeLanguage, language }