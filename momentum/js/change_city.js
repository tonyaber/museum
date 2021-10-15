import { getWeather } from "./get_weather.js";
const city = document.querySelector('.city');
city.value = 'Минск';

city.addEventListener('change', (evt) => {
  getWeather(evt.target.value);
})