const videoPort = document.querySelector('.player');
const video = videoPort.querySelector('.viewer');
const progress = videoPort.querySelector('.progress');
const trackBar = videoPort.querySelector('.progress__filled');
const playbackToggle = videoPort.querySelector('.toggle');
const skipButtons = videoPort.querySelectorAll('[data-skip]');
const sliders = videoPort.querySelectorAll('.player__slider');

function playPause() { video[video.paused ? 'play' : 'pause'](); }  // easy version-> `video.paused ? video.play() : video.pause()`
function updateButton() { playbackToggle.textContent = this.paused ? '►' : '❚❚' }
function skip() { video.currentTime += parseInt(this.dataset.skip, 10) }
function sliderUpdate() { video[this.name] = this.value }
function syncTrackBar() { trackBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%` }
function trackScrub(e) { video.currentTime = parseInt(((e.offsetX / progress.offsetWidth) * video.duration).toString(), 10) }

video.addEventListener('click', playPause);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', syncTrackBar);

playbackToggle.addEventListener('click', playPause);
skipButtons.forEach(button => button.addEventListener('click', skip));
sliders.forEach(slider => slider.addEventListener('change', sliderUpdate));
sliders.forEach(slider => slider.addEventListener('mouseMove', sliderUpdate));

let grabbed = false;
progress.addEventListener('click', trackScrub);
progress.addEventListener('mousemove', e => { grabbed && trackScrub(e) }); // here is that single iffiness operator you've been looking for
progress.addEventListener('mousedown', () => grabbed = true);
progress.addEventListener('mouseup', () => grabbed = false);
