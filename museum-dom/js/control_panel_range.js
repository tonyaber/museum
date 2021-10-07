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
  var video = document.querySelector("video");

  // Buttons
  var playButton = document.querySelector(".play_pause");
  var volumeButton = document.querySelector(".volume");
  var fullScreenButton = document.querySelector(".full_screen");

  // Sliders
  var seekBar = document.querySelector("#seek_bar");
  var volumeBar = document.querySelector("#volume_bar");

  // Event listener for the play/pause button
  playButton.addEventListener("click", function () {
    if (video.paused == true) {
      // Play the video
      video.play();

       
    } else {
      // Pause the video
      video.pause();

    }
  });


  // Event listener for the mute button
  volumeButton.addEventListener("click", function () {
    if (video.muted == false) {
      // Mute the video
      video.muted = true;

    } else {
      // Unmute the video
      video.muted = false;

      
    }
  });


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
    seekBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value-1}%, #C4C4C4 ${value+1}%, #C4C4C4 100%)`
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
  });
}
