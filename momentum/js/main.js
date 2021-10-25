import { changeLanguage, language} from './change-language.js';
import { showTime } from './show_time.js';
import './name.js';
import { setBg } from './set-bg.js';
import { getWeather } from './get_weather.js';
import './change_city.js';
import { getQuotes } from './get_quotes.js';
import './create-play-list.js';
import './audio.js';
import './change-bg.js';
import './hide-elements.js';
import { onPageLoated, createTodo} from './todo-list.js';

changeLanguage();
setBg();

showTime(language);
getWeather(language);
getQuotes(language);
createTodo(language);

console.log('Score 160/150. \n  Выполнены все пункты, есть возможность переключать языки, менять фон, скрывать блоки, добавлять и удалять задачи в TODO-list, все настройки сохраняются. \n Flickr имеет небольшую задержку, особенности api. При переключении подождите несколько секунд, чтобы массив с картинками успел загрузиться. \n Обратите внимание, работа блока Unsplash имеет ограничения по количеству фотографий. Так же с поиском по тегам. Если вдруг исчерпается лимит - попробуйте позже или напишите мне. Так же если будут вопросы касательно работы любого пункта приложения - пишите. Дискорд @Тоня#7362 , телеграм @tonyaberchuk \n При работе с Unsplash и тегами картинки меняются рандомно, нельзя вернутся к картинке, которая была раньше. По заданию это не проверяется. ')