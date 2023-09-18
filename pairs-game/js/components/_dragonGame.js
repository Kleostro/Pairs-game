import { getCardsDragonArr } from "./_sources.js";
import { startGame } from "./_gameFrame.js";

const gameBox = document.querySelector('.game__box');
const gameSettings = document.querySelector('.game__settings');
const difficultyBtns = document.querySelectorAll('.game__btn-difficulty');
const timeBox = document.querySelector('.game__time');
const timer = document.querySelector('.game__timer');
const timeBtns = document.querySelectorAll('.game__btn-time');
const startBtn = document.querySelector('.game__btn');
const gameSubtitle = document.querySelector('.game__subtitle');

const btnSound = document.querySelector('.btn-sound');


export const settingsGameDragon = (count, time) => {
  startBtn.disabled = true;

  difficultyBtns.forEach((el) => {
    el.addEventListener('click', () => {
      btnSound.play();
      count = Number(el.textContent);
      el.classList.add('checked');
      difficultyBtns.forEach((button) => {
        if (button !== el) button.classList.remove('checked');
      });
      if (count > 0 && time > 0) startBtn.disabled = false;
      else startBtn.disabled = true;
    });
  });

  timeBtns.forEach((el) => {
    el.addEventListener('click', () => {
      btnSound.play();
      time = Number(el.textContent.replace(/[^123456]/g, ""));
      el.classList.add('checked');
      timeBtns.forEach((button) => {
        if (button !== el) button.classList.remove('checked');
      });
      if (count > 0 && time > 0) startBtn.disabled = false;
      else startBtn.disabled = true;
    });
  });

  startBtn.onclick = () => {
    let sound = document.querySelector('.btn-sound');
    sound.play();
    gameSettings.classList.add('game__settings--hidden');
    gameBox.classList.remove('visually-hidden');
    timeBox.classList.remove('visually-hidden');
    timer.textContent = 'Time left:';
    if (time === 1) timer.textContent = 'Time left: 00:59'
    if (time === 2) timer.textContent = 'Time left: 01:59'
    if (time === 3) timer.textContent = 'Time left: 02:59'
    if (time === 4) timer.textContent = 'Time left: 03:59'
    if (time === 5) timer.textContent = 'Time left: 04:59'
    if (time === 6) timer.textContent = 'Time left: 05:59'
    setTimeout(() => {
      gameSettings.classList.add('visually-hidden');
    }, 400);
    setTimeout(() => {
      timeBox.classList.remove('game__time--hidden');
      const imageBgSrc = `url(img/card-bg-dragon.jpg)`;
      startGameDragon(gameBox, count, time, imageBgSrc)
      count = 0;
      time = 0;
    }, 500);
    difficultyBtns.forEach((el) => {
      el.classList.remove('checked');
    });
    timeBtns.forEach((el) => {
      el.classList.remove('checked');
    });
    startBtn.disabled = true;
  }
};

export const startGameDragon = (gameBox, count, time, imageBgSrc) => {
  setTimeout(() => {
    gameSubtitle.textContent = `Location: Dragon's Lair`;
    const gameName = `Dragon's Lair`;
    const dragonCardsArr = getCardsDragonArr()
    startGame(gameName, dragonCardsArr, gameBox, count, time, imageBgSrc)
  }, 200);
};
