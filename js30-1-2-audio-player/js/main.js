const player = document.querySelector('.player__box');
const playBtn = player.querySelector('.player__btn');
const nextBtn = player.querySelector('.player__btn-next');
const prevBtn = player.querySelector('.player__btn-prev');
const timeline = player.querySelector('.timeline');
const audio = player.querySelector('.audio');

audio.src = 'resources/instasamka-who-i-am.mp3';
let isPlay = false;
let playNum = 0;
let trackArr = ['resources/instasamka-who-i-am.mp3', 'resources/instasamka-ona-vyglyadit-kak-mama-mommy-speed-up-remix.mp3', 'resources/instasamka-v-moej-golove.mp3', 'resources/instasamka-etot-ogon.mp3', 'resources/instasamka-bestie.mp3', 'resources/instasamka-volosy-nazad.mp3'];

const playAudio = () => {
  if (!isPlay) {
    audio.play()
    isPlay = true;
    playBtn.classList.add('pause');
  } else {
    audio.pause()
    isPlay = false;
    playBtn.classList.remove('pause');
  }
};

playBtn.addEventListener("click", () => {
    if (audio.paused) {
      playBtn.classList.add("pause");
      audio.play();
    } else {
      playBtn.classList.remove("pause");
      audio.pause();
    }
  },
);
audio.addEventListener("loadeddata", () => {
    player.querySelector(".time .length").textContent = getTimeCodeFromNum(audio.duration);
    audio.volume = .75;
  },
);

const playNext = () => {
  playNum++
};

const playPrev = () => {
  playNum--
};

nextBtn.addEventListener('click', () => {
  if (playNum < 0) {
    audio.src = trackArr[trackArr.length - 1];
    playNum = trackArr.length - 1;
    isPlay = false;
    playNext()
  } else if (playNum >= trackArr.length - 1) {
    playNum = 0;
    audio.src = trackArr[0];
    isPlay = false;
  } else {
    playNext()
    audio.src = trackArr[playNum];
    isPlay = false;
  }
  playAudio()
});

prevBtn.addEventListener('click', () => {
  if (playNum < 1) {
    playNum = trackArr.length - 1;
    audio.src = trackArr[playNum];
    isPlay = false;
  } else if (playNum >= trackArr.length) {
    audio.src = trackArr[0];
    isPlay = false;
  } else {
    playPrev()
    audio.src = trackArr[playNum];
    isPlay = false;
  }
  playAudio()
});

timeline.addEventListener('click', e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

setInterval(() => {
  const progressBar = player.querySelector(".progress");
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  player.querySelector(".time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}
