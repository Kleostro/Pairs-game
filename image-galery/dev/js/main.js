const galeryContainer = document.querySelector('.galery__container');
const searchInp = document.querySelector('.header-search__input');
const searchBtn = document.querySelector('.header-search__btn-search');
const cleanBtn = document.querySelector('.header-search__btn-clean');

let url = `https://api.unsplash.com/photos/random?count=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;

async function getData(url) {
  const res = await fetch(url)
  const data = await res.json()
  showData(data)
};

function initData() {
  searchInp.focus()
  getData(url)
};

const showData = (data) => {
  galeryContainer.innerHTML = '';
  for (let i = 0; i < 30; i++) {
    const photo = document.createElement('div');
    photo.classList.add('galery__photo');
    photo.style.backgroundImage = `url(${data[i].urls.regular})`;

    const photoBlur = document.createElement('div');
    photoBlur.classList.add('galery__photo-blur');

    const photoLink = document.createElement('a');
    photoLink.classList.add('galery__photo-download');
    photoLink.href = data[i].urls.regular;
    photoLink.target = '_blank';
    photoLink.innerHTML = `
      <svg>
        <use xlink:href="img/sprite.svg#download"></use>
      </svg>
    `;
    photo.append(photoBlur, photoLink);
    galeryContainer.append(photo);
  };
};

searchBtn.addEventListener('click', () => {
  galeryContainer.innerHTML = '';
  url = `https://api.unsplash.com/photos/random?query=${searchInp.value}&count=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
  getData(url);
});

cleanBtn.addEventListener('click', () => {
  searchInp.value = '';
});

searchInp.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && searchInp.value !== '') {
    url = `https://api.unsplash.com/photos/random?query=${searchInp.value}&count=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
    getData(url);
  } else if (e.key === 'Escape') searchInp.value = '';
});

initData()
