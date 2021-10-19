const weatherIcon = document.querySelector('.weather-icon'),
  temperature = document.querySelector('.temperature'),
  weatherDescription = document.querySelector('.weather-description'),
  wind = document.querySelector('.wind'),
  humidity = document.querySelector('.humidity'),
  lang = 'ru',
  apiKey = '9b2bb066347cf8cfae47ff441f848749';

async function getWeather(city = localStorage.getItem('city') || 'Минск') {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(res => res.json())
    .then(data =>{
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
      humidity.textContent = `Влажность: ${data.main.humidity}%`;
    })
    .catch(() => {
      temperature.textContent = '';
      weatherDescription.textContent = 'Ошибка загрузки данных. Введите город еще раз';
      wind.textContent = '';
      humidity.textContent = '';
  })  
}
export { getWeather }
