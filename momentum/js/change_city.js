import { getWeather } from "./get_weather.js";
import { setLocalStorage, getLocalStorage } from './util.js';
import { language } from "./change-language.js";
import { WEATHER } from "./const.js";

const city = document.querySelector('.city');

window.addEventListener('beforeunload', () => setLocalStorage('city', city));

window.addEventListener('load', () => getLocalStorage('city', city));

city.addEventListener('change', (evt) => {
  getWeather(language, evt.target.value);
})

const changeCity = (lang) => {
  city.value = WEATHER[lang]['city'];
}

changeCity(language);