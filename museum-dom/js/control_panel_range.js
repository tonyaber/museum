window.onload = function () {
  
  //control panel 
  const range = document.querySelectorAll('input[type="range"]');

  //media

  if (window.matchMedia('(max-width: 1024px) and (min-width: 769px) ').matches) {
    range[0].setAttribute('value', '40');
  } else if (window.matchMedia('(max-width: 768px) and (min-width: 421px)').matches) {
    range[0].setAttribute('value', '31');
  } else if (window.matchMedia('(max-width: 420px)').matches) {
    range[0].setAttribute('value', '40');
  }

  range.forEach(item => {
    item.addEventListener('input', () => {
      let value = this.value;
      if (value < 1) {
        value = value * 100;
      }
      this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
    })
  })

  // Video
  const video = document.querySelector('video');

  const playButton = document.querySelector('.play_pause'),
    volumeButton = document.querySelector('.volume'),
    fullScreenButton = document.querySelector('.full_screen'),
    playIcon = document.querySelector('.play_icons'),
    controlPanel = document.querySelector('.video_control_panel'),
    speedRightIcons = document.querySelector('.speed_right'),
    speedLeftIcons = document.querySelector('.speed_left'),
    speedCount = document.querySelector('.speed_count')

  const seekBar = document.querySelector('#seek_bar');
  const volumeBar = document.querySelector('#volume_bar');

  const videoPlayOrPause= () => {
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
    } else {
      video.muted = false;
      volumeButton.style.background = 'url(assets/svg/volume.svg) no-repeat';
    }
  }

  video.addEventListener('click', videoPlayOrPause);
  playButton.addEventListener('click', videoPlayOrPause);
  playIcon.addEventListener('click', videoPlayOrPause);

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

    seekBar.value = value;
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
    } else {
      volumeButton.style.background = 'url(assets/svg/volume.svg) no-repeat';
    }
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


