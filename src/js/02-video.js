import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoFrame = document.querySelector('#vimeo-player');
const player = new Player(videoFrame);

player.on('timeupdate', throttle(addTimeToLS, 1000));

const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

if (savedTime) {
  player.setCurrentTime(savedTime.seconds);
}

function addTimeToLS(entry) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(entry));
}
