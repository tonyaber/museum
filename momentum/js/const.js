const LANGUAGES = [
  'us',
  'ru',
]

const GREETING = {
  'us': ['Good night', 'Good morning', 'Good afternoon', 'Good evening'],
  'ru': ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер'],
  'blr': ['Дабранач', 'Добрай раніцы', 'Добры дзень', 'Добры вечар']
}

const DATE = {
  'ru': 'ru-RU',
  'us': 'en-US'
}

const TIMES_OF_DAY = ['night', 'morning', 'afternoon', 'evening'];


const WEATHER = {
  'us': {
    'lang': 'en',
    'wind': 'Wind speed',
    'wind_units': 'm/s',
    'humidity': 'Humidity'
  },
  'ru': {
    'lang': 'ru',
    'wind': 'Скорость ветра',
    'wind_units': 'м/с',
    'humidity': 'Влажность'
  },
}

export {LANGUAGES ,GREETING, TIMES_OF_DAY, DATE, WEATHER}