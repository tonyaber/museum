const audio = document.querySelectorAll('audio'),
  btnPlay = document.querySelector('.play'),
  btnNext = document.querySelector('.play-next'),
  btnPrev = document.querySelector('.play-prev');

let isPlay = false,
  playNum = 0;
audio.currentTime = 0;

function playAudio() {
  if (!isPlay) {    
    audio[playNum].play();
    isPlay = !isPlay;
  }
  else {
    audio[playNum].pause();
    isPlay = !isPlay;
  }
  btnPlay.classList.toggle('pause');
}

const playNext = () => {
  audio[playNum].pause();
  playNum = playNum >= audio.length - 1 ? 0 : ++playNum;

  playAudio();
}

const playPrev = () => {
  console.log(playNum)
  audio[playNum].pause;
  playNum = playNum <= 0 ? audio.length - 1 : --playNum;
  playAudio();
}
btnPlay.addEventListener('click', playAudio);

btnNext.addEventListener('click', playNext);
btnPrev.addEventListener('click', playPrev);