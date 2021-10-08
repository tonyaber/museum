const items = document.querySelectorAll('.video_slider_items iframe'),
  itemsContainer = document.querySelector('.video_slider'),
  buttonRight = document.querySelector('.video_slider_right'),
  buttonLeft = document.querySelector('.video_slider_left'),
  list = document.querySelectorAll('.video_slider_switch li');

let currentItem = 0,
  isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
  list.forEach(item => item.style.background = '#999999');
  list[currentItem].style.background = '#333333';
}

let left = 0;
for (let i = 0; i < items.length; i++) {  
  if (items[i].classList[0] == 'active') {
    items[i].style.left = left + "%";
    left += 33;
  }
}

function hideItem() {
  isEnabled = false;
  items.forEach(item => item.classList.remove('active'))
}

function showItem() {
  left = 0;
  for (let i = 0; i < 3; i++){
    let index = (currentItem + i + items.length) % items.length;
    items[index].classList.add('active');
    items[index].style.left = left + "%";
    isEnabled = true;
    left += 33;
  }
}

function previousItem(n) {
  hideItem();
  changeCurrentItem(n - 1);
  showItem();
}

function nextItem(n) {
  hideItem();
  changeCurrentItem(n + 1);
  showItem();
}

buttonLeft.addEventListener('click', function () {
  if (isEnabled) {
    previousItem(currentItem)
  }
})

buttonRight.addEventListener('click', function () {
  if (isEnabled) {
    nextItem(currentItem)
  }
})

list.forEach((element, index) => {
  element.addEventListener('click', () => {
    if (isEnabled) {
      hideItem();
      changeCurrentItem(index);
      showItem();
    }
  })
})