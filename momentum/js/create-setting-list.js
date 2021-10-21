import { createElement } from "./util.js";
import { SETTING } from "./const.js";

const createSettingList = (language) => {
  return `<button class="footer-icons setting-icons"></button>
        <div class="setting-container-background">
        <ul class="setting-content">
          <li class="language">${SETTING[language]['language']}</li>
          <div class="language_list">
            <label for="ru"><input type="radio" name="language" id="ru" value="ru" checked>${SETTING[language]['russian']}</label>
            <label for="us"><input type="radio" name="language" id="us" value="us">${SETTING[language]['english']}</label>
          </div>
          <li class="background">${SETTING[language]['background']}</li>
          <div class="background-list">
            <label for="github"><input type="radio" name="background" id="github" value="github" checked>GitHub</label>
            <label for="flickr"><input type="radio" name="background" id="flickr" value="flickr">Flickr</label>
            <label for="unpash"><input type="radio" name="background" id="unpash" value="unpash">Unpash</label>
            <label for="teg"><input type="radio" name="background" id="teg" value="teg">
            <input type ="text" placeholder="${SETTING[language]['placeholder']}"></label>
          </div>
        </ul>
        </div>`
}

const createSetting = (lang) => {
  const settingContainer = document.querySelector('.setting-container');
  const template = createSettingList(lang);
  const newElem = createElement(template)
  settingContainer.append(newElem)
}

export { createSetting };
