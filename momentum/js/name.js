const nameContainer = document.querySelector('.name');
function setLocalStorage() {
  localStorage.setItem('name', nameContainer.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    nameContainer.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)