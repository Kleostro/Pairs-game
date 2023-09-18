import { createPairedCardsArr, shufflePairedCardsArr, createList, createListItem, createTimer } from "./_functions.js";

const timer = document.querySelector('.game__timer');
const gameSteps = document.querySelector('.game__steps');
const gameScore = document.querySelector('.game__score');

const bgSound = document.querySelector('.bg-sound');
const gameSound = document.querySelector('.game-sound');

export const startGame = (gameName, srcArr, gameBox, count, time, imageBgSrc) => {
  gameSteps.textContent = `Moves: 0`;
  gameScore.textContent = `Score: 0`;
  gameBox.classList.remove('visually-hidden');
  let score = 0;
  localStorage.setItem('score', score);
  bgSound.pause()
  let counter = 0
  localStorage.setItem('counter', counter);
  gameBox.classList.add('game__box--visible');
  gameBox.innerHTML = '';
  const pairedCardsArr = createPairedCardsArr(count, srcArr)
  const mixPairedCardsArr = shufflePairedCardsArr(pairedCardsArr)
  const cardsList = createList()
  gameBox.append(cardsList)
  cardsList.classList.add('game__list--hidden');

  let firstCard = null;
  let secondCard = null;
  setTimeout(() => {
    gameSound.play()
    createTimer(gameName, time, count, imageBgSrc)
  }, 1000);

  for (const cardSrc of mixPairedCardsArr) {
    const card = createListItem('game__list-item');
    const cardText = document.createElement('span');
    const cardImage = document.createElement('img');
    cardImage.src = `img/${cardSrc}.svg`;
    cardText.textContent = cardSrc;
    card.style.backgroundImage = imageBgSrc;

    if (imageBgSrc === 'url(img/card-bg-forest.jpg)') {
      card.style.backgroundSize = '138%';
    }
    card.append(cardText, cardImage);

    card.addEventListener('click', () => {
      let sound = document.querySelector('.btn-sound');
      sound.currentTime = 0;
      sound.play();
      let steps = Number(localStorage.getItem('counter'));
      steps++
      localStorage.setItem('counter', steps)
      gameSteps.textContent = `Moves: ${localStorage.getItem('counter')}`;
      if (card.classList.contains('open') || card.classList.contains('success')) return;

      card.classList.add('open');

      if (firstCard !== null && secondCard !== null) {
        firstCard.classList.remove('open')
        secondCard.classList.remove('open')
        firstCard = null;
        secondCard = null;
      }
      if (firstCard === null) firstCard = card;
      else secondCard = card;

      if (firstCard !== null && secondCard !== null) {
        let firstCardSrc = firstCard.textContent;
        let secondCardSrc = secondCard.textContent;

        if (firstCardSrc === secondCardSrc) {
          firstCard.classList.add('success')
          secondCard.classList.add('success')

          let score = Number(localStorage.getItem('score'));
          score = score + Math.floor(Math.random() * (10 - 1 + 1)) + 1;
          localStorage.setItem('score', score)
          gameScore.textContent = `Score: ${Number(localStorage.getItem('score'))}`;
          let sound = document.querySelector('.true-sound');
          sound.currentTime = 0;
          sound.play();
          sound.volume = 0.5
        } else {
          if (Number(localStorage.getItem('score')) >= 0) {
            if (Number(localStorage.getItem('score')) > 3) {
              let score = Number(localStorage.getItem('score'));
              score = score - 2;
              localStorage.setItem('score', score)
            } else {
              let score = Number(localStorage.getItem('score'));
              score = score - score;
              localStorage.setItem('score', score)
            }
            gameScore.textContent = `Score: ${Number(localStorage.getItem('score'))}`;
          }
          let sound = document.querySelector('.false-sound');
          sound.currentTime = 0;
          sound.play();
          sound.volume = 0.5
        }
      }
    })
    cardsList.append(card);
  }
  setTimeout(() => {
    cardsList.classList.remove('game__list--hidden');
  }, 800);
}
