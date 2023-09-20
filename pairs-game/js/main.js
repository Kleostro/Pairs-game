import { settingsGame } from './components/_settingsGame.js';
import { openModalScore, closeModalScore } from './components/_modals.js';
import { loading, playBgSound, playGameSound } from './components/_functions.js';

const gameSettings = document.querySelector('.game__settings');

const gameChoice = document.querySelector('.game__choice');
const gameChoiceBtns = document.querySelectorAll('.game__choice-btn');
const difficultyBtns = document.querySelectorAll('.game__btn-difficulty');

const endGame = document.querySelector('.game__end');

const menuBtn = document.querySelectorAll('.game__btn-menu');

const timeBox = document.querySelector('.game__time');
const timeBtns = document.querySelectorAll('.game__btn-time');

const gameText = document.querySelector('.game__end-text');
const gameRepeatBtn = document.querySelector('.game__btn-repeat');
const gameMenuBtn = document.querySelector('.game__btn-menu-end');

const btnSound = document.querySelector('.btn-sound');

const scoreOpenBtn = document.querySelector('.stat__btn');

const soundSettingsBtn = document.querySelector('.game__sound-settings-btn');
const soundSettingsBgBtn = document.querySelector('.game__sound-bg-btn');
const soundSettingsGameBtn = document.querySelector('.game__sound-game-btn');
const soundSettingsList = document.querySelector('.game__sound-settings-list');

let count = 0;
let time = 0;
let currentGame = 0;

gameChoiceBtns.forEach((el, index) => {
  el.addEventListener('click', () => {
    btnSound.play();
    currentGame = index + 1;
    const locationName = el.textContent;
    gameChoice.classList.add('game__choice--hidden');
    gameSettings.classList.add('game__settings--hidden');
    setTimeout(() => {
      gameSettings.classList.remove('game__settings--hidden', 'visually-hidden');
      gameChoice.classList.add('visually-hidden');
      if (currentGame === 1) settingsGame(locationName, count, time)
      if (currentGame === 2) settingsGame(locationName, count, time)
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
      gameChoice.classList.remove('game__choice--hidden', 'visually-hidden');
      gameSettings.classList.add('visually-hidden');
      timeBox.classList.add('visually-hidden', 'game__time--hidden');
      endGame.classList.add('visually-hidden');
    }, 700);
  }

  el.addEventListener('click', () => {
    btnSound.play();
  }, false)
});

scoreOpenBtn.onclick = () => {
  btnSound.play();
  openModalScore()
}

document.onclick = (e) => {
  if (!e.target.closest('.stat__btn') && !e.target.closest('.score-content')) {
    closeModalScore();
  };

  if (!e.target.closest('.game__sound-settings-btn') && !e.target.closest('.game__sound-settings-list')) {
    soundSettingsBtn.classList.remove('game__sound-settings-btn--active');
    soundSettingsList.classList.add('game__sound-settings-list--hidden');
  }
}
loading()

soundSettingsBgBtn.onclick = () => {
  playBgSound()
};
soundSettingsGameBtn.onclick = () => {
  playGameSound()
};

soundSettingsBtn.onclick = () => {
  btnSound.play();
  soundSettingsBtn.classList.toggle('game__sound-settings-btn--active');
  soundSettingsList.classList.toggle('game__sound-settings-list--hidden');
}
