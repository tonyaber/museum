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
  settingItem = settingContainer.querySelectorAll('.setting-item'),
  settingList = settingContainer.querySelectorAll('.setting-list'),
  elements = settingContainer.querySelector('.elements'),
  elementsDate = settingContainer.querySelector('#elements-date'),
  elementsTime = settingContainer.querySelector('#elements-time'),
  elementsWeather = settingContainer.querySelector('#elements-weather'),
  elementsGreeting = settingContainer.querySelector('#elements-greeting'),
  elementsQuotes = settingContainer.querySelector('#elements-quotes'),
  elementsAudio = settingContainer.querySelector('#elements-audio');

const setSetting = (language) => {
  languageContainer.textContent = SETTING[language]['language'];
  backgroundContainer.textContent = SETTING[language]['background'];
  russianLang.textContent = SETTING[language]['russian'];
  englishLang.textContent = SETTING[language]['english'];
  tagsInput.setAttribute('placeholder', SETTING[language]['placeholder']);
  elements.textContent = SETTING[language]['elements'];
  elementsDate.textContent = SETTING[language]['elements-date'];
  elementsTime.textContent = SETTING[language]['elements-time'];
  elementsWeather.textContent = SETTING[language]['elements-weather'];
  elementsGreeting.textContent = SETTING[language]['elements-greeting'];
  elementsQuotes.textContent = SETTING[language]['elements-quotes'];
  elementsAudio.textContent = SETTING[language]['elements-audio'];
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

settingItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    settingList.forEach(elem => elem.classList.add('setting-hide'));
    settingList[index].classList.remove('setting-hide');
    settingItem.forEach(elem => elem.classList.remove('setting-select-item'));
    item.classList.add('setting-select-item');
  })
})

export { setSetting };
