import { WEATHER } from "./const.js";

const weatherIcon = document.querySelector('.weather-icon'),
  temperature = document.querySelector('.temperature'),
  weatherDescription = document.querySelector('.weather-description'),
  wind = document.querySelector('.wind'),
  humidity = document.querySelector('.humidity'),
  apiKey = '9b2bb066347cf8cfae47ff441f848749';
  

async function getWeather(lang, city = localStorage.getItem('city') || 'Минск') {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);

      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;

      wind.textContent = `${WEATHER[lang]['wind']}: ${Math.round(data.wind.speed)} ${WEATHER[lang]['wind_units']}`;
      humidity.textContent = `${WEATHER[lang]['humidity']}: ${data.main.humidity}%`;
    })
    .catch(() => {
      temperature.textContent = '';
      wind.textContent = '';
      humidity.textContent = '';
      weatherDescription.textContent = WEATHER[lang]['err'];
  })  
}

export { getWeather }
