import throttle from 'lodash.throttle';

const vimeoPlayerRef = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(vimeoPlayerRef);

const entryInLocalStorage = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(entryInLocalStorage, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime);
