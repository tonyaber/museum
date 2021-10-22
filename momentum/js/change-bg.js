import { setBg, removeListenerGitHub} from './set-bg.js';
import { setBgForFrickr, removeListenerFrickr } from './set-bg-for-flickr.js';
import { setBgForUnsplash, removeListenerUnsplash } from './set-bg-for-unsplash.js';
import { setLocalStorage, getLocalStorage } from './util.js';

const backgroundCollection = document.querySelectorAll('.background-list label'),
  inputTeg = document.querySelector('.background-list input[type="text"]'),
  inputList = document.querySelectorAll('.background-list input[type="radio"]')

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
    case 'teg':
      setBgForUnsplash(inputTeg.value)
      break;
    default:
      setBgForUnsplash(inputTeg.value);
      break;
  }
}

backgroundCollection.forEach(item => {
  item.addEventListener('change', (evt) => {
    changeBackground(evt.target.value)
    setLocalStorage('background', evt.target)
  })
})

inputTeg.addEventListener('input', () => {  
  document.querySelector('#teg').setAttribute('checked', '');
  setLocalStorage('tegs', inputTeg)
})

window.addEventListener('load', () => getLocalStorage('tegs', inputTeg));

window.addEventListener('load', () => {
  if (localStorage.getItem('background')) {
    changeBackground(localStorage.getItem('background'));
    inputList.forEach(item => item.removeAttribute('checked'));
    document.querySelector(`#${localStorage.getItem('background')}`).setAttribute('checked', '');
  }
});