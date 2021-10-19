import { setLocalStorage, getLocalStorage } from './util.js';

const nameContainer = document.querySelector('.name');

window.addEventListener('beforeunload', () => setLocalStorage('name', nameContainer));
window.addEventListener('load', () => getLocalStorage('name', nameContainer));