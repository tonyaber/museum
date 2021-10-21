import { SETTING } from "./const.js";
const languageContainer = document.querySelector('.language'),
  backgroundContainer = document.querySelector('.background'),
  russianLang = document.querySelector('label[for="ru"]'),
  englishLang = document.querySelector('label[for="us"]'),
  tagsInput = document.querySelector('.background-list input[type="text"]'),
  settingContainer = document.querySelector('.setting-container'),
  settingBtn = settingContainer.querySelector('.setting-icons'),
  settingContent = settingContainer.querySelector('.setting-content'),
  settingContentBackground = settingContainer.querySelector('.setting-container-background'),
  languageItem = settingContainer.querySelector('.language'),
  languageList = settingContainer.querySelector('.language_list'),
  backgroundItem = settingContainer.querySelector('.background'),
  backgroundList = settingContainer.querySelector('.background-list');

const setSetting = (language) => {
  languageContainer.textContent = SETTING[language]['language'];
  backgroundContainer.textContent = SETTING[language]['background'];
  russianLang.textContent = SETTING[language]['russian'];
  englishLang.textContent = SETTING[language]['english'];
  tagsInput.setAttribute('placeholder', SETTING[language]['placeholder'] )
}

settingBtn.addEventListener('click', () => {
  settingContent.style.opacity = "1"
  settingContentBackground.style.display = "block";
})

settingContentBackground.addEventListener('click', (evt) => {
  if (evt.target == settingContentBackground) {
    settingContent.style.opacity = "0"
    settingContentBackground.style.display = "none";
  }
})

languageItem.addEventListener('click', () => {
  backgroundList.style.display = 'none';
  languageList.style.display = "block";
  languageItem.style.background = 'rgba(0, 0, 0, 1)';
  backgroundItem.style.background = 'rgba(0, 0, 0, 0)';
})

backgroundItem.addEventListener('click', () => {
  languageList.style.display = "none";
  backgroundList.style.display = 'block';
  languageItem.style.background = 'rgba(0, 0, 0, 0)';
  backgroundItem.style.background = 'rgba(0, 0, 0, 1)';
})

export { setSetting };
