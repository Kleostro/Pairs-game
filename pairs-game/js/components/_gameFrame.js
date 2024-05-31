import { createPairedCardsArr, shufflePairedCardsArr, createList, createListItem, createTimer } from "./_functions.js";

const gameSteps = document.querySelector('.game__steps');
const gameScore = document.querySelector('.game__score');

const bgSound = document.querySelector('.bg-sound');
const btnSound = document.querySelector('.btn-sound');
const gameSound = document.querySelector('.game-sound');
const trueSound = document.querySelector('.true-sound');
const falseSound = document.querySelector('.false-sound');

trueSound.volume = 0.02;
falseSound.volume = 0.02;

export const startGame = (gameName, srcArr, gameBox, count, time, imageBgSrc) => {
  bgSound.pause()
  gameSteps.textContent = `Moves: 0`;
  gameScore.textContent = `Score: 0`;
  gameBox.classList.remove('visually-hidden');
  gameBox.classList.add('game__box--visible');
  gameBox.innerHTML = '';
  let firstCard = null;
  let secondCard = null;
  let score = 0;
  let counter = 0;
  localStorage.setItem('score', score);
  localStorage.setItem('counter', counter);
  const pairedCardsArr = createPairedCardsArr(count, srcArr)
  const mixPairedCardsArr = shufflePairedCardsArr(pairedCardsArr)
  const cardsList = createList()
  gameBox.append(cardsList)
  cardsList.classList.add('game__list--hidden');

  setTimeout(() => {
    if (localStorage.getItem('game-sound') === 'true') {
      gameSound.volume = 0.09
      gameSound.play()
    }
    createTimer(gameName, time, count, imageBgSrc)
  }, 1000);

  for (const cardSrc of mixPairedCardsArr) {
    const card = createListItem('game__list-item');
    const cardText = document.createElement('span');
    const cardImage = document.createElement('img');
    cardImage.src = `img/${cardSrc}.svg`;
    cardText.textContent = cardSrc;
    card.style.backgroundImage = imageBgSrc;

    if (imageBgSrc === 'url(img/card-bg-forest.webp)') {
      card.style.backgroundSize = '138%';
    }

    card.append(cardText, cardImage);

    card.addEventListener('click', () => {
      btnSound.currentTime = 0;
      btnSound.play();
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
          score += + Math.floor(Math.random() * (10 - 1 + 1)) + 1;
          localStorage.setItem('score', score)
          gameScore.textContent = `Score: ${Number(localStorage.getItem('score'))}`;
          trueSound.currentTime = 0;
          trueSound.play();
        } else {
          if (Number(localStorage.getItem('score')) >= 0) {
            if (Number(localStorage.getItem('score')) > 3) {
              let score = Number(localStorage.getItem('score'));
              score -= 2;
              localStorage.setItem('score', score)
            } else {
              let score = Number(localStorage.getItem('score'));
              score -= score;
              localStorage.setItem('score', score)
            }

            gameScore.textContent = `Score: ${Number(localStorage.getItem('score'))}`;
          }

          falseSound.currentTime = 0;
          falseSound.play();
        }
      }
    })
    cardsList.append(card);
  }
  setTimeout(() => {
    cardsList.classList.remove('game__list--hidden');
  }, 800);
}
