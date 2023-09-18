import { settingsGameForest } from './components/_forestGame.js';
import { settingsGameDragon } from './components/_dragonGame.js';
import { openModalScore, closeModalScore } from './components/_modals.js';
import { addInfoGame } from './components/_functions.js';
const gameSettings = document.querySelector('.game__settings');
const gameChoice = document.querySelector('.game__choice');
const timeBox = document.querySelector('.game__time');
const endGame = document.querySelector('.game__end');
const gameChoiceBtns = document.querySelectorAll('.game__choice-btn');
const menuBtn = document.querySelectorAll('.game__btn-menu');
const difficultyBtns = document.querySelectorAll('.game__btn-difficulty');
const timeBtns = document.querySelectorAll('.game__btn-time');

const gameText = document.querySelector('.game__end-text');
const gameRepeatBtn = document.querySelector('.game__btn-repeat');
const gameMenuBtn = document.querySelector('.game__btn-menu-end');

const btnSound = document.querySelector('.btn-sound');
const bgSound = document.querySelector('.bg-sound');

const scoreOpenBtn = document.querySelector('.stat__btn');

let count = 0;
let time = 0;
let currentGame = 0;

gameChoiceBtns.forEach((el, index) => {
  el.addEventListener('click', () => {
    btnSound.play();
    currentGame = index + 1;
    gameChoice.classList.add('game__choice--hidden');
    gameSettings.classList.add('game__settings--hidden');
    setTimeout(() => {
      gameSettings.classList.remove('game__settings--hidden');
      gameSettings.classList.remove('visually-hidden');
      gameChoice.classList.add('visually-hidden');
      if (currentGame === 1) settingsGameForest(count, time)
      if (currentGame === 2) settingsGameDragon(count, time)
    }, 700);
  });
});

menuBtn.forEach((el) => {
  el.onclick = () => {
    difficultyBtns.forEach((button) => {
      if (button !== el) button.classList.remove('checked');
    });
    timeBtns.forEach((button) => {
      if (button !== el) button.classList.remove('checked');
    });
    gameSettings.classList.add('game__settings--hidden');

    gameText.classList.add('game__end-text--hidden');
    gameRepeatBtn.classList.add('game__btn-repeat--hidden');
    gameMenuBtn.classList.add('game__btn-menu-end--hidden');
    setTimeout(() => {
      gameChoice.classList.remove('game__choice--hidden');
      gameChoice.classList.remove('visually-hidden');
      gameSettings.classList.add('visually-hidden');
      timeBox.classList.add('visually-hidden');
      timeBox.classList.add('game__time--hidden');
      endGame.classList.add('visually-hidden');
    }, 700);
  }

  el.addEventListener('click', () => {
    btnSound.play();
  }, false)
});

const playBg = () => {
  bgSound.play()
}

const loading = () => {
  const loadingModal = document.querySelector('.loading-modal');
  const loadingModalOverlay = document.querySelector('.loading-overlay');
  const loadingModalContent = document.querySelector('.loading-content');
  const modalBtn = document.querySelector('.modal__btn');
  const modalLoader = document.querySelector('.modal__loader');
  const modalTitle = document.querySelector('.modal__title');

  setTimeout(() => {
    modalBtn.classList.add('modal__btn--active');
    modalLoader.classList.remove('modal__loader--active');
    modalTitle.classList.add('modal__title--active');

    modalBtn.onclick = () => {
      playBg()
      modalTitle.classList.add('visually-hidden');
      modalTitle.classList.remove('modal__title--active');
      modalBtn.classList.remove('modal__btn--active');
      setTimeout(() => {
        loadingModal.classList.remove('modal--active');
        loadingModalOverlay.classList.remove('modal__overlay--active');
        loadingModalContent.classList.remove('modal__content--active');
      }, 600);
    }
  }, 3000);
}

scoreOpenBtn.onclick = () => {
  btnSound.play();
  openModalScore()
}

document.onclick = (e) => {
  if (!e.target.closest('.stat__btn') && !e.target.closest('.score-content')) {
    closeModalScore();
  };
}

addInfoGame()
loading()
