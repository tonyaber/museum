const LANGUAGES = [
  'ru',
  'us',
]

const GREETING = {
  'us': ['Good night', 'Good morning', 'Good afternoon', 'Good evening'],
  'ru': ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер']
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
    'humidity': 'Humidity',
    'err': 'Data loading error. Enter the city again',
    'city': 'Minsk',
  },
  'ru': {
    'lang': 'ru',
    'wind': 'Скорость ветра',
    'wind_units': 'м/с',
    'humidity': 'Влажность',
    'err': 'Ошибка загрузки данных. Введите город еще раз',
    'city': 'Минск'
  },
}

const QUOTES = {
  'ru': 'js/data/quotes-ru.json',
  'us': 'js/data/quotes-us.json'
}

const DEFAULT_CITY = {
  'ru': 'Минск',
  'us': 'Minsk'
}

const SETTING = {
  'ru': {
    'language': 'Язык',
    'russian': 'Русский',
    'english': 'Английский',
    'background': 'Фон',
    'placeholder': 'Введите свой тег',
    'elements': 'Скрыть',
    'elements-date': 'Дата',
    'elements-time': 'Время',
    'elements-weather': 'Погода',
    'elements-greeting': 'Приветствие',
    'elements-quotes': 'Цитаты',
    'elements-audio': 'Плеер',
  },
  'us': {
    'language': 'Language',
    'russian': 'Russian',
    'english': 'English',
    'background': 'Background',
    'placeholder': 'Enter your tags',
    'elements': 'Hide',
    'elements-date': 'Date',
    'elements-time': 'Time',
    'elements-weather': 'Weather',
    'elements-greeting': 'Greeting',
    'elements-quotes': 'Quotes',
    'elements-audio': 'Audio',
  }
}

const PLACEHOLDER = {
  'ru': {
    'name':'[Укажите имя]',
    'city': '[Укажите город]'
  },
  'us': {
    'name': '[Enter name]',
    'city': '[Enter city]'
  },
}

const TODO = {
  'ru': {
    'label': 'Список задач',
    'save': 'Сохранить',
    'clear': 'Очистить',
    'placeholder': 'Добавить новую задачу'
  },
  'us': {
    'label': 'TODO list',
    'save': 'Save',
    'clear': 'Clear',
    'placeholder': 'Add new task'
  }
}

export { LANGUAGES, GREETING, TIMES_OF_DAY, DATE, WEATHER, QUOTES, DEFAULT_CITY, SETTING, PLACEHOLDER, TODO}