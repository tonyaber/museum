import { playList } from './playList.js';
import { formatTime } from './util.js';

const playListContainer = document.querySelectorAll('.play-item'),
  btnPlay = document.querySelector('.play'),
  btnNext = document.querySelector('.play-next'),
  btnPrev = document.querySelector('.play-prev'),
  titleContainer = document.querySelector('.player-title'),
  titleSong = titleContainer.querySelector('.title-song'),
  seekContainer = titleContainer.querySelector('.player-seek'),
  duration = seekContainer.querySelector('.duration'),
  timeLine = seekContainer.querySelector('.timeline'),
  seekAudio = seekContainer.querySelector('#seek-audio'),
  volumeBtn = seekContainer.querySelector('.volume-icons'),
  seekVolume = seekContainer.querySelector('#seek-volume'),
  smallBtnPlay = document.querySelectorAll('.play-list button');

let isPlay = false,
  playNum = 0,
  setInt = null,
  currentTime = 0,
  volumeValue = 0.5;

const audio = new Audio();
audio.currentTime = 0;
audio.volume = volumeValue;

const updateTimeAndSeekAudio = () => {
  seekAudio.max = audio.duration;
  seekAudio.value = audio.currentTime;

  const seekBarValue = audio.currentTime / audio.duration * 100 + 0.5;

  seekAudio.style.background = `linear-gradient(to right, #d3d3d3 0%, #d3d3d3 ${seekBarValue}%, #ffffff ${seekBarValue}%, #ffffff 100%)`;
  
  timeLine.innerHTML = formatTime(Math.floor(audio.currentTime));
  duration.innerHTML = formatTime(Math.floor(audio.duration));
}


const playAudio = () => {
  audio.src = playList[playNum].src;
  audio.currentTime = currentTime;

  audio.play();
  isPlay = true;

  playListContainer[playNum].classList.add('item-active');
  btnPlay.classList.add('pause');
  smallBtnPlay[playNum].classList.add('pause');

  titleSong.textContent = playList[playNum].title;
  audio.addEventListener('ended', playNext);
  
  setInt = setInterval(updateTimeAndSeekAudio, 500);
}

const pauseAudio = () => {
  audio.pause();
  currentTime = audio.currentTime;
  isPlay = false;
  
  playListContainer.forEach(item => item.classList.remove('item-active'));
  btnPlay.classList.remove('pause');
  smallBtnPlay.forEach(item => item.classList.remove('pause'));
  
  audio.removeEventListener('ended', playNext);
  clearInterval(setInt);
}

const changeSeekAudio = () => {
  if (isPlay) {
    audio.currentTime = seekAudio.value;
  } else {
    currentTime = seekAudio.value;
    playAudio();
  }  
}

const playNext = () => {
  pauseAudio();
  currentTime = 0;
  playNum = playNum >= playList.length - 1 ? 0 : ++playNum;
  playAudio();
}

const playPrev = () => {
  pauseAudio();
  currentTime = 0;
  playNum = playNum <= 0 ? playList.length - 1 : --playNum;
  playAudio();
}

const volumeMute = () => {
  if (audio.muted == false) {
    audio.muted = true;    
    volumeBtn.classList.add('mute');

    seekVolume.value = 0;
    seekVolume.style.background = `linear-gradient(to right, #ffffff 0%, #ffffff 100%)`;
  } else {
    audio.muted = false;
    volumeBtn.classList.remove('mute');
    
    seekVolume.value = volumeValue;
    audio.volume = volumeValue;
    seekVolume.style.background = `linear-gradient(to right, #d3d3d3 0%, #d3d3d3 ${volumeValue * 100}%, #ffffff ${volumeValue * 100}%, #ffffff 100%)`;
  }
}
const playOrStop = () => {
  (!isPlay) ? playAudio(): pauseAudio();
}


btnPlay.addEventListener('click', playOrStop);

seekAudio.addEventListener('change', changeSeekAudio);

btnNext.addEventListener('click', playNext);
btnPrev.addEventListener('click', playPrev);

smallBtnPlay.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (playNum != index) {
      pauseAudio();
      currentTime = 0;
      playNum = index;
      playAudio();
    } else {
      playOrStop()
    }
  })
})


seekVolume.addEventListener('change', () => {
  volumeValue = seekVolume.value;
  if (seekVolume.value == 0) {
    audio.muted == false
    volumeMute();
  } else {
    audio.muted = true;
    volumeMute(seekVolume.value);
  }
});

volumeBtn.addEventListener('click', volumeMute);