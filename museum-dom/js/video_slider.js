const items = document.querySelectorAll('.video_slider_items iframe'),
  itemsContainer = document.querySelector('.video_slider'),
  buttonRight = document.querySelector('.video_slider_right'),
  buttonLeft = document.querySelector('.video_slider_left'),
  list = document.querySelectorAll('.video_slider_switch li'),
  video = document.querySelector('.video_container video'),
  seekBar = document.querySelector('#seek_bar'),
  playButton = document.querySelector('.play_pause'),
  playIcon = document.querySelector('.play_icons');

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
  video.pause();
  video.poster = `assets/img/video_slider/video${currentItem}.jpg`;
  video.src = `assets/video/video${currentItem}.mp4`;
  seekBar.style.background = `linear-gradient(to right, #C4C4C4 0%, #C4C4C4 100%)`;
  playButton.style.background = 'url(assets/svg/control_panel_play.svg) no-repeat';
  playIcon.style.opacity = '1';
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
