const videoPort = document.querySelector('.player');
const video = videoPort.querySelector('.viewer');
const progress = videoPort.querySelector('.progress');
const progressBar = videoPort.querySelector('.progress__filled');
const playbackToggle = videoPort.querySelector('.toggle');
const skipButtons = videoPort.querySelectorAll('[data-skip]');
const sliders = videoPort.querySelectorAll('player__slider');

function playPause() { video[video.paused ? 'play' : 'pause'](); } // easy version-> `video.paused ? video.play() : video.pause()`
function updateButton() {}

video.addEventListener('click', playPause);
video.addEventListener('play', updateButton);
video.addEventListener('paused', updateButton);

playbackToggle.addEventListener('click', playPause);
