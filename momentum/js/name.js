import { setLocalStorage, getLocalStorage } from './util.js';

const nameContainer = document.querySelector('.name');
const city = document.querySelector('.city');

window.addEventListener('beforeunload', () => setLocalStorage('name', nameContainer));
window.addEventListener('load', () => getLocalStorage('name', nameContainer));

window.addEventListener('beforeunload', () => setLocalStorage('city', city));
window.addEventListener('load', () => getLocalStorage('city', city));