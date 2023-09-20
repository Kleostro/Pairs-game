const player = document.querySelector('.player__container');
const audio = player.querySelector('.audio');
const playBtn = player.querySelector('.player__btn');
const nextBtn = player.querySelector('.player__btn-next');
const prevBtn = player.querySelector('.player__btn-prev');
const shuffledBtn = player.querySelector('.player__btn-mix');
const repeatBtn = player.querySelector('.player__btn-repeat');
const playerControls = player.querySelector('.player__controls');
const playerLine = player.querySelector('.player__controls-line');
const progressBar = player.querySelector('.player__controls-progressbar');
const playerAuthor = player.querySelector('.player__author');
const playerTrackName = player.querySelector('.player__trackname');
const trackPoster = player.querySelector('.player__poster-img');
const trackLength = player.querySelector('.player__controls-length');

const trackInfo = [
  // путь к треку
  ['instasamka-who-i-am.mp3', 'instasamka-v-moej-golove.mp3', 'vibessmusic-alone.mp3', 'billie-eilish-all-the-good-girls-go-to-hell.mp3', 'verdun-you-right-x-luxurious.mp3', 'tkay-maidza-high-beams-jpegmafia-remix.mp3', 'doja-cat-tia-tamera.mp3', 'lana-del-rey-music-to-watch-boys-to.mp3'],
  // исполнитель
  ['INSTASAMKA', 'INSTASAMKA', 'vibessmusic', 'BILLIE EILISH', 'VERDUN', 'Tkay Maidza', 'Doja Cat', 'Lana Del Rey'],
  // название трека
  ['Who I Am', 'В моей голове', 'Alone', 'All The Good Girls Go To Hell', 'You right x luxurious', 'High Beams', 'Tia Tamera', 'Music To Watch Boys To'],
  // путь к обложке
  ['who-i-am-poster.webp', 'v-moej-golove.webp', 'alone-poster.webp', 'all-the-good-girls-go-to-hell-poster.webp', 'you-right-x-luxurious-poster.webp', 'high-beams-poster.webp', 'tia-tamera-poster.webp', 'music-to-watch-boys-to-poster.webp'],
];

let [trackPath, trackAuthor, trackName, trackPosterImg] = trackInfo;

let isPlay = false;
let isPlayRepeatPlayList = false;
let isPlayRepeatTrack = false;
let isOutlineColor = false;
let isShuffledTrackArr = false;
let repeatBtnCount = 0;
let playNum = 0;
let hue = 0;
let intervalID;

const initialTrack = () => {
  audio.src = 'resources/audio/instasamka-who-i-am.mp3';
  playerAuthor.textContent = 'INSTASAMKA';
  playerTrackName.textContent = 'Who I Am';
  trackPoster.src = 'img/who-i-am-poster.webp';
  trackLength.textContent = '2:16';
}

const shuffleArray = (arr) => {
  for (let i = arr[0].length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    for (let k = 0; k < arr.length; k++) {
      [arr[k][i], arr[k][j]] = [arr[k][j], arr[k][i]];
    }
  }
};

const changeOutlineColor = () => {
  hue += 1;
  const color = `hsl(${hue}, 100%, 80%)`;
  const boxShadow = `0 0 40px 20px ${color}`;
  player.style.outlineColor = color;
  player.style.boxShadow = boxShadow;
};

const togglePlay = () => {
  if (!isPlay) {
    audio.play()
    isPlay = true;
    playBtn.innerHTML = `
    <svg>
      <use xlink:href='img/sprite.svg#pause'></use>
    </svg>
    `;
    playBtn.classList.add('pause');
    trackPoster.classList.add('pause');

    if (!isOutlineColor) {
      intervalID = setInterval(changeOutlineColor, 50);
      isOutlineColor = true;
    }
  } else {
    audio.pause()
    isPlay = false;
    playBtn.innerHTML = `
    <svg>
      <use xlink:href='img/sprite.svg#play'></use>
    </svg>
    `;
    playBtn.classList.remove('pause');
    trackPoster.classList.remove('pause');
    if (isOutlineColor) {
      clearInterval(intervalID);
      isOutlineColor = false;
      player.style.outlineColor = null;
      player.style.boxShadow = null;
    }
  }
};

const playTrack = (direction) => {
  playNum += direction;
  if (playNum < 0) {
    playNum = trackPath.length - 1;
  } else if (playNum >= trackPath.length) {
    playNum = 0;
  }
  if (!isPlay) {
    playBtn.innerHTML = `
      <svg>
        <use xlink:href='img/sprite.svg#play'></use>
      </svg>
      `;
    playBtn.classList.add('pause');
    trackPoster.classList.remove('pause');
  }
  audio.src = `resources/audio/${trackPath[playNum]}`;
  trackPoster.src = `img/${trackPosterImg[playNum]}`;
  playerTrackName.textContent = trackName[playNum];
  playerAuthor.textContent = trackAuthor[playNum];
  if (!isPlay) {
    return;
  } else {
    isPlay = false;
    togglePlay()
  }
};

