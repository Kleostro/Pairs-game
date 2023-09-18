const scoreModal = document.querySelector('.score-modal');
const scoreModalOverlay = document.querySelector('.score-overlay');
const scoreModalContent = document.querySelector('.score-content');

export const openModalScore = () => {
  scoreModal.classList.add('score-modal--active');
  scoreModalOverlay.classList.add('score-overlay--active');
  scoreModalContent.classList.add('score-content--active');
}

export const closeModalScore = () => {
  scoreModal.classList.remove('score-modal--active');
  scoreModalOverlay.classList.remove('score-overlay--active');
  scoreModalContent.classList.remove('score-content--active');
}
