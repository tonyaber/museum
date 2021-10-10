window.onload = function () { 
  
  // Video
  const video = document.querySelector('video');

  const playButton = document.querySelector('.play_pause'),
    volumeButton = document.querySelector('.volume'),
    fullScreenButton = document.querySelector('.full_screen'),
    playIcon = document.querySelector('.play_icons'),
    speedRightIcons = document.querySelector('.speed_right'),
    speedLeftIcons = document.querySelector('.speed_left'),
    speedCount = document.querySelector('.speed_count'),
    seekBar = document.querySelector('#seek_bar'),
    volumeBar = document.querySelector('#volume_bar');

  const videoPlayOrPause = () => {
    if (video.paused == true) {
      video.play();
      playButton.style.background = 'url(assets/svg/control_panel_pause.svg) no-repeat';
      playIcon.style.opacity = '0';
    } else {
      video.pause();
      playButton.style.background = 'url(assets/svg/control_panel_play.svg) no-repeat';
      playIcon.style.opacity = '1';
    }
  }

  const volumeMute = () => {
    if (video.muted == false) {
      video.muted = true;
      volumeButton.style.background = 'url(assets/svg/mute.svg) no-repeat';
      volumeBar.value = 0;
      volumeBar.style.background = `linear-gradient(to right, #C4C4C4 0%, #C4C4C4 100%)`;
    } else {
      video.muted = false;
      volumeButton.style.background = 'url(assets/svg/volume.svg) no-repeat';
      volumeBar.value = 0.4;
      volumeBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volumeBar.value * 100}%, #C4C4C4 ${volumeBar.value * 100}%, #C4C4C4 100%)`;
     }
  }

  video.addEventListener('click', videoPlayOrPause);
  playButton.addEventListener('click', videoPlayOrPause);
  playIcon.addEventListener('click', videoPlayOrPause);
  speedRightIcons.addEventListener('click', videoPlayOrPause);
  speedLeftIcons.addEventListener('click', videoPlayOrPause);
  speedCount.addEventListener('click', videoPlayOrPause);

  volumeButton.addEventListener('click', volumeMute);

  fullScreenButton.addEventListener('click', () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  });

  seekBar.addEventListener('change', () => {
    const time = video.duration * (seekBar.value / 100);

    video.currentTime = time;
  });

  video.addEventListener('timeupdate', () => {
    const value = (100 / video.duration) * video.currentTime;

    seekBar.value = value || 0;
    seekBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value - 1}%, #C4C4C4 ${value + 1}%, #C4C4C4 100%)`;
    
    if (video.duration == video.currentTime) {
      playButton.style.background = 'url(assets/svg/control_panel_play.svg) no-repeat';
      playIcon.style.opacity = '1';
    }
  });

  seekBar.addEventListener('mousedown', () => {
    video.pause();
  });

  seekBar.addEventListener('mouseup', () => {
    video.play();
  });

  volumeBar.addEventListener('change', () => {
    video.volume = volumeBar.value;
    if (volumeBar.value == 0) {
      volumeButton.style.background = 'url(assets/svg/mute.svg) no-repeat';
      video.muted = true;
    } else {
      video.muted = false;
      volumeButton.style.background = 'url(assets/svg/volume.svg) no-repeat';
    }
    volumeBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volumeBar.value * 100}%, #C4C4C4 ${volumeBar.value * 100}%, #C4C4C4 100%)`;
  });

  const map = {};
  document.addEventListener('keydown', (evt) => {
    map[evt.code] = true;
    
    switch (evt.code) {
      case 'Space':
        evt.preventDefault();
        videoPlayOrPause();
        break;
      case 'KeyM':
        volumeMute();
        break;
      case 'KeyF':
        video.requestFullscreen();
        break;
      case (map['ShiftLeft'] && 'Comma') || (map['ShiftRight'] && 'Comma'):
        if (video.playbackRate <= 2) {
          video.playbackRate += 0.25;
        }
        speedRightIcons.style.opacity = '1';
        speedCount.textContent = video.playbackRate;
        speedCount.style.opacity = '1';
    
        window.setTimeout(() => {
          speedRightIcons.style.opacity = '0';
          speedCount.style.opacity = '0';
        }, 500);
        break;
      case (map['ShiftLeft'] && 'Period') || (map['ShiftRight'] && 'Period'):
        if (video.playbackRate > 0) {
          video.playbackRate -= 0.25;
        }
        speedLeftIcons.style.opacity = '1';
        speedCount.textContent = video.playbackRate;
        speedCount.style.opacity = '1';
        window.setTimeout(() => {
          speedLeftIcons.style.opacity = '0';
          speedCount.style.opacity = '0';
        }, 500);
        break;
    }  
  })
}