shuffledBtn.addEventListener('click', () => {
  if (!isShuffledTrackArr) {
    isShuffledTrackArr = true;
    shuffledBtn.classList.add('active');
    shuffleArray(trackInfo);
    [trackPath, trackAuthor, trackName, trackPosterImg] = trackInfo;
    playNum = 0;
    isPlay = false;
    playTrack(0)
    togglePlay()
    return;
  } else {
    isShuffledTrackArr = false;
    shuffledBtn.classList.remove('active');
    playBtn.classList.remove('pause');
    trackPoster.classList.remove('pause');
    [trackPath, trackAuthor, trackName, trackPosterImg] = [
      // путь к треку
      ['instasamka-who-i-am.mp3', 'instasamka-v-moej-golove.mp3', 'vibessmusic-alone.mp3', 'billie-eilish-all-the-good-girls-go-to-hell.mp3', 'verdun-you-right-x-luxurious.mp3', 'tkay-maidza-high-beams-jpegmafia-remix.mp3', 'doja-cat-tia-tamera.mp3', 'lana-del-rey-music-to-watch-boys-to.mp3'],
      // исполнитель
      ['INSTASAMKA', 'INSTASAMKA', 'vibessmusic', 'BILLIE EILISH', 'VERDUN', 'Tkay Maidza', 'Doja Cat', 'Lana Del Rey'],
      // название трека
      ['Who I Am', 'В моей голове', 'Alone', 'All The Good Girls Go To Hell', 'You right x luxurious', 'High Beams', 'Tia Tamera', 'Music To Watch Boys To'],
      // путь к обложке
      ['who-i-am-poster.webp', 'v-moej-golove.webp', 'alone-poster.webp', 'all-the-good-girls-go-to-hell-poster.webp', 'you-right-x-luxurious-poster.webp', 'high-beams-poster.webp', 'tia-tamera-poster.webp', 'music-to-watch-boys-to-poster.webp'],
    ];
    playNum = 0;
    isPlay = false;
    playTrack(0)
    togglePlay()
  }
});

playBtn.addEventListener('click', togglePlay);

audio.addEventListener('loadeddata', () => {
  playerControls.querySelector('.player__controls-length').textContent = getTimeCodeFromNum(audio.duration);
  audio.volume = 1;
});

nextBtn.addEventListener('click', () => {
  playTrack(1)
});

prevBtn.addEventListener('click', () => {
  playTrack(-1)
});

repeatBtn.addEventListener('click', () => {
  if (repeatBtnCount === 0) {
    repeatBtn.classList.add('repeat1');
    repeatBtnCount++
    return !isPlayRepeatPlayList ? isPlayRepeatPlayList = true : isPlayRepeatPlayList = false;
  } else if (repeatBtnCount === 1) {
    repeatBtnCount++
    repeatBtn.classList.remove('repeat1');
    repeatBtn.classList.add('repeat2');
    repeatBtn.textContent = '1';
    return isPlayRepeatTrack = true;
  } else {
    repeatBtn.classList.remove('repeat1');
    repeatBtn.classList.remove('repeat2');
    repeatBtn.textContent = '';
    repeatBtnCount = 0;
    isPlayRepeatTrack = false;
    isPlayRepeatPlayList = false;
  }
})

playerLine.addEventListener('click', e => {
  const timelineWidth = window.getComputedStyle(playerLine).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

const getTimeCodeFromNum = (num) => {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
};

setInterval(() => {
  progressBar.style.width = audio.currentTime / audio.duration * 100 + '%';
  playerControls.querySelector('.player__controls-current').textContent = getTimeCodeFromNum(audio.currentTime);


  if (!isPlayRepeatPlayList && playNum !== trackPath.length - 1 && !isPlayRepeatTrack) {
    if (Math.trunc(audio.currentTime) === Math.trunc(audio.duration)) playTrack(1)


  } else if (!isPlayRepeatPlayList && playNum === trackPath.length - 1 && !isPlayRepeatTrack) {
    if (Math.trunc(audio.currentTime) === Math.trunc(audio.duration)) {
      playBtn.classList.remove('pause');
      trackPoster.classList.remove('pause');
      clearInterval(intervalID);
      isOutlineColor = false;
      player.style.outlineColor = null;
      player.style.boxShadow = null;
      return;
    }


  } else if (isPlayRepeatPlayList && playNum !== trackPath.length - 1 && !isPlayRepeatTrack) {
    if (Math.trunc(audio.currentTime) === Math.trunc(audio.duration)) playTrack(1)

  } else if (isPlayRepeatPlayList && playNum === trackPath.length - 1 && !isPlayRepeatTrack) {
    if (Math.trunc(audio.currentTime) === Math.trunc(audio.duration)) {
      playNum = 0;
      playTrack(0)
    }


  } else if (isPlayRepeatTrack) {
    if (Math.trunc(audio.currentTime) === Math.trunc(audio.duration)) playTrack(0)
  }
}, 500);

initialTrack()

alert('Дополнительный функционал описан в консоле')

console.log(`
 Дополнительный функционал:
 1. возможность выбрать трек на паузе без авто-запуска проигрывателя
 2. возможность перемешать плейлист
 3. возможность зациклить плейлист ВНИМАНИЕ!!! По ТЗ требуется проверить зацикливание плейлиста, в моей работе это регулируется по нажатию на соответствующую кнопку
 4. возможность зациклить трек
`)
