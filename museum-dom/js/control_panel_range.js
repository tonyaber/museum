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
    item.addEventListener('input', function () {
      let value = this.value;
      if (value < 1) {
        value = value * 100;
      }
      this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
    })
  })

  // Video
  const video = document.querySelector('video');

  // Buttons
  const playButton = document.querySelector('.play_pause'),
    volumeButton = document.querySelector('.volume'),
    fullScreenButton = document.querySelector('.full_screen'),
    playIcon = document.querySelector('.play_icons'),
    controlPanel = document.querySelector('.video_control_panel'),
    speedRightIcons = document.querySelector('.speed_right'),
    speedLeftIcons = document.querySelector('.speed_left'),
    speedCount = document.querySelector('.speed_count')

  // Sliders
  var seekBar = document.querySelector('#seek_bar');
  var volumeBar = document.querySelector('#volume_bar');

  const videoPlayOrPause= () => {
    if (video.paused == true) {
      // Play the video
      video.play();
      playButton.style.background = 'url(assets/svg/control_panel_pause.svg) no-repeat';
      playIcon.style.opacity = '0';
    } else {
      // Pause the video
      video.pause();
      playButton.style.background = 'url(assets/svg/control_panel_play.svg) no-repeat';
      playIcon.style.opacity = '1';
    }
  }

  const volumeMute = () => {
    if (video.muted == false) {
      // Mute the video
      video.muted = true;
      volumeButton.style.background = 'url(assets/svg/mute.svg) no-repeat';
    } else {
      // Unmute the video
      video.muted = false;
      volumeButton.style.background = 'url(assets/svg/volume.svg) no-repeat';
    }
  }

  video.addEventListener('click', videoPlayOrPause);
  playButton.addEventListener('click', videoPlayOrPause);
  playIcon.addEventListener('click', videoPlayOrPause);

  // Event listener for the mute button
  volumeButton.addEventListener("click", volumeMute);

  //fullscreen_exit
  // Event listener for the full-screen button
  fullScreenButton.addEventListener("click", function () {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  });


  // Event listener for the seek bar
  seekBar.addEventListener("change", function () {
    // Calculate the new time
    var time = video.duration * (seekBar.value / 100);

    // Update the video time
    video.currentTime = time;
  });


  // Update the seek bar as the video plays
  video.addEventListener("timeupdate", function () {
    // Calculate the slider value
    var value = (100 / video.duration) * video.currentTime;

    // Update the slider value
    seekBar.value = value;
    seekBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value - 1}%, #C4C4C4 ${value + 1}%, #C4C4C4 100%)`;
    
    if (video.duration == video.currentTime) {
      playButton.style.background = 'url(assets/svg/control_panel_play.svg) no-repeat';
      playIcon.style.opacity = '1';
    }
  });

  // Pause the video when the seek handle is being dragged
  seekBar.addEventListener("mousedown", function () {
    video.pause();
  });

  // Play the video when the seek handle is dropped
  seekBar.addEventListener("mouseup", function () {
    video.play();
  });

  // Event listener for the volume bar
  volumeBar.addEventListener("change", function () {
    // Update the video volume
    video.volume = volumeBar.value;
    if (volumeBar.value == 0) {
      volumeButton.style.background = 'url(assets/svg/mute.svg) no-repeat';
    } else {
      volumeButton.style.background = 'url(assets/svg/volume.svg) no-repeat';
    }
  });


  document.addEventListener('keydown', (evt) => {
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
      case ('ShiftLeft' && 'Comma') || ('ShiftRight' && 'Comma'):
        video.playbackRate += 0.25;
        speedRightIcons.style.opacity = '1';
        speedCount.textContent = video.playbackRate;
        speedCount.style.opacity = '1';
    
        window.setTimeout(() => {
          speedRightIcons.style.opacity = '0';
          speedCount.style.opacity = '0';
        }, 500);
        break;
      case ('ShiftLeft' && 'Period') || ('ShiftRight' && 'Period'):
        video.playbackRate -= 0.25;
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


