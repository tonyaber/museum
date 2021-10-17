import { playList } from './playList.js';

const playListContainer = document.querySelectorAll('.play-item'),
  btnPlay = document.querySelector('.play'),
  btnNext = document.querySelector('.play-next'),
  btnPrev = document.querySelector('.play-prev');

let isPlay = false,
  playNum = 0;

const audio = new Audio();

const playAudio = () => {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
  playListContainer[playNum].classList.add('item-active');
  btnPlay.classList.add('pause');
  isPlay = true;
}

const pauseAudio = () => {
  audio.pause();
  playListContainer.forEach(item => item.classList.remove('item-active'));
  btnPlay.classList.remove('pause');
  isPlay = false;
}

const playNext = () => {
  pauseAudio();
  playNum = playNum >= playList.length - 1 ? 0 : ++playNum;
  playAudio();
}

const playPrev = () => {
  pauseAudio()
  playNum = playNum <= 0 ? playList.length - 1 : --playNum;
  playAudio();
}
btnPlay.addEventListener('click', () => {
  if (!isPlay) {
    playAudio();
  } else {
    pauseAudio();
  }
});

btnNext.addEventListener('click', playNext);
btnPrev.addEventListener('click', playPrev);