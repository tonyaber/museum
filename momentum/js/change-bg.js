import { setBg, removeListenerGitHub} from './set-bg.js';
import { setBgForFrickr, removeListenerFrickr } from './set-bg-for-flickr.js';
import { setBgForUnsplash, removeListenerUnsplash } from './set-bg-for-unsplash.js';
import { getLocalStorage } from './util.js';

const backgroundCollection = document.querySelectorAll('.background-list label'),
  inputTeg = document.querySelector('#tag-text'),
  inputList = document.querySelectorAll('.background-list input[type="radio"]');

const setLocalStorage = (id, input) => {
  localStorage.setItem(id, input);
}

const changeBackground = (value) => {
  removeListenerGitHub();
  removeListenerFrickr();
  removeListenerUnsplash();
  switch (value) {
    case 'github':
      setBg();
      break;
    case 'flickr':
      setBgForFrickr();
      break;
    case 'unsplash':
      setBgForUnsplash();
      break;
    case 'tags':
      setBgForUnsplash(inputTeg.value)
      break;
    default:
      setBgForUnsplash(inputTeg.value);
      break;
  }
}

backgroundCollection.forEach(item => {
  item.addEventListener('change', (evt) => {
    changeBackground(evt.target.value);
    if (evt.target.type == 'radio') {
      setLocalStorage('background', evt.target.value)
    } else {
      setLocalStorage('background', 'tags')
    }    
  })
})

inputTeg.addEventListener('change', () => { 
  inputList[3].checked = true;
  setLocalStorage('tags', inputTeg.value)
})

window.addEventListener('load', () => getLocalStorage('tags', inputTeg));

window.addEventListener('load', () => {
  const background = localStorage.getItem('background') || false;
  if (background) {
    document.querySelector(`#${background}`).checked = true;
    if (background == 'tags') {
      changeBackground(localStorage.getItem('tags'))
    } else {
      changeBackground(background);
    }
  }
});