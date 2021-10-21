
import { changeLanguage, language} from './change-language.js';
import { showTime } from './show_time.js';
import './name.js';
import { setBg } from './set-bg.js';
import { getWeather } from './get_weather.js';
import './change_city.js';
import { getQuotes } from './get_quotes.js';
import './create-play-list.js';
import './audio.js';

changeLanguage();

showTime(language);
setBg();
getWeather(language);

getQuotes(language);

