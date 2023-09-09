const player = document.querySelector('.player__modal-content');
const audio = player.querySelector('.audio');
const playBtn = player.querySelector('.player__btn');
const nextBtn = player.querySelector('.player__btn-next');
const prevBtn = player.querySelector('.player__btn-prev');
const repeatBtn = player.querySelector('.player__btn-repeat');
const playerControls = player.querySelector('.player__controls');
const playerLine = player.querySelector('.player__controls-line');
const progressBar = player.querySelector(".player__controls-progressbar");
const playerAuthor = player.querySelector('.player__author');
const playerTrackName = player.querySelector('.player__trackname');
const trackPoster = player.querySelector('.player__poster-img');
const trackLength = player.querySelector('.player__controls-length');

audio.src = 'resources/instasamka-who-i-am.mp3';
playerAuthor.textContent = 'instasamka';
playerTrackName.textContent = 'WHO I AM';
trackPoster.src = 'img/who-i-am-poster.jpg';
trackLength.textContent = audio.duration;
let isPlay = false;
let isPlayRepeatPlayList = false;
let isPlayRepeatTrack = false;
let repeatBtnCount = 0;
let playNum = 0;
const [trackPath, trackAuthor, trackName, trackPosterImg] = [
  // путь к треку
  ['instasamka-who-i-am.mp3', 'instasamka-v-moej-golove.mp3', 'instasamka-etot-ogon.mp3', 'instasamka-bestie.mp3', 'instasamka-volosy-nazad.mp3', 'tkay-maidza-high-beams-jpegmafia-remix.mp3', 'doja-cat-tia-tamera.mp3', 'mjejjbi-bjejjbi-shimmy-shimmy-ya.mp3'],
  // исполнитель
  ['INSTASAMKA', 'INSTASAMKA', 'INSTASAMKA', 'INSTASAMKA', 'INSTASAMKA', 'Tkay Maidza', 'Doja Cat', 'Мэйби Бэйби'],
  // название трека
  ['Who I Am', 'В моей голове', 'Этот огонь', 'BESTIE', 'Волосы назад', 'High Beams', 'Tia Tamera', 'Shimmy Shimmy Ya!'],
  // путь к обложке
  ['who-i-am-poster.jpg', 'v-moej-golove.jpg', 'etot-ogon-poster.jpg', 'bestie-poster.jpg', 'volosy-nazad-poster.jpg', 'high-beams-poster.jpg', 'tia-tamera-poster.jpg', 'shimmy-shimmy-ya-poster.jpg'],
];

const togglePlay = () => {
  if (!isPlay) {
    audio.play()
    isPlay = true;
    playBtn.classList.add('pause');
    trackPoster.classList.add('pause');
  } else {
    audio.pause()
    isPlay = false;
    playBtn.classList.remove('pause');
    trackPoster.classList.remove('pause');
  }
};

playBtn.addEventListener("click", togglePlay);

audio.addEventListener("loadeddata", () => {
  playerControls.querySelector('.player__controls-length').textContent = getTimeCodeFromNum(audio.duration);
  audio.volume = 1;
});

const playTrack = (direction) => {
  playNum += direction;
  if (playNum < 0) {
    playNum = trackPath.length - 1;
  } else if (playNum >= trackPath.length) {
    playNum = 0;
  }
  if (!isPlay) {
    playBtn.classList.remove('pause');
    trackPoster.classList.remove('pause');
  }
  audio.src = `resources/${trackPath[playNum]}`;
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

nextBtn.addEventListener("click", () => {
  playTrack(1)
});

prevBtn.addEventListener("click", () => {
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
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  playerControls.querySelector('.player__controls-current').textContent = getTimeCodeFromNum(audio.currentTime);
  console.log(isPlayRepeatPlayList, isPlayRepeatTrack, playNum)

  if (!isPlayRepeatPlayList && playNum !== trackPath.length - 1 && !isPlayRepeatTrack) {
    if (Math.trunc(audio.currentTime) === Math.trunc(audio.duration)) playTrack(1)


  } else if (!isPlayRepeatPlayList && playNum === trackPath.length - 1 && !isPlayRepeatTrack) {
    if (Math.trunc(audio.currentTime) === Math.trunc(audio.duration)) {
      playBtn.classList.remove('pause');
      trackPoster.classList.remove('pause');
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
