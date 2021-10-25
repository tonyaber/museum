const elementsList = document.querySelectorAll('.elements-list label input');

elementsList.forEach(item => {
  if (localStorage.getItem(item.value)=='off') {
    const element = document.querySelector(`.${item.value}`);
    element.classList.add('hide');
    item.checked = true;
  }
})

elementsList.forEach(item => {
  item.addEventListener('click', (evt) => {
    if (evt.target.checked) {
      const element = document.querySelector(`.${evt.target.value}`);
      element.classList.remove('show');
      element.classList.add('hide');
      localStorage.setItem(evt.target.value, 'off');
    } else {
      const element = document.querySelector(`.${evt.target.value}`);
      element.classList.remove('hide');
      element.classList.add('show');
      localStorage.setItem(evt.target.value, 'on');
    }
  })
})
