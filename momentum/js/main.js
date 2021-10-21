import { LANGUAGES } from './const.js';
import { showTime } from './show_time.js';
import './name.js';
import { setBg } from './set-bg.js';
import { getWeather } from './get_weather.js';
import './change_city.js';
import { getQuotes } from './get_quotes.js';
import './create-play-list.js';
import './audio.js';
import {createSetting} from './create-setting-list.js';
import {settingList} from './setting-list.js';

let language = LANGUAGES[1]

showTime(language);
setBg();
getWeather(language);

getQuotes(language);
createSetting(language);
settingList();

export { language };