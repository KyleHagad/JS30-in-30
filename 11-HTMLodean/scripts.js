const videoPort = document.querySelector('.player');
const video = videoPort.querySelector('.viewer');
const progress = videoPort.querySelector('.progress');
const progressBar = videoPort.querySelector('.progress__filled');
const playbackToggle = videoPort.querySelector('.toggle');
const skipButtons = videoPort.querySelectorAll('[data-skip]');
const sliders = videoPort.querySelectorAll('.player__slider');

function playPause() { video[video.paused ? 'play' : 'pause'](); }  // easy version-> `video.paused ? video.play() : video.pause()`
function updateButton() { playbackToggle.textContent = this.paused ? '►' : '❚❚'; }
function skip() { video.currentTime += parseInt(this.dataset.skip, 10); }
function sliderUpdate() { video[this.name] = this.value; }

video.addEventListener('click', playPause);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

playbackToggle.addEventListener('click', playPause);
skipButtons.forEach(button => button.addEventListener('click', skip));
sliders.forEach(slider => slider.addEventListener('change', sliderUpdate));
sliders.forEach(slider => slider.addEventListener('mouseMove', sliderUpdate));
