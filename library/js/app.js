const accountBtn = document.querySelector('.account__btn');
const accountList = document.querySelector('.account__list');

if (accountBtn) {

  accountBtn.addEventListener('click', (e) => {
    accountList.classList.toggle('account__list--active');
  });

  document.addEventListener('click', (e) => {
    if(!e.target.classList.contains('account__list') && !e.target.closest('.account__list') && !e.target.classList.contains('account__btn')) {

      accountList.classList.remove('account__list--active');
    };
  });
};



if(localStorage.getItem('userRegistered') !== 'true' && localStorage.getItem('userAuthorized') !== 'true' || localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') !== 'true') {

  accountBtn.innerHTML = `
  <svg>
    <use xlink:href="img/sprite.svg#account"></use>
  </svg>
  `
  accountList.innerHTML = `
    <strong class="account__list-text">Profile</strong>
    <li class="account__list-item"><button class="account__list-button account__list-button-login btn-reset">Log In</button></li>
    <li class="account__list-item"><button class="account__list-button account__list-button-register btn-reset">Register</button></li>
  `
};

const burger = document.querySelector(".burger");

if (burger) {

  const menu = document.querySelector(".nav");
  const menuLinks = menu.querySelectorAll(".nav__list-link");

  burger.addEventListener("click", () => {

    burger.classList.toggle("burger--active");
    menu.classList.toggle("nav--active");
    document.body.classList.toggle("stop-scroll");

  });

    menuLinks.forEach(function (el) {
      el.addEventListener("click", function () {

        burger.classList.toggle("burger--active");
        menu.classList.toggle("nav--active");
        document.body.classList.remove("stop-scroll");
      });
    });


  document.addEventListener("click", (e) => {

    if (!e.target.classList.contains("burger") && !e.target.closest(".nav__list")) {

      burger.classList.remove("burger--active");
      menu.classList.remove("nav--active");
      document.body.classList.remove("stop-scroll");
    };
  });

  document.addEventListener("keydown", function (e) {
    if (e.keyCode == 27) {

      burger.classList.remove("burger--active");
      menu.classList.remove("nav--active");
      document.body.classList.remove("stop-scroll");

    };
  });
};


// Плавный скролл по якорям

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);
    // const topOffset = 90;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

console.log(`Чтобы удалить данные юзера:
1. Заново зарегистрироваться
2. Прописать в консоль localStorage.clear() и перезагрузить страницу`);


// Описание PR

console.log(`
    1. Task: (https://github.com/rolling-scopes-school/tasks/blob/master/tasks/library/library-part3.md)
    \n
    2. Deploy: (https://rolling-scopes-school.github.io/kleostro-JSFEPRESCHOOL2023Q2/library/)
    \n
    3. Done 21.08.2023 / deadline 11.09.2023
    \n
    4. Score: 200 / 200
`);

const modal = document.querySelector('.modal');

//если на странице есть элемент с классом modal, выполнить следующий код:
if (modal) {

  //найти все элементы, которые отсносятся к модалке регистрации
  const registerModal = document.querySelector('.register-modal');
  const registerModalOverlay = document.querySelector('.register-overlay');
  const registerModalContent = document.querySelector('.register-content');

  //индикатор открытой модалки регистрации
  let registerOpenModal = false;

  //найти все кнопки, которые относятся к модалке регистрации
  const registerModalBtn = document.querySelector('.register-modal__btn');
  const accountRegisterBtn = document.querySelector('.account__list-button-register');
  const CardRegisterBtn = document.querySelector('.card__right-btn-register');
  const registerModalBtnLogin = document.querySelector('.register-modal__btn-login');



  //найти все элементы, которые относятся к модалке авторизации
  const logInModal = document.querySelector('.login-modal');
  const logInModalOverlay = document.querySelector('.login-overlay');
  const logInModalContent = document.querySelector('.login-content');

  //индикатор открытой модалки авторизации
  let logInOpenModal = false;

  //найти все кнопки, которые относятся к модалке авторизации
  const accountLogInBtn = document.querySelector('.account__list-button-login');
  const cardLogInBtn = document.querySelector('.card__right-btn-login');
  const logInModalBtn = document.querySelector('.login-modal__btn');
  const logInModalBtnRegister = document.querySelector('.login-modal__btn-register');




  //функция открытия модалки регистрации
  const openModalRegister = () => {
    registerModal.classList.add('register-modal--active');
    registerModalOverlay.classList.add('register-overlay--active');
    registerModalContent.classList.add('register-content--active');
    document.body.classList.add('stop-scroll');
    registerOpenModal = true;
  };

  //функция закрытия модалки регистрации
  const closeModalRegister = () => {
    registerModal.classList.remove('register-modal--active');
    registerModalOverlay.classList.remove('register-overlay--active');
    registerModalContent.classList.remove('register-content--active');
    document.body.classList.remove('stop-scroll');
    registerOpenModal = false;
    registerNameError.textContent = '';
    registerNameInp.classList.remove('error');
    registerSurNameError.textContent = '';
    registerSurNameInp.classList.remove('error');
    registerEmailError.textContent = '';
    registerEmailInp.classList.remove('error');
    registerPasswordError.textContent = '';
    registerPasswordInp.classList.remove('error');
  };



  //функция открытия модалки авторизации
  const openModalLogIn = () => {
    logInModal.classList.add('login-modal--active');
    logInModalOverlay.classList.add('login-overlay--active');
    logInModalContent.classList.add('login-content--active');
    document.body.classList.add('stop-scroll');
    logInOpenModal = true;
  };

  //функция закрытия модалки авторизации
  const closeModalLogIn = () => {
    logInModal.classList.remove('login-modal--active');
    logInModalOverlay.classList.remove('login-overlay--active');
    logInModalContent.classList.remove('login-content--active');
    document.body.classList.remove('stop-scroll');
    logInOpenModal = false;
    authorizedLoginError.textContent = '';
    authorizedLoginInp.classList.remove('error');
    authorizedPasswordError.textContent = '';
    authorizedPasswordInp.classList.remove('error');
  };



  // если юзер не зарегистрирован или не авторизован, то открыть модалку регистрации
  if (localStorage.getItem('userRegistered') !== 'true' || localStorage.getItem('userAuthorized') !== 'true') {

    //при клике на кнопку Register в дроп-листе открыть модалку регистрации
    accountRegisterBtn.addEventListener('click', (e) => {
      openModalRegister();
      e.stopPropagation();
      accountList.classList.remove('account__list--active');
    });

    //при клике на кнопку Sign Up в секции card открыть модалку регистрации
    CardRegisterBtn.addEventListener('click', (e) => {
      openModalRegister();
      e.stopPropagation();
      accountList.classList.remove('account__list--active');
    });

    //при клике на крестик в модалке регистрации закрыть ее
    registerModalBtn.addEventListener('click', closeModalRegister);

    //при открытой модалке регистрации и при любом клике вне области закрыть модалку регистрации
    document.addEventListener('click', (e) => {
      if (registerOpenModal === true && !e.target.closest('.modal__content')) {
        closeModalRegister();
      };
    });

    //при клике на кнопку Login в модалке регистрации закрыть ее и открыть модалку авторизации
    registerModalBtnLogin.addEventListener('click', (e) => {
      closeModalRegister();
      openModalLogIn();
      e.stopPropagation();
    });
  };



  //если юзер не авторизован, то открыть модалку авторизации
  if (localStorage.getItem('userAuthorized') !== 'true') {

    //при клике на кнопку Log In в дроп-листе открыть модалку авторизации
    accountLogInBtn.addEventListener('click', (e) => {
      openModalLogIn();
      e.stopPropagation();
      accountList.classList.remove('account__list--active');
    });

    //при клике на кнопку Log In в секции card открыть модалку авторизации
    cardLogInBtn.addEventListener('click', (e) => {
      openModalLogIn();
      e.stopPropagation();
      accountList.classList.remove('account__list--active');
    });

    //при клике на крестик в модалке регистрации закрыть ее
    logInModalBtn.addEventListener('click', closeModalLogIn);

    //при открытой модалке авторизации и при любом клике вне области закрыть модалку авторизации
    document.addEventListener('click', (e) => {
      if (logInOpenModal === true && !e.target.closest('.modal__content')) {
        closeModalLogIn();
      };
    });

    //при клике на кнопку Register в модалке авторизации закрыть ее и открыть модалку регистрации
    logInModalBtnRegister.addEventListener('click', (e) => {
      closeModalLogIn();
      openModalRegister();
      e.stopPropagation();
    });
  };



  //если юзер не авторизирован, то открыть модалку авторизации при клике на любую кнопку buy в секции favorites
  if (localStorage.getItem('userAuthorized') !== 'true') {

    //найти все кнопки карточек книг
    const favoritesBtns = document.querySelectorAll('.favorites-card__btn');

    //пройтись по всем кнопкам
    favoritesBtns.forEach(function (el) {

      //открыть модалку авторизации
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        openModalLogIn();

      });
    });
  };


  //найти все элементы, которые относятся к модалке покупки абонемента
  const buyCardModal = document.querySelector('.buy-card-modal');
  const buyCardModalOverlay = document.querySelector('.buy-card-overlay');
  const buyCardModalContent = document.querySelector('.buy-card-content');

  //найти все кнопки, которые относятся к модалке покупки абонемента
  const buyCardModalBtn = document.querySelector('.buy-card-modal__btn');
  const buyBookBtn = document.querySelectorAll('.favorites-card__btn');

  //индикатор открытой модалки покупки абонемента
  let buyCardOpenModal = false;

    //функция открытия модалки покупки абонемента
  const openModalBuyCard = () => {
    buyCardModal.classList.add('buy-card-modal--active');
    buyCardModalOverlay.classList.add('buy-card-overlay--active');
    buyCardModalContent.classList.add('buy-card-content--active');
    document.body.classList.add('stop-scroll');
    buyCardOpenModal = true;
  };

  //функция закрытия модалки покупки абонемента
  const closeModalBuyCard = () => {
    buyCardModal.classList.remove('buy-card-modal--active');
    buyCardModalOverlay.classList.remove('buy-card-overlay--active');
    buyCardModalContent.classList.remove('buy-card-content--active');
    document.body.classList.remove('stop-scroll');
    buyCardOpenModal = false;
  };
  //при клике на крестик в модалке покупки абонемента закрыть ее
  buyCardModalBtn.addEventListener('click', closeModalBuyCard);

  //при открытой модалке покупки абонемента и при любом клике вне области закрыть модалку покупки абонемента
  document.addEventListener('click', (e) => {
    if (buyCardOpenModal === true && !e.target.closest('.modal__content')) {
      closeModalBuyCard();
    };
  });

  //при клике на любую кнопку buy в секции favorites открыть модалку покупки абонемента
  if (localStorage.getItem('userAuthorized') === 'true' && localStorage.getItem('userSubscription') === 'false') {
    buyBookBtn.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.stopPropagation();
        openModalBuyCard();
      });
    });
  }

  if(localStorage.getItem('userSubscription') === 'true') {
    const ownBooksBtns = document.querySelectorAll('.btn-box');

    ownBooksBtns.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.stopPropagation();
        el.classList.add('btn-box--disabled');
        el.innerHTML = `<button class="btn-reset favorites-card__btn favorites-card__btn--disabled">Own</button>`
        let counterBooksOwn = localStorage.getItem('userOwnBooks');
        counterBooksOwn++
        localStorage.setItem('userOwnBooks', counterBooksOwn);
        const profileBooks = document.querySelector('.profile-modal__list-count-books');
        profileBooks.textContent = localStorage.getItem('userOwnBooks');
        const cardBooks = document.querySelector('.info-list-count-books');
        cardBooks.textContent = localStorage.getItem('userOwnBooks');
      });
    });
  }
};

if(location.reload) {
  localStorage.setItem('userOwnBooks', 0);
}

const swipers = document.querySelector('.swiper');

if(swipers) {
  new Swiper ('.swiper', {

    autoplay: {
      delay: 3000,
    },

    breakpoints: {
      1: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 25,
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 25,
      },
      1270: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 25,
      }
    },

    navigation: {
      nextEl: '.swiper-button-next-about',
      prevEl: '.swiper-button-prev-about',
      clickable: true,
    },

    pagination: {
      el: '.about__pagination',
      type: 'bullets',
      bulletActiveClass: 'about__pagination-bullet--active',
      bulletClass: 	'about__pagination-bullet',
      clickable: true,
    },
  });
};

const favoritesTab = document.querySelector('.favorites');

if (favoritesTab) {
  let tabsBtn = document.querySelectorAll('.favorites__label');
  let tabItem = document.querySelectorAll('.favorites__list-item');

  tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) {
        btn.classList.remove('favorites__label--active');
      });
      e.currentTarget.classList.add('favorites__label--active');

      tabItem.forEach(function (element) {
        element.classList.remove('favorites__list-item--active');
      });

      document.querySelectorAll(`[data-target="${path}"]`).forEach(function (item) {
        item.classList.add('favorites__list-item--active');
        item.style.opacity = '0';

        setTimeout(function () {
          item.style.opacity = '1';
        }, 0);
      });

      document.querySelectorAll(`[data-target]:not([data-target="${path}"])`).forEach(function (item) {
        item.style.opacity = '1';

        setTimeout(function () {
          item.classList.remove('favorites__list-item--active');
          item.style.opacity = '0';
        }, 0);
      });
    });
  });
}

//если юзер не зарегистрирован, то кнопка Check the card ни к чему не приведет

//найти форму и кнопку Check the card
const checkCardForm = document.getElementById('card-form');
const checkCardBtn = document.querySelector('.card__form-btn');


//если юзер НЕ зарегистрирован
if (localStorage.getItem('userRegistered') !== 'true') {

  checkCardBtn.addEventListener('click', (e) => {

    //остановить распространение поведения кнопки формы
    e.stopPropagation();

  });

  //отменить дефолтное поведение кнопки при сабмите
  checkCardForm.addEventListener('submit', (e) => {

    e.preventDefault();

  });
};





//после регистрации юзер зарегистрирован И авторизован

//если юзер зарегистрирован И авторизован
if (localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true') {

  //получить инициалы юзера
  let userNameInitial = localStorage.getItem('userName');
  let userSurNameInitial = localStorage.getItem('userSurName');
  let userInitials = `${userNameInitial[0]}${userSurNameInitial[0]}`;

  let cardBoxInfo = document.querySelector('.card__content');

  cardBoxInfo.innerHTML = `
  <div class="card__left flex">
  <h3 class="card__left-subtitle">Your Library card</h3>
  <div class="card__left-bottom">
    <div class="card__left-info">
      <span class="card__name">Brooklyn Public Library</span>
      <span class= "card__user-name">${localStorage.getItem('userName')} ${localStorage.getItem('userSurName')}</span>
      <span class= "card__user-number">${localStorage.getItem('cardNumber')}</span>
    </div>
    <ul class="card__left-info-list list-reset info-list">
      <li class="info-list__item">
        <span class="info-list-name">Visits</span>
        <svg>
          <use xlink:href="img/sprite.svg#visits"></use>
        </svg>
        <span class="info-list-count info-list-count-visits">${localStorage.getItem('userVisits')}</span>
      </li>
      <li class="info-list__item">
        <span class="info-list-name">Bonuses</span>
        <svg>
          <use xlink:href="img/sprite.svg#bonuses"></use>
        </svg>
        <span class="info-list-count">1240</span>
      </li>
      <li class="info-list__item">
        <span class="info-list-name">Books</span>
        <svg>
          <use xlink:href="img/sprite.svg#books"></use>
        </svg>
        <span class="info-list-count info-list-count-books">${localStorage.getItem('userOwnBooks')}</span>
      </li>
    </ul>
  </div>
</div>
<div class="card__right flex">
  <h3 class="card__right-subtitle">Visit your profile</h3>
  <p class="card__right-descr">With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.</p>
  <div class="card__right-bottom flex">
    <button class="btn-reset card__right-btn card__right-btn-profile">Profile</button>
  </div>
</div>
`



  //если юзернейм есть в БД, то вместо свг иконки в кнопке юзера вставить его инициалы
  if (localStorage.getItem('userName')) {

    //заменить содержимый код кнопки юзера на его инициалы
    accountBtn.innerHTML = userInitials;
    accountBtn.setAttribute('title', `${localStorage.getItem('userName')} ${localStorage.getItem('userSurName')}`)
    accountBtn.classList.add('account__btn-after-register');

    //заменить содержимый код дроп-листа на дроп-лист после авторизации
    accountList.classList.add('account__list-login');
    accountList.innerHTML = `
        <strong class="account__list-text">${localStorage.getItem('cardNumber')}</strong>
        <li class="account__list-item"><button class="account__list-button account__list-button-my-profile btn-reset">My profile</button></li>
        <li class="account__list-item"><button class="account__list-button account__list-button-logout btn-reset">Log Out</button></li>
      `
  };
};



//выход из профиля

//получить кнопку выхода из профиля
const logOutBtn = document.querySelector('.account__list-button-logout');

//если есть кнопка выхода из профиля, то при клике на нее удалить авторизацию юзера из профиля и перезагрузить страницу, тем самым убрать авторизацию с юзера
if (logOutBtn) {

  logOutBtn.addEventListener('click', () => {
    localStorage.removeItem('userAuthorized');
    location.reload();

  });
};



//если юзер зарегистрирован и авторизован, то открыть модалку профиля
if (localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true') {

  //найти все элементы, которые относятся к модалке профиля
  const profileModal = document.querySelector('.profile-modal');
  const profileModalOverlay = document.querySelector('.profile-overlay');
  const profileModalContent = document.querySelector('.profile-content');

  //индикатор открытой модалки профиля
  let profileOpenModal = false;

  //функция открытия модалки профиля
  const openModalProfile = () => {
    profileModal.classList.add('profile-modal--active');
    profileModalOverlay.classList.add('profile-overlay--active');
    profileModalContent.classList.add('profile-content--active');
    document.body.classList.add('stop-scroll');
    profileOpenModal = true;
  };

  //функция закрытия модалки профиля
  const closeModalProfile = () => {
    profileModal.classList.remove('profile-modal--active');
    profileModalOverlay.classList.remove('profile-overlay--active');
    profileModalContent.classList.remove('profile-content--active');
    document.body.classList.remove('stop-scroll');
    profileOpenModal = false;
  };

  const accountProfileBtn = document.querySelector('.account__list-button-my-profile');
  const cardProfileBtn = document.querySelector('.card__right-btn-profile');
  const profileModalBtn = document.querySelector('.profile-modal__btn');
  //при клике на кнопку My profile в дроп-листе открыть модалку профиля
  accountProfileBtn.addEventListener('click', (e) => {
    openModalProfile();
    e.stopPropagation();
    accountList.classList.remove('account__list--active');
  });


  //при клике на кнопку Profile в секции card открыть модалку профиля
  cardProfileBtn.addEventListener('click', (e) => {
    openModalProfile();
    e.stopPropagation();
    accountList.classList.remove('account__list--active');
  });

  //при клике на крестик в модалке профиля закрыть ее
  profileModalBtn.addEventListener('click', closeModalProfile);

  //при открытой модалке профиля и при любом клике вне области закрыть модалку профиля
  document.addEventListener('click', (e) => {
    if (profileOpenModal === true && !e.target.closest('.modal__content')) {
      closeModalProfile();
    };
  });


  let userNameInitial = localStorage.getItem('userName');
  let userSurNameInitial = localStorage.getItem('userSurName');
  let userInitials = `${userNameInitial[0]}${userSurNameInitial[0]}`;

  const profileInitials = document.querySelector('.profile-modal__initials');
  profileInitials.textContent = userInitials;

  const profileName = document.querySelector('.profile-modal__name');
  profileName.textContent = `${localStorage.getItem('userName')} ${localStorage.getItem('userSurName')}`;

  const profileVisits = document.querySelector('.profile-modal__list-count-visits');
  profileVisits.textContent = localStorage.getItem('userVisits');

  const profileCardNumber = document.querySelector('.profile-modal__card-number-copy');
  profileCardNumber.value = localStorage.getItem('cardNumber');

  profileCardNumber.addEventListener('click', () => {
    let cardNumber = document.querySelector('.profile-modal__card-number-copy');
    cardNumber.select();
    document.execCommand("copy");
  })
}

// валидация формы регистрации

//получить форму регистрации
const registerForm = document.getElementById('register-form');

//получить все инпуты в форме регистрации
const registerNameInp = document.querySelector('.register-modal__input-name');
const registerSurNameInp = document.querySelector('.register-modal__input-surname');
const registerEmailInp = document.querySelector('.register-modal__input-email');
const registerPasswordInp = document.querySelector('.register-modal__input-password');

//получить поля для вывода ошибок в инпутах
const registerNameError = document.querySelector('.register-modal__error-text-name');
const registerSurNameError = document.querySelector('.register-modal__error-text-surname');
const registerEmailError = document.querySelector('.register-modal__error-text-email');
const registerPasswordError = document.querySelector('.register-modal__error-text-password');

//получить кнопку для сабмита формы регистрации
const registerFormBtn = document.querySelector('.register-modal__btn-submit');

const upUserVisits = (userVisits) => {
  userVisits++
  localStorage.setItem('userVisits', userVisits);
};



//обработка клика по кнопке сабмита формы регистрации
registerFormBtn.addEventListener('click', (e) => {

  //остановить распространение поведения кнопки формы
  e.stopPropagation();

  //запретить скролл страницы при заполнении формы регистрации
  document.body.classList.add('stop-scroll');

  //получить все значения в инпутах
  let registerNameValue = registerNameInp.value.split(/\s+/).join(''); // убираются пробелы внутри строки
  let registerSurNameValue = registerSurNameInp.value.split(/\s+/).join(''); // убираются пробелы внутри строки
  let registerEmailValue = registerEmailInp.value.toLowerCase().split(/\s+/).join(''); // все символы записываются в нижнем регистре и убираются пробелы внутри строки
  let registerPasswordValue = registerPasswordInp.value.split(/\s+/).join(''); // убираются пробелы внутри строки

  //датчик валидации формы регистрации
  let registerValidationResult = false;



  //валидация значения инпута имени
  registerNameError.textContent = '';
  if (registerNameValue === '') {

    registerNameInp.classList.add('error');
    registerNameError.textContent = 'Fill in the field';
    registerValidationResult = true;

  } else if (registerNameValue.length < 3) {

    registerNameInp.classList.add('error');
    registerNameError.textContent = 'Name length must be more than 3 characters';
    registerValidationResult = true;

  } else {
    registerNameValue = `${registerNameValue[0].toUpperCase()}${registerNameValue.slice(1).toLowerCase()}`// первый символ в верхенм регистре, а остальные в нижнем + убрать все пробелы
    localStorage.setItem('userName', registerNameValue);
    registerNameInp.classList.remove('error');
    registerNameInp.classList.add('complete');

  };



  //валидация значения инпута фамилии
  registerSurNameError.textContent = '';
  if (registerSurNameValue === '') {

    registerSurNameInp.classList.add('error');
    registerSurNameError.textContent = 'Fill in the field';
    registerValidationResult = true;

  } else if (registerSurNameValue.length < 3) {

    registerSurNameInp.classList.add('error');
    registerSurNameError.textContent = 'Last name must be more than 3 characters';
    registerValidationResult = true;

  } else {
    registerSurNameValue = `${registerSurNameValue[0].toUpperCase()}${registerSurNameValue.slice(1).toLowerCase()}`// первый символ в верхенм регистре, а остальные в нижнем + убрать все пробелы
    localStorage.setItem('userSurName', registerSurNameValue);
    registerSurNameInp.classList.remove('error');
    registerSurNameInp.classList.add('complete');

  };



  //валидация значения инпута почты
  registerEmailError.textContent = '';
  if (registerEmailValue === '') {

    registerEmailInp.classList.add('error');
    registerEmailError.textContent = 'Fill in the field';
    registerValidationResult = true;

  } else if (registerEmailValue.length < 3) {

    registerEmailInp.classList.add('error')
    registerEmailError.textContent = 'Mail length must be more than 3 characters';
    registerValidationResult = true;

  } else if (registerEmailValue.includes('@') !== true) {

    registerEmailInp.classList.add('error');
    registerEmailError.textContent = 'Mail must contain \'@\'';
    registerValidationResult = true;

  } else if (registerEmailValue === localStorage.getItem('userEmail')) {

    registerEmailInp.classList.add('error');
    registerEmailError.textContent = 'This email address is already registered';
    registerValidationResult = true;

  } else {

    localStorage.setItem('userEmail', registerEmailValue);
    registerEmailInp.classList.remove('error');
    registerEmailInp.classList.add('complete');

  };



  //валидация значения инпута пароля
  registerPasswordError.textContent = '';
  if (registerPasswordValue === '') {

    registerPasswordInp.classList.add('error');
    registerPasswordError.textContent = 'Fill in the field';
    registerValidationResult = true;

  } else if (registerPasswordValue.length < 8) {

    registerPasswordInp.classList.add('error');
    registerPasswordError.textContent = 'Password length must be more than 8 characters';
    registerValidationResult = true;

  } else {

    localStorage.setItem('userPassword', registerPasswordValue);
    registerPasswordInp.classList.remove('error');
    registerPasswordInp.classList.add('complete');

  };



  //если есть ошибка в валидации, то заново пройтись по всем значениям инпутам
  if (registerValidationResult === true) {

    return;

  };



  //после успешной регистрации

  //закрыть модалку регистрации
  registerFormBtn.addEventListener('click', () => {

    closeModalRegister();

  });

  //удалить из БД счетчик визитов
  localStorage.removeItem('userVisits');

  //создать счетчик визитов юзера и присвоить в него значение из БД
  let userVisits = Number(localStorage.getItem('userVisits'));

  //увеличить кол-во визитов юзера на 1
  upUserVisits(userVisits);

  localStorage.setItem('userSubscription', false)
  localStorage.setItem('userOwnBooks', 0);

  //принудительно перезагрузить страницу
  location.reload();



  //сбросить все значения инпутов
  registerNameInp.value = '';
  registerNameInp.classList.remove('complete');
  registerSurNameInp.value = '';
  registerSurNameInp.classList.remove('complete');
  registerEmailInp.value = '';
  registerEmailInp.classList.remove('complete');
  registerPasswordInp.value = '';
  registerPasswordInp.classList.remove('complete');



  //сгенерировать случайное девятизначное число
  let randomNumber = Math.floor(Math.random() * 900000000) + 100000000;

  //сконвертировать число в 16-ричную систему
  let hexNumber = randomNumber.toString(16).toUpperCase();

  //добавить ведущие нули, если необходимо
  while (hexNumber.length < 9) {

    hexNumber = "0" + hexNumber;

  };

  //сохранить в БД сгенерированный cardNumber
  localStorage.setItem('cardNumber', hexNumber);

  //сохранить в БД датчики успешных регистрации и авторизации юзера
  localStorage.setItem('userRegistered', true);
  localStorage.setItem('userAuthorized', true);
});



//отменить дефолтное поведение кнопки при сабмите
registerForm.addEventListener('submit', (e) => {

  e.preventDefault();

});





// валидация формы авторизации

//получить форму авторизации
const authorizedForm = document.getElementById('login-form');

//получить все инпуты в форме авторизации
const authorizedLoginInp = document.querySelector('.login-modal__input-login');
const authorizedPasswordInp = document.querySelector('.login-modal__input-password');

//получить поля для вывода ошибок в инпутах
const authorizedLoginError = document.querySelector('.login-modal__error-text-login');
const authorizedPasswordError = document.querySelector('.login-modal__error-text-password');

//получить кнопку для сабмита формы авторизации
const authorizedFormBtn = document.querySelector('.login-modal__btn-login');



//обработка клика по кнопке сабмита формы авторизации
authorizedFormBtn.addEventListener('click', (e) => {

  //остановить распространение поведения кнопки формы
  e.stopPropagation();

  //запретить скролл страницы при заполнении формы авторизации
  document.body.classList.add('stop-scroll');

  //получить все значения в инпутах
  let authorizedLoginValue = authorizedLoginInp.value.split(/\s+/).join(''); // убираются пробелы внутри строки
  let authorizedPasswordValue = authorizedPasswordInp.value.split(/\s+/).join(''); // убираются пробелы внутри строки

  //датчик валидации формы аторизации
  let authorizedValidationResult = false;



  //валидация значения инпута логина
  authorizedLoginError.textContent = '';
  if (authorizedLoginValue === '') {
    authorizedLoginInp.classList.add('error');
    authorizedLoginError.textContent = 'Fill in the field';
    authorizedValidationResult = true;
  } else if (authorizedLoginValue !== localStorage.getItem('userEmail') && authorizedLoginValue !== localStorage.getItem('cardNumber')) {
    authorizedLoginInp.classList.add('error');
    authorizedLoginError.textContent = 'This mail or readers card is not registered';
    authorizedValidationResult = true;
  } else {
    authorizedLoginInp.classList.remove('error');
    authorizedLoginInp.classList.add('complete');
  };



  //валидация значения инпута пароля
  authorizedPasswordError.textContent = '';
  if (authorizedPasswordValue === '') {

    authorizedPasswordInp.classList.add('error');
    authorizedPasswordError.textContent = 'Fill in the field';
    authorizedValidationResult = true;

  } else if (authorizedPasswordValue.length < 8) {

    authorizedPasswordInp.classList.add('error');
    authorizedPasswordError.textContent = 'Password length must be more than 8 characters';
    authorizedValidationResult = true;

  } else if (authorizedPasswordValue !== localStorage.getItem('userPassword')) {

    authorizedPasswordInp.classList.add('error');
    authorizedPasswordError.textContent = 'wrong password';
    authorizedValidationResult = true;

  } else {

    authorizedPasswordInp.classList.remove('error');
    authorizedPasswordInp.classList.add('complete');

  };



  //если есть ошибка в валидации, то заново пройтись по всем значениям инпутам
  if (authorizedValidationResult === true) {

    return;

  };



  //после успешной авторизации

  //закрыть модалку авторизации
  authorizedFormBtn.addEventListener('click', () => {

    closeModalLogIn();

  });


  let userVisits = Number(localStorage.getItem('userVisits'));
  upUserVisits(userVisits);


  //принудительно перезагрузить страницу
  location.reload();



  //сохранить в БД датчик успешной авторизации юзера
  localStorage.setItem('userAuthorized', true);



  //сбросить все значения инпутов
  authorizedLoginInp.value = '';
  authorizedLoginInp.classList.remove('complete');
  authorizedPasswordInp.value = '';
  authorizedPasswordInp.classList.remove('complete');
});


//увеличить кол-во визитов на 1


//отменить дефолтное поведение кнопки при сабмите
authorizedForm.addEventListener('submit', (e) => {

  e.preventDefault();

});




//если юзер зарегистрирован
if (localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') !== 'true') {

  // валидация формы проверки карты

  //получить форму проверки карты
  const cardForm = document.getElementById('card-form');

  //получить все инпуты в форме проверки карты
  const cardNameInp = document.querySelector('.card__form-input-name');
  const cardNumberInp = document.querySelector('.card__form-input-number');

  //получить поля для вывода ошибок в инпутах
  const cardNameError = document.querySelector('.card__error-text-name');
  const cardNumberError = document.querySelector('.card__error-text-number');

  //получить кнопку для сабмита формы проверки карты
  const cardBtn = document.querySelector('.card__form-btn');


  cardBtn.addEventListener('click', (e) => {

    //остановить распространение поведения кнопки формы
    e.stopPropagation();

    //получить все значения в инпутах
    let cardNameValue = cardNameInp.value.replace(/(^|\s)\S/g, function (a) { return a.toUpperCase() }) //каждое слово начинается с буквы в верхнем регистре
    let cardNumberValue = cardNumberInp.value.toUpperCase();



    //датчик валидации формы проверки карты
    let cardValidationResult = false;

    //валидация значения инпута имени
    cardNameError.textContent = '';
    if (cardNameValue === '') {
      cardNameInp.classList.add('error');
      cardNameError.textContent = 'Fill in the field';
      cardValidationResult = true;
    } else if (cardNameValue !== `${localStorage.getItem('userName')} ${localStorage.getItem('userSurName')}`) {
      cardNameInp.classList.add('error');
      cardNameError.textContent = 'Enter the correct first and last name';
      cardValidationResult = true;
    } else {
      cardNameInp.classList.remove('error');
      cardNameInp.classList.add('complete');
    };

    //валидация значения инпута номера карты
    cardNumberError.textContent = '';
    if (cardNumberValue === '') {
      cardNumberInp.classList.add('error');
      cardNumberError.textContent = 'Fill in the field';
      cardValidationResult = true;
    } else if (cardNumberValue !== localStorage.getItem('cardNumber')) {
      cardNumberInp.classList.add('error');
      cardNumberError.textContent = 'Card number is not found';
      cardValidationResult = true;
    } else {
      cardNumberInp.classList.remove('error');
      cardNumberInp.classList.add('complete');
    };

    //если есть ошибка в валидации, то заново пройтись по всем значениям инпутам
    if (cardValidationResult === true) {

      return;

    };

    //сбросить все значения инпутов
    cardNameInp.value = '';
    cardNameInp.classList.remove('complete');
    cardNumberInp.value = '';
    cardNumberInp.classList.remove('complete');



    //получить блок с инфой о юзере
    const checkCardBox = document.querySelector('.card__content');

    //поменять разметку под запрос юзера
    checkCardBox.innerHTML = `
    <div class="card__left flex">
    <h3 class="card__left-subtitle">Your Library card</h3>
    <div class="card__left-bottom">
      <div class="card__left-info">
        <span class="card__name">Brooklyn Public Library</span>
        <span class= "card__user-name">${localStorage.getItem('userName')} ${localStorage.getItem('userSurName')}</span>
        <span class= "card__user-number">${localStorage.getItem('cardNumber')}</span>
      </div>
      <ul class="card__left-info-list list-reset info-list">
        <li class="info-list__item">
          <span class="info-list-name">Visits</span>
          <svg>
            <use xlink:href="img/sprite.svg#visits"></use>
          </svg>
          <span class="info-list-count info-list-count-visits">${localStorage.getItem('userVisits')}</span>
        </li>
        <li class="info-list__item">
          <span class="info-list-name">Bonuses</span>
          <svg>
            <use xlink:href="img/sprite.svg#bonuses"></use>
          </svg>
          <span class="info-list-count">1240</span>
        </li>
        <li class="info-list__item">
          <span class="info-list-name">Books</span>
          <svg>
            <use xlink:href="img/sprite.svg#books"></use>
          </svg>
          <span class="info-list-count info-list-count-books">${localStorage.getItem('userOwnBooks')}</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="card__right flex">
  <h3 class="card__right-subtitle">Get a reader card</h3>
  <p class="card__right-descr">You will be able to see a reader card after logging into account or you can register a new account</p>
  <div class="card__right-bottom flex">
    <button class="btn-reset card__right-btn card__right-btn-register" disabled>Sign Up</button>
    <button class="btn-reset card__right-btn card__right-btn-login" disabled>Log in</button>
  </div>
</div>
  `;

    //вернуть дефолтную разметку через 10с
    setTimeout(() => {

      checkCardBox.innerHTML = `<div class="card__left flex">
                                  <h3 class="card__left-subtitle">Find your Library card</h3>
                                  <div class="card__left-bottom">
                                    <form action="#" class="form card__form flex" id="card-form">
                                      <div class="card__form-top flex">
                                        <span class="card__name">Brooklyn Public Library</span>
                                        <label class="card__label">
                                          <input type="text" class="input-reset card__form-input card__form-input-name" placeholder="Reader's name">
                                          <span class="error-text-card error-text card__error-text-name"></span>
                                        </label>
                                        <label class="card__label">
                                          <input type="text" class="input-reset card__form-input card__form-input-number" placeholder="Card number">
                                          <span class="error-text-card error-text card__error-text-number"></span>
                                        </label>
                                      </div>
                                      <div class="card__form-bottom flex">
                                        <button class="btn-reset card__form-btn" type="submit">Check the card</button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <div class="card__right flex">
                                  <h3 class="card__right-subtitle">Get a reader card</h3>
                                  <p class="card__right-descr">You will be able to see a reader card after logging into account or you can register a new account</p>
                                  <div class="card__right-bottom flex">
                                    <button class="btn-reset card__right-btn card__right-btn-register">Sign Up</button>
                                    <button class="btn-reset card__right-btn card__right-btn-login">Log in</button>
                                  </div>
                                </div>
                              `
      //принудительно перезагрузить страницу
      location.reload();
    }, 10000);

  });

  //отменить дефолтное поведение кнопки при сабмите
  cardForm.addEventListener('submit', (e) => {

    e.preventDefault();

  });
};





// валидация формы покупки абонемента

//получить форму покупки абонемента
const buyCardForm = document.getElementById('buy-card-form');

//получить все инпуты в форме покупки абонемента
const buyCardNumberInp = document.querySelector('.buy-card-form__input-card-number');
const buyCardExpCodeFirstInp = document.querySelector('.buy-card-form__input-expiration-code-1');
const buyCardExpCodeSecondInp = document.querySelector('.buy-card-form__input-expiration-code-2');
const buyCardCVCInp = document.querySelector('.buy-card-form__input-cvc');
const buyCardHolderInp = document.querySelector('.buy-card-form__input-cardholder-name');
const buyCardPostalInp = document.querySelector('.buy-card-form__input-postal-code');
const buyCardCityInp = document.querySelector('.buy-card-form__input-city');


//получить поля для вывода ошибок в инпутах
const buyCardNumberError = document.querySelector('.buy-card-form__error-text-card-number');
const buyCardExpCodeError = document.querySelector('.buy-card-form__error-text-code');
const buyCardCVCError = document.querySelector('.buy-card-form__error-text-cvc');
const buyCardHolderError = document.querySelector('.buy-card-form__error-text-cardholder-name');
const buyCardPostalError = document.querySelector('.buy-card-form__error-text-postal-code');
const buyCardCityError = document.querySelector('.buy-card-form__error-text-city');

//получить кнопку для сабмита формы покупки абонемента
const buyCardFormBtn = document.querySelector('.buy-card-form__btn-submit');


//обработка клика по кнопке сабмита формы покупки абонемента
buyCardFormBtn.addEventListener('click', (e) => {

  //остановить распространение поведения кнопки формы
  e.stopPropagation();

  //запретить скролл страницы при заполнении формы покупки абонемента
  document.body.classList.add('stop-scroll');

  //получить все значения в инпутах
  let buyCardNumberValue = buyCardNumberInp.value.split(/\s+/).join(''); // убираются пробелы
  let buyCardExpCodeFirstValue = buyCardExpCodeFirstInp.value.split(/\s+/).join(''); // убираются пробелы
  let buyCardExpCodeSecondValue = buyCardExpCodeSecondInp.value.split(/\s+/).join(''); // убираются пробелы
  let buyCardCVCValue = buyCardCVCInp.value.split(/\s+/).join(''); // убираются пробелы
  let buyCardHolderValue = buyCardHolderInp.value.replace(/(^|\s)\S/g, function (a) { return a.toUpperCase() }); //каждое слово начинается с буквы в верхнем регистре
  let buyCardPostalValue = buyCardPostalInp.value.split(/\s+/).join(''); // убираются пробелы
  let buyCardCityValue = buyCardCityInp.value;

  //датчик валидации формы покупки абонемента
  let buyCardValidationResult = false;


  //валидация значения инпута номера карты
  buyCardNumberError.textContent = '';
  if (buyCardNumberValue === '') {
    buyCardNumberInp.classList.add('error');
    buyCardNumberError.textContent = 'Fill in the field';
    buyCardValidationResult = true;
  } else if (/[A-Za-zА-Яа-яЁё]/.test(buyCardNumberValue)) {
    buyCardNumberInp.classList.add('error');
    buyCardNumberError.textContent = 'Card number cannot contain letters';
    buyCardValidationResult = true;
  } else if (buyCardNumberValue.length !== 16) {
    buyCardNumberInp.classList.add('error');
    buyCardNumberError.textContent = 'Card number must contain 16 digits';
    buyCardValidationResult = true;
  } else {
    buyCardNumberInp.classList.remove('error');
    buyCardNumberInp.classList.add('complete');
  };



  //валидация значения 2 инпута Expiration code
  buyCardExpCodeError.textContent = '';
  if (buyCardExpCodeSecondValue === '') {
    buyCardExpCodeSecondInp.classList.add('error');
    buyCardExpCodeError.textContent = 'Fill in the field';
    buyCardValidationResult = true;
    buyCardExpCodeSecondInp.classList.remove('complete');
  } else if (/[A-Za-zА-Яа-яЁё]/.test(buyCardExpCodeSecondValue)) {
    buyCardExpCodeSecondInp.classList.add('error');
    buyCardExpCodeError.textContent = 'Expiration code cannot contain letters';
    buyCardValidationResult = true;
    buyCardExpCodeSecondInp.classList.remove('complete');
  } else if (buyCardExpCodeSecondValue.length !== 2) {
    buyCardExpCodeSecondInp.classList.add('error');
    buyCardExpCodeError.textContent = 'Expiration code must contain 2 digits';
    buyCardValidationResult = true;
    buyCardExpCodeSecondInp.classList.remove('complete');
  } else {
    buyCardExpCodeSecondInp.classList.remove('error');
    buyCardExpCodeSecondInp.classList.add('complete');
  };


  //валидация значения 1 инпута Expiration code
  buyCardExpCodeError.textContent = '';
  if (buyCardExpCodeFirstValue === '') {
    buyCardExpCodeFirstInp.classList.add('error');
    buyCardExpCodeError.textContent = 'Fill in the field';
    buyCardValidationResult = true;
    buyCardExpCodeFirstInp.classList.remove('complete');
  } else if (/[A-Za-zА-Яа-яЁё]/.test(buyCardExpCodeFirstValue)) {
    buyCardExpCodeFirstInp.classList.add('error');
    buyCardExpCodeError.textContent = 'Expiration code cannot contain letters';
    buyCardValidationResult = true;
    buyCardExpCodeFirstInp.classList.remove('complete');
  } else if (buyCardExpCodeFirstValue.length !== 2) {
    buyCardExpCodeFirstInp.classList.add('error');
    buyCardExpCodeError.textContent = 'Expiration code must contain 2 digits';
    buyCardValidationResult = true;
    buyCardExpCodeFirstInp.classList.remove('complete');
  } else {
    buyCardExpCodeFirstInp.classList.remove('error');
    buyCardExpCodeFirstInp.classList.add('complete');
  };


  //валидация значения 2 инпута Expiration code
  buyCardExpCodeError.textContent = '';
  if (buyCardExpCodeSecondValue === '') {
    buyCardExpCodeSecondInp.classList.add('error');
    buyCardExpCodeError.textContent = 'Fill in the field';
    buyCardValidationResult = true;
    buyCardExpCodeSecondInp.classList.remove('complete');
  } else if (/[A-Za-zА-Яа-яЁё]/.test(buyCardExpCodeSecondValue)) {
    buyCardExpCodeSecondInp.classList.add('error');
    buyCardExpCodeError.textContent = 'Expiration code cannot contain letters';
    buyCardValidationResult = true;
    buyCardExpCodeSecondInp.classList.remove('complete');
  } else if (buyCardExpCodeSecondValue.length !== 2) {
    buyCardExpCodeSecondInp.classList.add('error');
    buyCardExpCodeError.textContent = 'Expiration code must contain 2 digits';
    buyCardValidationResult = true;
    buyCardExpCodeSecondInp.classList.remove('complete');
  } else {
    buyCardExpCodeSecondInp.classList.remove('error');
    buyCardExpCodeSecondInp.classList.add('complete');
  };



  //валидация значения инпута CVC
  buyCardCVCError.textContent = '';
  if (buyCardCVCValue === '') {
    buyCardCVCInp.classList.add('error');
    buyCardCVCError.textContent = 'Fill in the field';
    buyCardValidationResult = true;
    buyCardCVCInp.classList.remove('complete');
  } else if (/[A-Za-zА-Яа-яЁё]/.test(buyCardCVCValue)) {
    buyCardCVCInp.classList.add('error');
    buyCardCVCError.textContent = 'CVC cannot contain letters';
    buyCardValidationResult = true;
    buyCardCVCInp.classList.remove('complete');
  } else if (buyCardCVCValue.length !== 3) {
    buyCardCVCInp.classList.add('error');
    buyCardCVCError.textContent = 'CVC must contain 3 digits';
    buyCardValidationResult = true;
    buyCardCVCInp.classList.remove('complete');
  } else {
    buyCardCVCInp.classList.remove('error');
    buyCardCVCInp.classList.add('complete');
  };



  //валидация значения инпута имени
  buyCardHolderError.textContent = '';
  if (buyCardHolderValue === '') {
    buyCardHolderInp.classList.add('error');
    buyCardHolderError.textContent = 'Fill in the field';
    buyCardValidationResult = true;
  } else if (/[А-Яа-я]/.test(buyCardHolderValue)) {
    buyCardHolderInp.classList.add('error');
    buyCardHolderError.textContent = 'Name must be in English';
    buyCardValidationResult = true;
  } else if (!/[A-Za-z]/.test(buyCardHolderValue)) {
    buyCardHolderInp.classList.add('error');
    buyCardHolderError.textContent = 'Name cannot contain numbers';
    buyCardValidationResult = true;
  } else {
    buyCardHolderInp.classList.remove('error');
    buyCardHolderInp.classList.add('complete');
  };


  //валидация значения инпута почтового индекса
  buyCardPostalError.textContent = '';
  if (buyCardPostalValue === '') {
    buyCardPostalInp.classList.add('error');
    buyCardPostalError.textContent = 'Fill in the field';
    buyCardValidationResult = true;
  } else if (/[A-Za-zА-Яа-яЁё]/.test(buyCardPostalValue)) {
    buyCardPostalInp.classList.add('error');
    buyCardPostalError.textContent = 'Postal code must not contain letters';
    buyCardValidationResult = true;
  } else if (buyCardPostalValue.length !== 6) {
    buyCardPostalInp.classList.add('error');
    buyCardPostalError.textContent = 'Zip code length must be 6 digits';
    buyCardValidationResult = true;
  } else {
    buyCardPostalInp.classList.remove('error');
    buyCardPostalInp.classList.add('complete');
  };



  //валидация значения инпута города
  buyCardCityError.textContent = '';
  if (buyCardCityValue === '') {
    buyCardCityInp.classList.add('error');
    buyCardCityError.textContent = 'Fill in the field';
    buyCardValidationResult = true;
  } else if (/[А-Яа-я]/.test(buyCardCityValue)) {
    buyCardCityInp.classList.add('error');
    buyCardCityError.textContent = 'City must be in English';
    buyCardValidationResult = true;
  } else if (!/[A-Za-z]/.test(buyCardCityValue)) {
    buyCardCityInp.classList.add('error');
    buyCardCityError.textContent = 'City cannot contain numbers';
    buyCardValidationResult = true;
  } else {
    buyCardCityInp.classList.remove('error');
    buyCardCityInp.classList.add('complete');
  };



  //если есть ошибка в валидации, то заново пройтись по всем значениям инпутам
  if (buyCardValidationResult === true) {

    return;

  };

  //после успешной валидации покупки абонемента

  //закрыть модалку покупки абонемента
  const buyCardModal = document.querySelector('.buy-card-modal');
  const buyCardModalOverlay = document.querySelector('.buy-card-overlay');
  const buyCardModalContent = document.querySelector('.buy-card-content');
  let buyCardOpenModal = true;

  buyCardModal.classList.remove('buy-card-modal--active');
  buyCardModalOverlay.classList.remove('buy-card-overlay--active');
  buyCardModalContent.classList.remove('buy-card-content--active');
  document.body.classList.remove('stop-scroll');
  buyCardOpenModal = false;


  //принудительно перезагрузить страницу
  location.reload();


  //сохранить в БД датчик успешной покупки абонемента
  localStorage.setItem('userSubscription', true);



  //сбросить все значения инпутов
  buyCardNumberInp.value = '';
  buyCardNumberInp.classList.remove('complete');
  buyCardExpCodeFirstInp.value = '';
  buyCardExpCodeFirstInp.classList.remove('complete');
  buyCardExpCodeSecondInp.value = '';
  buyCardExpCodeSecondInp.classList.remove('complete');
  buyCardCVCInp.value = '';
  buyCardCVCInp.classList.remove('complete');
  buyCardHolderInp.value = '';
  buyCardHolderInp.classList.remove('complete');
  buyCardPostalInp.value = '';
  buyCardPostalInp.classList.remove('complete');
  buyCardCityInp.value = '';
  buyCardCityInp.classList.remove('complete');
});




//отменить дефолтное поведение кнопки при сабмите
buyCardForm.addEventListener('submit', (e) => {

  e.preventDefault();

});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudEJ0bi5qcyIsImNvbXBvbmVudHMvYnVyZ2VyLmpzIiwiY29tcG9uZW50cy9pbmRleC5qcyIsImNvbXBvbmVudHMvbW9kYWwuanMiLCJjb21wb25lbnRzL3N3aXBlci5qcyIsImNvbXBvbmVudHMvdGFicy5qcyIsImNvbXBvbmVudHMvdXNlckFmdGVyUmVnaXN0ZXIuanMiLCJjb21wb25lbnRzL3ZhbGlkYXRpb25Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFjY291bnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYnRuJyk7XG5jb25zdCBhY2NvdW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19saXN0Jyk7XG5cbmlmIChhY2NvdW50QnRuKSB7XG5cbiAgYWNjb3VudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgYWNjb3VudExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWNjb3VudF9fbGlzdC0tYWN0aXZlJyk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvdW50X19saXN0JykgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoJy5hY2NvdW50X19saXN0JykgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWNjb3VudF9fYnRuJykpIHtcblxuICAgICAgYWNjb3VudExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3VudF9fbGlzdC0tYWN0aXZlJyk7XG4gICAgfTtcbiAgfSk7XG59O1xuXG5cblxuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJSZWdpc3RlcmVkJykgIT09ICd0cnVlJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckF1dGhvcml6ZWQnKSAhPT0gJ3RydWUnIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyUmVnaXN0ZXJlZCcpID09PSAndHJ1ZScgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJBdXRob3JpemVkJykgIT09ICd0cnVlJykge1xuXG4gIGFjY291bnRCdG4uaW5uZXJIVE1MID0gYFxuICA8c3ZnPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cImltZy9zcHJpdGUuc3ZnI2FjY291bnRcIj48L3VzZT5cbiAgPC9zdmc+XG4gIGBcbiAgYWNjb3VudExpc3QuaW5uZXJIVE1MID0gYFxuICAgIDxzdHJvbmcgY2xhc3M9XCJhY2NvdW50X19saXN0LXRleHRcIj5Qcm9maWxlPC9zdHJvbmc+XG4gICAgPGxpIGNsYXNzPVwiYWNjb3VudF9fbGlzdC1pdGVtXCI+PGJ1dHRvbiBjbGFzcz1cImFjY291bnRfX2xpc3QtYnV0dG9uIGFjY291bnRfX2xpc3QtYnV0dG9uLWxvZ2luIGJ0bi1yZXNldFwiPkxvZyBJbjwvYnV0dG9uPjwvbGk+XG4gICAgPGxpIGNsYXNzPVwiYWNjb3VudF9fbGlzdC1pdGVtXCI+PGJ1dHRvbiBjbGFzcz1cImFjY291bnRfX2xpc3QtYnV0dG9uIGFjY291bnRfX2xpc3QtYnV0dG9uLXJlZ2lzdGVyIGJ0bi1yZXNldFwiPlJlZ2lzdGVyPC9idXR0b24+PC9saT5cbiAgYFxufTtcbiIsImNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xuXG5pZiAoYnVyZ2VyKSB7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpO1xuICBjb25zdCBtZW51TGlua3MgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19saXN0LWxpbmtcIik7XG5cbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlci0tYWN0aXZlXCIpO1xuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi0tYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcInN0b3Atc2Nyb2xsXCIpO1xuXG4gIH0pO1xuXG4gICAgbWVudUxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyLS1hY3RpdmVcIik7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi0tYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzdG9wLXNjcm9sbFwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJ1cmdlclwiKSAmJiAhZS50YXJnZXQuY2xvc2VzdChcIi5uYXZfX2xpc3RcIikpIHtcblxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJidXJnZXItLWFjdGl2ZVwiKTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi0tYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3RvcC1zY3JvbGxcIik7XG4gICAgfTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09IDI3KSB7XG5cbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiYnVyZ2VyLS1hY3RpdmVcIik7XG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInN0b3Atc2Nyb2xsXCIpO1xuXG4gICAgfTtcbiAgfSk7XG59O1xuXG4iLCIvLyDQn9C70LDQstC90YvQuSDRgdC60YDQvtC70Lsg0L/QviDRj9C60L7RgNGP0LxcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIicpLmZvckVhY2gobGluayA9PiB7XG5cbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpLnN1YnN0cmluZygxKTtcblxuICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYpO1xuICAgIC8vIGNvbnN0IHRvcE9mZnNldCA9IDkwO1xuICAgIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IHNjcm9sbFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb247XG5cbiAgICB3aW5kb3cuc2Nyb2xsQnkoe1xuICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5jb25zb2xlLmxvZyhg0KfRgtC+0LHRiyDRg9C00LDQu9C40YLRjCDQtNCw0L3QvdGL0LUg0Y7Qt9C10YDQsDpcbjEuINCX0LDQvdC+0LLQviDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cbjIuINCf0YDQvtC/0LjRgdCw0YLRjCDQsiDQutC+0L3RgdC+0LvRjCBsb2NhbFN0b3JhZ2UuY2xlYXIoKSDQuCDQv9C10YDQtdC30LDQs9GA0YPQt9C40YLRjCDRgdGC0YDQsNC90LjRhtGDYCk7XG5cblxuLy8g0J7Qv9C40YHQsNC90LjQtSBQUlxuXG5jb25zb2xlLmxvZyhgXG4gICAgMS4gVGFzazogKGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsaW5nLXNjb3Blcy1zY2hvb2wvdGFza3MvYmxvYi9tYXN0ZXIvdGFza3MvbGlicmFyeS9saWJyYXJ5LXBhcnQzLm1kKVxuICAgIFxcblxuICAgIDIuIERlcGxveTogKGh0dHBzOi8vcm9sbGluZy1zY29wZXMtc2Nob29sLmdpdGh1Yi5pby9rbGVvc3Ryby1KU0ZFUFJFU0NIT09MMjAyM1EyL2xpYnJhcnkvKVxuICAgIFxcblxuICAgIDMuIERvbmUgMjEuMDguMjAyMyAvIGRlYWRsaW5lIDExLjA5LjIwMjNcbiAgICBcXG5cbiAgICA0LiBTY29yZTogMjAwIC8gMjAwXG5gKTtcbiIsImNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbi8v0LXRgdC70Lgg0L3QsCDRgdGC0YDQsNC90LjRhtC1INC10YHRgtGMINGN0LvQtdC80LXQvdGCINGBINC60LvQsNGB0YHQvtC8IG1vZGFsLCDQstGL0L/QvtC70L3QuNGC0Ywg0YHQu9C10LTRg9GO0YnQuNC5INC60L7QtDpcbmlmIChtb2RhbCkge1xuXG4gIC8v0L3QsNC50YLQuCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiywg0LrQvtGC0L7RgNGL0LUg0L7RgtGB0L3QvtGB0Y/RgtGB0Y8g0Log0LzQvtC00LDQu9C60LUg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBjb25zdCByZWdpc3Rlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsJyk7XG4gIGNvbnN0IHJlZ2lzdGVyTW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW92ZXJsYXknKTtcbiAgY29uc3QgcmVnaXN0ZXJNb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXItY29udGVudCcpO1xuXG4gIC8v0LjQvdC00LjQutCw0YLQvtGAINC+0YLQutGA0YvRgtC+0Lkg0LzQvtC00LDQu9C60Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBsZXQgcmVnaXN0ZXJPcGVuTW9kYWwgPSBmYWxzZTtcblxuICAvL9C90LDQudGC0Lgg0LLRgdC1INC60L3QvtC/0LrQuCwg0LrQvtGC0L7RgNGL0LUg0L7RgtC90L7RgdGP0YLRgdGPINC6INC80L7QtNCw0LvQutC1INGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgY29uc3QgcmVnaXN0ZXJNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9fYnRuJyk7XG4gIGNvbnN0IGFjY291bnRSZWdpc3RlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19saXN0LWJ1dHRvbi1yZWdpc3RlcicpO1xuICBjb25zdCBDYXJkUmVnaXN0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fcmlnaHQtYnRuLXJlZ2lzdGVyJyk7XG4gIGNvbnN0IHJlZ2lzdGVyTW9kYWxCdG5Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9fYnRuLWxvZ2luJyk7XG5cblxuXG4gIC8v0L3QsNC50YLQuCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiywg0LrQvtGC0L7RgNGL0LUg0L7RgtC90L7RgdGP0YLRgdGPINC6INC80L7QtNCw0LvQutC1INCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgY29uc3QgbG9nSW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1tb2RhbCcpO1xuICBjb25zdCBsb2dJbk1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1vdmVybGF5Jyk7XG4gIGNvbnN0IGxvZ0luTW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWNvbnRlbnQnKTtcblxuICAvL9C40L3QtNC40LrQsNGC0L7RgCDQvtGC0LrRgNGL0YLQvtC5INC80L7QtNCw0LvQutC4INCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgbGV0IGxvZ0luT3Blbk1vZGFsID0gZmFsc2U7XG5cbiAgLy/QvdCw0LnRgtC4INCy0YHQtSDQutC90L7Qv9C60LgsINC60L7RgtC+0YDRi9C1INC+0YLQvdC+0YHRj9GC0YHRjyDQuiDQvNC+0LTQsNC70LrQtSDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG4gIGNvbnN0IGFjY291bnRMb2dJbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19saXN0LWJ1dHRvbi1sb2dpbicpO1xuICBjb25zdCBjYXJkTG9nSW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fcmlnaHQtYnRuLWxvZ2luJyk7XG4gIGNvbnN0IGxvZ0luTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tbW9kYWxfX2J0bicpO1xuICBjb25zdCBsb2dJbk1vZGFsQnRuUmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tbW9kYWxfX2J0bi1yZWdpc3RlcicpO1xuXG5cblxuXG4gIC8v0YTRg9C90LrRhtC40Y8g0L7RgtC60YDRi9GC0LjRjyDQvNC+0LTQsNC70LrQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gIGNvbnN0IG9wZW5Nb2RhbFJlZ2lzdGVyID0gKCkgPT4ge1xuICAgIHJlZ2lzdGVyTW9kYWwuY2xhc3NMaXN0LmFkZCgncmVnaXN0ZXItbW9kYWwtLWFjdGl2ZScpO1xuICAgIHJlZ2lzdGVyTW9kYWxPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyLW92ZXJsYXktLWFjdGl2ZScpO1xuICAgIHJlZ2lzdGVyTW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyLWNvbnRlbnQtLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc3RvcC1zY3JvbGwnKTtcbiAgICByZWdpc3Rlck9wZW5Nb2RhbCA9IHRydWU7XG4gIH07XG5cbiAgLy/RhNGD0L3QutGG0LjRjyDQt9Cw0LrRgNGL0YLQuNGPINC80L7QtNCw0LvQutC4INGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgY29uc3QgY2xvc2VNb2RhbFJlZ2lzdGVyID0gKCkgPT4ge1xuICAgIHJlZ2lzdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgncmVnaXN0ZXItbW9kYWwtLWFjdGl2ZScpO1xuICAgIHJlZ2lzdGVyTW9kYWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZ2lzdGVyLW92ZXJsYXktLWFjdGl2ZScpO1xuICAgIHJlZ2lzdGVyTW9kYWxDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZ2lzdGVyLWNvbnRlbnQtLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKTtcbiAgICByZWdpc3Rlck9wZW5Nb2RhbCA9IGZhbHNlO1xuICAgIHJlZ2lzdGVyTmFtZUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgcmVnaXN0ZXJOYW1lSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJTdXJOYW1lRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICByZWdpc3RlclN1ck5hbWVJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICByZWdpc3RlckVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICByZWdpc3RlckVtYWlsSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJQYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgcmVnaXN0ZXJQYXNzd29yZElucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICB9O1xuXG5cblxuICAvL9GE0YPQvdC60YbQuNGPINC+0YLQutGA0YvRgtC40Y8g0LzQvtC00LDQu9C60Lgg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICBjb25zdCBvcGVuTW9kYWxMb2dJbiA9ICgpID0+IHtcbiAgICBsb2dJbk1vZGFsLmNsYXNzTGlzdC5hZGQoJ2xvZ2luLW1vZGFsLS1hY3RpdmUnKTtcbiAgICBsb2dJbk1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdsb2dpbi1vdmVybGF5LS1hY3RpdmUnKTtcbiAgICBsb2dJbk1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdsb2dpbi1jb250ZW50LS1hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3N0b3Atc2Nyb2xsJyk7XG4gICAgbG9nSW5PcGVuTW9kYWwgPSB0cnVlO1xuICB9O1xuXG4gIC8v0YTRg9C90LrRhtC40Y8g0LfQsNC60YDRi9GC0LjRjyDQvNC+0LTQsNC70LrQuCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG4gIGNvbnN0IGNsb3NlTW9kYWxMb2dJbiA9ICgpID0+IHtcbiAgICBsb2dJbk1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2xvZ2luLW1vZGFsLS1hY3RpdmUnKTtcbiAgICBsb2dJbk1vZGFsT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdsb2dpbi1vdmVybGF5LS1hY3RpdmUnKTtcbiAgICBsb2dJbk1vZGFsQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2dpbi1jb250ZW50LS1hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0b3Atc2Nyb2xsJyk7XG4gICAgbG9nSW5PcGVuTW9kYWwgPSBmYWxzZTtcbiAgICBhdXRob3JpemVkTG9naW5FcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGF1dGhvcml6ZWRMb2dpbklucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIGF1dGhvcml6ZWRQYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgYXV0aG9yaXplZFBhc3N3b3JkSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gIH07XG5cblxuXG4gIC8vINC10YHQu9C4INGO0LfQtdGAINC90LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9INC40LvQuCDQvdC1INCw0LLRgtC+0YDQuNC30L7QstCw0L0sINGC0L4g0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJSZWdpc3RlcmVkJykgIT09ICd0cnVlJyB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckF1dGhvcml6ZWQnKSAhPT0gJ3RydWUnKSB7XG5cbiAgICAvL9C/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDIFJlZ2lzdGVyINCyINC00YDQvtC/LdC70LjRgdGC0LUg0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICAgIGFjY291bnRSZWdpc3RlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBvcGVuTW9kYWxSZWdpc3RlcigpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy/Qv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRgyBTaWduIFVwINCyINGB0LXQutGG0LjQuCBjYXJkINC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgICBDYXJkUmVnaXN0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgb3Blbk1vZGFsUmVnaXN0ZXIoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBhY2NvdW50TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvdW50X19saXN0LS1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8v0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutGA0LXRgdGC0LjQuiDQsiDQvNC+0LTQsNC70LrQtSDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC30LDQutGA0YvRgtGMINC10LVcbiAgICByZWdpc3Rlck1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbFJlZ2lzdGVyKTtcblxuICAgIC8v0L/RgNC4INC+0YLQutGA0YvRgtC+0Lkg0LzQvtC00LDQu9C60LUg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQuCDQv9GA0Lgg0LvRjtCx0L7QvCDQutC70LjQutC1INCy0L3QtSDQvtCx0LvQsNGB0YLQuCDQt9Cw0LrRgNGL0YLRjCDQvNC+0LTQsNC70LrRgyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKHJlZ2lzdGVyT3Blbk1vZGFsID09PSB0cnVlICYmICFlLnRhcmdldC5jbG9zZXN0KCcubW9kYWxfX2NvbnRlbnQnKSkge1xuICAgICAgICBjbG9zZU1vZGFsUmVnaXN0ZXIoKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvL9C/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDIExvZ2luINCyINC80L7QtNCw0LvQutC1INGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0LfQsNC60YDRi9GC0Ywg0LXQtSDQuCDQvtGC0LrRgNGL0YLRjCDQvNC+0LTQsNC70LrRgyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG4gICAgcmVnaXN0ZXJNb2RhbEJ0bkxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNsb3NlTW9kYWxSZWdpc3RlcigpO1xuICAgICAgb3Blbk1vZGFsTG9nSW4oKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH07XG5cblxuXG4gIC8v0LXRgdC70Lgg0Y7Qt9C10YAg0L3QtSDQsNCy0YLQvtGA0LjQt9C+0LLQsNC9LCDRgtC+INC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyQXV0aG9yaXplZCcpICE9PSAndHJ1ZScpIHtcblxuICAgIC8v0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMgTG9nIEluINCyINC00YDQvtC/LdC70LjRgdGC0LUg0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICAgIGFjY291bnRMb2dJbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBvcGVuTW9kYWxMb2dJbigpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy/Qv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRgyBMb2cgSW4g0LIg0YHQtdC60YbQuNC4IGNhcmQg0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICAgIGNhcmRMb2dJbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBvcGVuTW9kYWxMb2dJbigpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy/Qv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60YDQtdGB0YLQuNC6INCyINC80L7QtNCw0LvQutC1INGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0LfQsNC60YDRi9GC0Ywg0LXQtVxuICAgIGxvZ0luTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsTG9nSW4pO1xuXG4gICAgLy/Qv9GA0Lgg0L7RgtC60YDRi9GC0L7QuSDQvNC+0LTQsNC70LrQtSDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4INC4INC/0YDQuCDQu9GO0LHQvtC8INC60LvQuNC60LUg0LLQvdC1INC+0LHQu9Cw0YHRgtC4INC30LDQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAobG9nSW5PcGVuTW9kYWwgPT09IHRydWUgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY29udGVudCcpKSB7XG4gICAgICAgIGNsb3NlTW9kYWxMb2dJbigpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIC8v0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMgUmVnaXN0ZXIg0LIg0LzQvtC00LDQu9C60LUg0LDQstGC0L7RgNC40LfQsNGG0LjQuCDQt9Cw0LrRgNGL0YLRjCDQtdC1INC4INC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgICBsb2dJbk1vZGFsQnRuUmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY2xvc2VNb2RhbExvZ0luKCk7XG4gICAgICBvcGVuTW9kYWxSZWdpc3RlcigpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgfTtcblxuXG5cbiAgLy/QtdGB0LvQuCDRjtC30LXRgCDQvdC1INCw0LLRgtC+0YDQuNC30LjRgNC+0LLQsNC9LCDRgtC+INC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0L/RgNC4INC60LvQuNC60LUg0L3QsCDQu9GO0LHRg9GOINC60L3QvtC/0LrRgyBidXkg0LIg0YHQtdC60YbQuNC4IGZhdm9yaXRlc1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJBdXRob3JpemVkJykgIT09ICd0cnVlJykge1xuXG4gICAgLy/QvdCw0LnRgtC4INCy0YHQtSDQutC90L7Qv9C60Lgg0LrQsNGA0YLQvtGH0LXQuiDQutC90LjQs1xuICAgIGNvbnN0IGZhdm9yaXRlc0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmF2b3JpdGVzLWNhcmRfX2J0bicpO1xuXG4gICAgLy/Qv9GA0L7QudGC0LjRgdGMINC/0L4g0LLRgdC10Lwg0LrQvdC+0L/QutCw0LxcbiAgICBmYXZvcml0ZXNCdG5zLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG5cbiAgICAgIC8v0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBvcGVuTW9kYWxMb2dJbigpO1xuXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuXG4gIC8v0L3QsNC50YLQuCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiywg0LrQvtGC0L7RgNGL0LUg0L7RgtC90L7RgdGP0YLRgdGPINC6INC80L7QtNCw0LvQutC1INC/0L7QutGD0L/QutC4INCw0LHQvtC90LXQvNC10L3RgtCwXG4gIGNvbnN0IGJ1eUNhcmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXktY2FyZC1tb2RhbCcpO1xuICBjb25zdCBidXlDYXJkTW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1eS1jYXJkLW92ZXJsYXknKTtcbiAgY29uc3QgYnV5Q2FyZE1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXktY2FyZC1jb250ZW50Jyk7XG5cbiAgLy/QvdCw0LnRgtC4INCy0YHQtSDQutC90L7Qv9C60LgsINC60L7RgtC+0YDRi9C1INC+0YLQvdC+0YHRj9GC0YHRjyDQuiDQvNC+0LTQsNC70LrQtSDQv9C+0LrRg9C/0LrQuCDQsNCx0L7QvdC10LzQtdC90YLQsFxuICBjb25zdCBidXlDYXJkTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV5LWNhcmQtbW9kYWxfX2J0bicpO1xuICBjb25zdCBidXlCb29rQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXRlcy1jYXJkX19idG4nKTtcblxuICAvL9C40L3QtNC40LrQsNGC0L7RgCDQvtGC0LrRgNGL0YLQvtC5INC80L7QtNCw0LvQutC4INC/0L7QutGD0L/QutC4INCw0LHQvtC90LXQvNC10L3RgtCwXG4gIGxldCBidXlDYXJkT3Blbk1vZGFsID0gZmFsc2U7XG5cbiAgICAvL9GE0YPQvdC60YbQuNGPINC+0YLQutGA0YvRgtC40Y8g0LzQvtC00LDQu9C60Lgg0L/QvtC60YPQv9C60Lgg0LDQsdC+0L3QtdC80LXQvdGC0LBcbiAgY29uc3Qgb3Blbk1vZGFsQnV5Q2FyZCA9ICgpID0+IHtcbiAgICBidXlDYXJkTW9kYWwuY2xhc3NMaXN0LmFkZCgnYnV5LWNhcmQtbW9kYWwtLWFjdGl2ZScpO1xuICAgIGJ1eUNhcmRNb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYnV5LWNhcmQtb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgYnV5Q2FyZE1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdidXktY2FyZC1jb250ZW50LS1hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3N0b3Atc2Nyb2xsJyk7XG4gICAgYnV5Q2FyZE9wZW5Nb2RhbCA9IHRydWU7XG4gIH07XG5cbiAgLy/RhNGD0L3QutGG0LjRjyDQt9Cw0LrRgNGL0YLQuNGPINC80L7QtNCw0LvQutC4INC/0L7QutGD0L/QutC4INCw0LHQvtC90LXQvNC10L3RgtCwXG4gIGNvbnN0IGNsb3NlTW9kYWxCdXlDYXJkID0gKCkgPT4ge1xuICAgIGJ1eUNhcmRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdidXktY2FyZC1tb2RhbC0tYWN0aXZlJyk7XG4gICAgYnV5Q2FyZE1vZGFsT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdidXktY2FyZC1vdmVybGF5LS1hY3RpdmUnKTtcbiAgICBidXlDYXJkTW9kYWxDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2J1eS1jYXJkLWNvbnRlbnQtLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKTtcbiAgICBidXlDYXJkT3Blbk1vZGFsID0gZmFsc2U7XG4gIH07XG4gIC8v0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutGA0LXRgdGC0LjQuiDQsiDQvNC+0LTQsNC70LrQtSDQv9C+0LrRg9C/0LrQuCDQsNCx0L7QvdC10LzQtdC90YLQsCDQt9Cw0LrRgNGL0YLRjCDQtdC1XG4gIGJ1eUNhcmRNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWxCdXlDYXJkKTtcblxuICAvL9C/0YDQuCDQvtGC0LrRgNGL0YLQvtC5INC80L7QtNCw0LvQutC1INC/0L7QutGD0L/QutC4INCw0LHQvtC90LXQvNC10L3RgtCwINC4INC/0YDQuCDQu9GO0LHQvtC8INC60LvQuNC60LUg0LLQvdC1INC+0LHQu9Cw0YHRgtC4INC30LDQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINC/0L7QutGD0L/QutC4INCw0LHQvtC90LXQvNC10L3RgtCwXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoYnV5Q2FyZE9wZW5Nb2RhbCA9PT0gdHJ1ZSAmJiAhZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jb250ZW50JykpIHtcbiAgICAgIGNsb3NlTW9kYWxCdXlDYXJkKCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy/Qv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC70Y7QsdGD0Y4g0LrQvdC+0L/QutGDIGJ1eSDQsiDRgdC10LrRhtC40LggZmF2b3JpdGVzINC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINC/0L7QutGD0L/QutC4INCw0LHQvtC90LXQvNC10L3RgtCwXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckF1dGhvcml6ZWQnKSA9PT0gJ3RydWUnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyU3Vic2NyaXB0aW9uJykgPT09ICdmYWxzZScpIHtcbiAgICBidXlCb29rQnRuLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb3Blbk1vZGFsQnV5Q2FyZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclN1YnNjcmlwdGlvbicpID09PSAndHJ1ZScpIHtcbiAgICBjb25zdCBvd25Cb29rc0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWJveCcpO1xuXG4gICAgb3duQm9va3NCdG5zLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYnRuLWJveC0tZGlzYWJsZWQnKTtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJidG4tcmVzZXQgZmF2b3JpdGVzLWNhcmRfX2J0biBmYXZvcml0ZXMtY2FyZF9fYnRuLS1kaXNhYmxlZFwiPk93bjwvYnV0dG9uPmBcbiAgICAgICAgbGV0IGNvdW50ZXJCb29rc093biA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyT3duQm9va3MnKTtcbiAgICAgICAgY291bnRlckJvb2tzT3duKytcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJPd25Cb29rcycsIGNvdW50ZXJCb29rc093bik7XG4gICAgICAgIGNvbnN0IHByb2ZpbGVCb29rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLW1vZGFsX19saXN0LWNvdW50LWJvb2tzJyk7XG4gICAgICAgIHByb2ZpbGVCb29rcy50ZXh0Q29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyT3duQm9va3MnKTtcbiAgICAgICAgY29uc3QgY2FyZEJvb2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tbGlzdC1jb3VudC1ib29rcycpO1xuICAgICAgICBjYXJkQm9va3MudGV4dENvbnRlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck93bkJvb2tzJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuaWYobG9jYXRpb24ucmVsb2FkKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyT3duQm9va3MnLCAwKTtcbn1cbiIsImNvbnN0IHN3aXBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyJyk7XG5cbmlmKHN3aXBlcnMpIHtcbiAgbmV3IFN3aXBlciAoJy5zd2lwZXInLCB7XG5cbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDMwMDAsXG4gICAgfSxcblxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAxOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICBzcGFjZUJldHdlZW46IDI1LFxuICAgICAgfSxcbiAgICAgIDc2OToge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNSxcbiAgICAgIH0sXG4gICAgICAxMjcwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICBzcGFjZUJldHdlZW46IDI1LFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0LWFib3V0JyxcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYtYWJvdXQnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG5cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogJy5hYm91dF9fcGFnaW5hdGlvbicsXG4gICAgICB0eXBlOiAnYnVsbGV0cycsXG4gICAgICBidWxsZXRBY3RpdmVDbGFzczogJ2Fib3V0X19wYWdpbmF0aW9uLWJ1bGxldC0tYWN0aXZlJyxcbiAgICAgIGJ1bGxldENsYXNzOiBcdCdhYm91dF9fcGFnaW5hdGlvbi1idWxsZXQnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xufTtcbiIsImNvbnN0IGZhdm9yaXRlc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZXMnKTtcblxuaWYgKGZhdm9yaXRlc1RhYikge1xuICBsZXQgdGFic0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZXNfX2xhYmVsJyk7XG4gIGxldCB0YWJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXRlc19fbGlzdC1pdGVtJyk7XG5cbiAgdGFic0J0bi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCBwYXRoID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGF0aDtcblxuICAgICAgdGFic0J0bi5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Zhdm9yaXRlc19fbGFiZWwtLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGVzX19sYWJlbC0tYWN0aXZlJyk7XG5cbiAgICAgIHRhYkl0ZW0uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Zhdm9yaXRlc19fbGlzdC1pdGVtLS1hY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlc19fbGlzdC1pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgaXRlbS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGl0ZW0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgfSwgMCk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtdGFyZ2V0XTpub3QoW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXSlgKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGl0ZW0uc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zhdm9yaXRlc19fbGlzdC1pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgICBpdGVtLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIH0sIDApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiLy/QtdGB0LvQuCDRjtC30LXRgCDQvdC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvSwg0YLQviDQutC90L7Qv9C60LAgQ2hlY2sgdGhlIGNhcmQg0L3QuCDQuiDRh9C10LzRgyDQvdC1INC/0YDQuNCy0LXQtNC10YJcblxuLy/QvdCw0LnRgtC4INGE0L7RgNC80YMg0Lgg0LrQvdC+0L/QutGDIENoZWNrIHRoZSBjYXJkXG5jb25zdCBjaGVja0NhcmRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtZm9ybScpO1xuY29uc3QgY2hlY2tDYXJkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2Zvcm0tYnRuJyk7XG5cblxuLy/QtdGB0LvQuCDRjtC30LXRgCDQndCVINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvVxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyUmVnaXN0ZXJlZCcpICE9PSAndHJ1ZScpIHtcblxuICBjaGVja0NhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgLy/QvtGB0YLQsNC90L7QstC40YLRjCDRgNCw0YHQv9GA0L7RgdGC0YDQsNC90LXQvdC40LUg0L/QvtCy0LXQtNC10L3QuNGPINC60L3QvtC/0LrQuCDRhNC+0YDQvNGLXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICB9KTtcblxuICAvL9C+0YLQvNC10L3QuNGC0Ywg0LTQtdGE0L7Qu9GC0L3QvtC1INC/0L7QstC10LTQtdC90LjQtSDQutC90L7Qv9C60Lgg0L/RgNC4INGB0LDQsdC80LjRgtC1XG4gIGNoZWNrQ2FyZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICB9KTtcbn07XG5cblxuXG5cblxuLy/Qv9C+0YHQu9C1INGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0Y7Qt9C10YAg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9INCYINCw0LLRgtC+0YDQuNC30L7QstCw0L1cblxuLy/QtdGB0LvQuCDRjtC30LXRgCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L0g0Jgg0LDQstGC0L7RgNC40LfQvtCy0LDQvVxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyUmVnaXN0ZXJlZCcpID09PSAndHJ1ZScgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJBdXRob3JpemVkJykgPT09ICd0cnVlJykge1xuXG4gIC8v0L/QvtC70YPRh9C40YLRjCDQuNC90LjRhtC40LDQu9GLINGO0LfQtdGA0LBcbiAgbGV0IHVzZXJOYW1lSW5pdGlhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyTmFtZScpO1xuICBsZXQgdXNlclN1ck5hbWVJbml0aWFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJTdXJOYW1lJyk7XG4gIGxldCB1c2VySW5pdGlhbHMgPSBgJHt1c2VyTmFtZUluaXRpYWxbMF19JHt1c2VyU3VyTmFtZUluaXRpYWxbMF19YDtcblxuICBsZXQgY2FyZEJveEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fY29udGVudCcpO1xuXG4gIGNhcmRCb3hJbmZvLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cImNhcmRfX2xlZnQgZmxleFwiPlxuICA8aDMgY2xhc3M9XCJjYXJkX19sZWZ0LXN1YnRpdGxlXCI+WW91ciBMaWJyYXJ5IGNhcmQ8L2gzPlxuICA8ZGl2IGNsYXNzPVwiY2FyZF9fbGVmdC1ib3R0b21cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fbGVmdC1pbmZvXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImNhcmRfX25hbWVcIj5Ccm9va2x5biBQdWJsaWMgTGlicmFyeTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPSBcImNhcmRfX3VzZXItbmFtZVwiPiR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJOYW1lJyl9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJTdXJOYW1lJyl9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9IFwiY2FyZF9fdXNlci1udW1iZXJcIj4ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkTnVtYmVyJyl9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDx1bCBjbGFzcz1cImNhcmRfX2xlZnQtaW5mby1saXN0IGxpc3QtcmVzZXQgaW5mby1saXN0XCI+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvLWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWxpc3QtbmFtZVwiPlZpc2l0czwvc3Bhbj5cbiAgICAgICAgPHN2Zz5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCJpbWcvc3ByaXRlLnN2ZyN2aXNpdHNcIj48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1saXN0LWNvdW50IGluZm8tbGlzdC1jb3VudC12aXNpdHNcIj4ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVmlzaXRzJyl9PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImluZm8tbGlzdF9faXRlbVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tbGlzdC1uYW1lXCI+Qm9udXNlczwvc3Bhbj5cbiAgICAgICAgPHN2Zz5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCJpbWcvc3ByaXRlLnN2ZyNib251c2VzXCI+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tbGlzdC1jb3VudFwiPjEyNDA8L3NwYW4+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mby1saXN0X19pdGVtXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1saXN0LW5hbWVcIj5Cb29rczwvc3Bhbj5cbiAgICAgICAgPHN2Zz5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCJpbWcvc3ByaXRlLnN2ZyNib29rc1wiPjwvdXNlPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWxpc3QtY291bnQgaW5mby1saXN0LWNvdW50LWJvb2tzXCI+JHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck93bkJvb2tzJyl9PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImNhcmRfX3JpZ2h0IGZsZXhcIj5cbiAgPGgzIGNsYXNzPVwiY2FyZF9fcmlnaHQtc3VidGl0bGVcIj5WaXNpdCB5b3VyIHByb2ZpbGU8L2gzPlxuICA8cCBjbGFzcz1cImNhcmRfX3JpZ2h0LWRlc2NyXCI+V2l0aCBhIGRpZ2l0YWwgbGlicmFyeSBjYXJkIHlvdSBnZXQgZnJlZSBhY2Nlc3MgdG8gdGhlIExpYnJhcnnigJlzIHdpZGUgYXJyYXkgb2YgZGlnaXRhbCByZXNvdXJjZXMgaW5jbHVkaW5nIGUtYm9va3MsIGRhdGFiYXNlcywgZWR1Y2F0aW9uYWwgcmVzb3VyY2VzLCBhbmQgbW9yZS48L3A+XG4gIDxkaXYgY2xhc3M9XCJjYXJkX19yaWdodC1ib3R0b20gZmxleFwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4tcmVzZXQgY2FyZF9fcmlnaHQtYnRuIGNhcmRfX3JpZ2h0LWJ0bi1wcm9maWxlXCI+UHJvZmlsZTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuYFxuXG5cblxuICAvL9C10YHQu9C4INGO0LfQtdGA0L3QtdC50Lwg0LXRgdGC0Ywg0LIg0JHQlCwg0YLQviDQstC80LXRgdGC0L4g0YHQstCzINC40LrQvtC90LrQuCDQsiDQutC90L7Qv9C60LUg0Y7Qt9C10YDQsCDQstGB0YLQsNCy0LjRgtGMINC10LPQviDQuNC90LjRhtC40LDQu9GLXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKSkge1xuXG4gICAgLy/Qt9Cw0LzQtdC90LjRgtGMINGB0L7QtNC10YDQttC40LzRi9C5INC60L7QtCDQutC90L7Qv9C60Lgg0Y7Qt9C10YDQsCDQvdCwINC10LPQviDQuNC90LjRhtC40LDQu9GLXG4gICAgYWNjb3VudEJ0bi5pbm5lckhUTUwgPSB1c2VySW5pdGlhbHM7XG4gICAgYWNjb3VudEJ0bi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJOYW1lJyl9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJTdXJOYW1lJyl9YClcbiAgICBhY2NvdW50QnRuLmNsYXNzTGlzdC5hZGQoJ2FjY291bnRfX2J0bi1hZnRlci1yZWdpc3RlcicpO1xuXG4gICAgLy/Qt9Cw0LzQtdC90LjRgtGMINGB0L7QtNC10YDQttC40LzRi9C5INC60L7QtCDQtNGA0L7Qvy3Qu9C40YHRgtCwINC90LAg0LTRgNC+0L8t0LvQuNGB0YIg0L/QvtGB0LvQtSDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG4gICAgYWNjb3VudExpc3QuY2xhc3NMaXN0LmFkZCgnYWNjb3VudF9fbGlzdC1sb2dpbicpO1xuICAgIGFjY291bnRMaXN0LmlubmVySFRNTCA9IGBcbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cImFjY291bnRfX2xpc3QtdGV4dFwiPiR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmROdW1iZXInKX08L3N0cm9uZz5cbiAgICAgICAgPGxpIGNsYXNzPVwiYWNjb3VudF9fbGlzdC1pdGVtXCI+PGJ1dHRvbiBjbGFzcz1cImFjY291bnRfX2xpc3QtYnV0dG9uIGFjY291bnRfX2xpc3QtYnV0dG9uLW15LXByb2ZpbGUgYnRuLXJlc2V0XCI+TXkgcHJvZmlsZTwvYnV0dG9uPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImFjY291bnRfX2xpc3QtaXRlbVwiPjxidXR0b24gY2xhc3M9XCJhY2NvdW50X19saXN0LWJ1dHRvbiBhY2NvdW50X19saXN0LWJ1dHRvbi1sb2dvdXQgYnRuLXJlc2V0XCI+TG9nIE91dDwvYnV0dG9uPjwvbGk+XG4gICAgICBgXG4gIH07XG59O1xuXG5cblxuLy/QstGL0YXQvtC0INC40Lcg0L/RgNC+0YTQuNC70Y9cblxuLy/Qv9C+0LvRg9GH0LjRgtGMINC60L3QvtC/0LrRgyDQstGL0YXQvtC00LAg0LjQtyDQv9GA0L7RhNC40LvRj1xuY29uc3QgbG9nT3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2xpc3QtYnV0dG9uLWxvZ291dCcpO1xuXG4vL9C10YHQu9C4INC10YHRgtGMINC60L3QvtC/0LrQsCDQstGL0YXQvtC00LAg0LjQtyDQv9GA0L7RhNC40LvRjywg0YLQviDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC90LXQtSDRg9C00LDQu9C40YLRjCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNGOINGO0LfQtdGA0LAg0LjQtyDQv9GA0L7RhNC40LvRjyDQuCDQv9C10YDQtdC30LDQs9GA0YPQt9C40YLRjCDRgdGC0YDQsNC90LjRhtGDLCDRgtC10Lwg0YHQsNC80YvQvCDRg9Cx0YDQsNGC0Ywg0LDQstGC0L7RgNC40LfQsNGG0LjRjiDRgSDRjtC30LXRgNCwXG5pZiAobG9nT3V0QnRuKSB7XG5cbiAgbG9nT3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyQXV0aG9yaXplZCcpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuXG4gIH0pO1xufTtcblxuXG5cbi8v0LXRgdC70Lgg0Y7Qt9C10YAg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9INC4INCw0LLRgtC+0YDQuNC30L7QstCw0L0sINGC0L4g0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0L/RgNC+0YTQuNC70Y9cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclJlZ2lzdGVyZWQnKSA9PT0gJ3RydWUnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyQXV0aG9yaXplZCcpID09PSAndHJ1ZScpIHtcblxuICAvL9C90LDQudGC0Lgg0LLRgdC1INGN0LvQtdC80LXQvdGC0YssINC60L7RgtC+0YDRi9C1INC+0YLQvdC+0YHRj9GC0YHRjyDQuiDQvNC+0LTQsNC70LrQtSDQv9GA0L7RhNC40LvRj1xuICBjb25zdCBwcm9maWxlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1tb2RhbCcpO1xuICBjb25zdCBwcm9maWxlTW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtb3ZlcmxheScpO1xuICBjb25zdCBwcm9maWxlTW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtY29udGVudCcpO1xuXG4gIC8v0LjQvdC00LjQutCw0YLQvtGAINC+0YLQutGA0YvRgtC+0Lkg0LzQvtC00LDQu9C60Lgg0L/RgNC+0YTQuNC70Y9cbiAgbGV0IHByb2ZpbGVPcGVuTW9kYWwgPSBmYWxzZTtcblxuICAvL9GE0YPQvdC60YbQuNGPINC+0YLQutGA0YvRgtC40Y8g0LzQvtC00LDQu9C60Lgg0L/RgNC+0YTQuNC70Y9cbiAgY29uc3Qgb3Blbk1vZGFsUHJvZmlsZSA9ICgpID0+IHtcbiAgICBwcm9maWxlTW9kYWwuY2xhc3NMaXN0LmFkZCgncHJvZmlsZS1tb2RhbC0tYWN0aXZlJyk7XG4gICAgcHJvZmlsZU1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdwcm9maWxlLW92ZXJsYXktLWFjdGl2ZScpO1xuICAgIHByb2ZpbGVNb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHJvZmlsZS1jb250ZW50LS1hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3N0b3Atc2Nyb2xsJyk7XG4gICAgcHJvZmlsZU9wZW5Nb2RhbCA9IHRydWU7XG4gIH07XG5cbiAgLy/RhNGD0L3QutGG0LjRjyDQt9Cw0LrRgNGL0YLQuNGPINC80L7QtNCw0LvQutC4INC/0YDQvtGE0LjQu9GPXG4gIGNvbnN0IGNsb3NlTW9kYWxQcm9maWxlID0gKCkgPT4ge1xuICAgIHByb2ZpbGVNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9maWxlLW1vZGFsLS1hY3RpdmUnKTtcbiAgICBwcm9maWxlTW9kYWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2ZpbGUtb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgcHJvZmlsZU1vZGFsQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9maWxlLWNvbnRlbnQtLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKTtcbiAgICBwcm9maWxlT3Blbk1vZGFsID0gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYWNjb3VudFByb2ZpbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fbGlzdC1idXR0b24tbXktcHJvZmlsZScpO1xuICBjb25zdCBjYXJkUHJvZmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19yaWdodC1idG4tcHJvZmlsZScpO1xuICBjb25zdCBwcm9maWxlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1tb2RhbF9fYnRuJyk7XG4gIC8v0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMgTXkgcHJvZmlsZSDQsiDQtNGA0L7Qvy3Qu9C40YHRgtC1INC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINC/0YDQvtGE0LjQu9GPXG4gIGFjY291bnRQcm9maWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBvcGVuTW9kYWxQcm9maWxlKCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBhY2NvdW50TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvdW50X19saXN0LS1hY3RpdmUnKTtcbiAgfSk7XG5cblxuICAvL9C/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDIFByb2ZpbGUg0LIg0YHQtdC60YbQuNC4IGNhcmQg0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0L/RgNC+0YTQuNC70Y9cbiAgY2FyZFByb2ZpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIG9wZW5Nb2RhbFByb2ZpbGUoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICB9KTtcblxuICAvL9C/0YDQuCDQutC70LjQutC1INC90LAg0LrRgNC10YHRgtC40Log0LIg0LzQvtC00LDQu9C60LUg0L/RgNC+0YTQuNC70Y8g0LfQsNC60YDRi9GC0Ywg0LXQtVxuICBwcm9maWxlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsUHJvZmlsZSk7XG5cbiAgLy/Qv9GA0Lgg0L7RgtC60YDRi9GC0L7QuSDQvNC+0LTQsNC70LrQtSDQv9GA0L7RhNC40LvRjyDQuCDQv9GA0Lgg0LvRjtCx0L7QvCDQutC70LjQutC1INCy0L3QtSDQvtCx0LvQsNGB0YLQuCDQt9Cw0LrRgNGL0YLRjCDQvNC+0LTQsNC70LrRgyDQv9GA0L7RhNC40LvRj1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKHByb2ZpbGVPcGVuTW9kYWwgPT09IHRydWUgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY29udGVudCcpKSB7XG4gICAgICBjbG9zZU1vZGFsUHJvZmlsZSgpO1xuICAgIH07XG4gIH0pO1xuXG5cbiAgbGV0IHVzZXJOYW1lSW5pdGlhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyTmFtZScpO1xuICBsZXQgdXNlclN1ck5hbWVJbml0aWFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJTdXJOYW1lJyk7XG4gIGxldCB1c2VySW5pdGlhbHMgPSBgJHt1c2VyTmFtZUluaXRpYWxbMF19JHt1c2VyU3VyTmFtZUluaXRpYWxbMF19YDtcblxuICBjb25zdCBwcm9maWxlSW5pdGlhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1tb2RhbF9faW5pdGlhbHMnKTtcbiAgcHJvZmlsZUluaXRpYWxzLnRleHRDb250ZW50ID0gdXNlckluaXRpYWxzO1xuXG4gIGNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtbW9kYWxfX25hbWUnKTtcbiAgcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKX0gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclN1ck5hbWUnKX1gO1xuXG4gIGNvbnN0IHByb2ZpbGVWaXNpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1tb2RhbF9fbGlzdC1jb3VudC12aXNpdHMnKTtcbiAgcHJvZmlsZVZpc2l0cy50ZXh0Q29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVmlzaXRzJyk7XG5cbiAgY29uc3QgcHJvZmlsZUNhcmROdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1tb2RhbF9fY2FyZC1udW1iZXItY29weScpO1xuICBwcm9maWxlQ2FyZE51bWJlci52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkTnVtYmVyJyk7XG5cbiAgcHJvZmlsZUNhcmROdW1iZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IGNhcmROdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1tb2RhbF9fY2FyZC1udW1iZXItY29weScpO1xuICAgIGNhcmROdW1iZXIuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICB9KVxufVxuIiwiLy8g0LLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC80Ysg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0YTQvtGA0LzRgyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG5jb25zdCByZWdpc3RlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItZm9ybScpO1xuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0LLRgdC1INC40L3Qv9GD0YLRiyDQsiDRhNC+0YDQvNC1INGA0LXQs9C40YHRgtGA0LDRhtC40LhcbmNvbnN0IHJlZ2lzdGVyTmFtZUlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9faW5wdXQtbmFtZScpO1xuY29uc3QgcmVnaXN0ZXJTdXJOYW1lSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19pbnB1dC1zdXJuYW1lJyk7XG5jb25zdCByZWdpc3RlckVtYWlsSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19pbnB1dC1lbWFpbCcpO1xuY29uc3QgcmVnaXN0ZXJQYXNzd29yZElucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9faW5wdXQtcGFzc3dvcmQnKTtcblxuLy/Qv9C+0LvRg9GH0LjRgtGMINC/0L7Qu9GPINC00LvRjyDQstGL0LLQvtC00LAg0L7RiNC40LHQvtC6INCyINC40L3Qv9GD0YLQsNGFXG5jb25zdCByZWdpc3Rlck5hbWVFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9fZXJyb3ItdGV4dC1uYW1lJyk7XG5jb25zdCByZWdpc3RlclN1ck5hbWVFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9fZXJyb3ItdGV4dC1zdXJuYW1lJyk7XG5jb25zdCByZWdpc3RlckVtYWlsRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXItbW9kYWxfX2Vycm9yLXRleHQtZW1haWwnKTtcbmNvbnN0IHJlZ2lzdGVyUGFzc3dvcmRFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9fZXJyb3ItdGV4dC1wYXNzd29yZCcpO1xuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0LrQvdC+0L/QutGDINC00LvRjyDRgdCw0LHQvNC40YLQsCDRhNC+0YDQvNGLINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbmNvbnN0IHJlZ2lzdGVyRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9fYnRuLXN1Ym1pdCcpO1xuXG5jb25zdCB1cFVzZXJWaXNpdHMgPSAodXNlclZpc2l0cykgPT4ge1xuICB1c2VyVmlzaXRzKytcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJWaXNpdHMnLCB1c2VyVmlzaXRzKTtcbn07XG5cblxuXG4vL9C+0LHRgNCw0LHQvtGC0LrQsCDQutC70LjQutCwINC/0L4g0LrQvdC+0L/QutC1INGB0LDQsdC80LjRgtCwINGE0L7RgNC80Ysg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxucmVnaXN0ZXJGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAvL9C+0YHRgtCw0L3QvtCy0LjRgtGMINGA0LDRgdC/0YDQvtGB0YLRgNCw0L3QtdC90LjQtSDQv9C+0LLQtdC00LXQvdC40Y8g0LrQvdC+0L/QutC4INGE0L7RgNC80YtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAvL9C30LDQv9GA0LXRgtC40YLRjCDRgdC60YDQvtC70Lsg0YHRgtGA0LDQvdC40YbRiyDQv9GA0Lgg0LfQsNC/0L7Qu9C90LXQvdC40Lgg0YTQvtGA0LzRiyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc3RvcC1zY3JvbGwnKTtcblxuICAvL9C/0L7Qu9GD0YfQuNGC0Ywg0LLRgdC1INC30L3QsNGH0LXQvdC40Y8g0LIg0LjQvdC/0YPRgtCw0YVcbiAgbGV0IHJlZ2lzdGVyTmFtZVZhbHVlID0gcmVnaXN0ZXJOYW1lSW5wLnZhbHVlLnNwbGl0KC9cXHMrLykuam9pbignJyk7IC8vINGD0LHQuNGA0LDRjtGC0YHRjyDQv9GA0L7QsdC10LvRiyDQstC90YPRgtGA0Lgg0YHRgtGA0L7QutC4XG4gIGxldCByZWdpc3RlclN1ck5hbWVWYWx1ZSA9IHJlZ2lzdGVyU3VyTmFtZUlucC52YWx1ZS5zcGxpdCgvXFxzKy8pLmpvaW4oJycpOyAvLyDRg9Cx0LjRgNCw0Y7RgtGB0Y8g0L/RgNC+0LHQtdC70Ysg0LLQvdGD0YLRgNC4INGB0YLRgNC+0LrQuFxuICBsZXQgcmVnaXN0ZXJFbWFpbFZhbHVlID0gcmVnaXN0ZXJFbWFpbElucC52YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9cXHMrLykuam9pbignJyk7IC8vINCy0YHQtSDRgdC40LzQstC+0LvRiyDQt9Cw0L/QuNGB0YvQstCw0Y7RgtGB0Y8g0LIg0L3QuNC20L3QtdC8INGA0LXQs9C40YHRgtGA0LUg0Lgg0YPQsdC40YDQsNGO0YLRgdGPINC/0YDQvtCx0LXQu9GLINCy0L3Rg9GC0YDQuCDRgdGC0YDQvtC60LhcbiAgbGV0IHJlZ2lzdGVyUGFzc3dvcmRWYWx1ZSA9IHJlZ2lzdGVyUGFzc3dvcmRJbnAudmFsdWUuc3BsaXQoL1xccysvKS5qb2luKCcnKTsgLy8g0YPQsdC40YDQsNGO0YLRgdGPINC/0YDQvtCx0LXQu9GLINCy0L3Rg9GC0YDQuCDRgdGC0YDQvtC60LhcblxuICAvL9C00LDRgtGH0LjQuiDQstCw0LvQuNC00LDRhtC40Lgg0YTQvtGA0LzRiyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gIGxldCByZWdpc3RlclZhbGlkYXRpb25SZXN1bHQgPSBmYWxzZTtcblxuXG5cbiAgLy/QstCw0LvQuNC00LDRhtC40Y8g0LfQvdCw0YfQtdC90LjRjyDQuNC90L/Rg9GC0LAg0LjQvNC10L3QuFxuICByZWdpc3Rlck5hbWVFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAocmVnaXN0ZXJOYW1lVmFsdWUgPT09ICcnKSB7XG5cbiAgICByZWdpc3Rlck5hbWVJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICByZWdpc3Rlck5hbWVFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKHJlZ2lzdGVyTmFtZVZhbHVlLmxlbmd0aCA8IDMpIHtcblxuICAgIHJlZ2lzdGVyTmFtZUlucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIHJlZ2lzdGVyTmFtZUVycm9yLnRleHRDb250ZW50ID0gJ05hbWUgbGVuZ3RoIG11c3QgYmUgbW9yZSB0aGFuIDMgY2hhcmFjdGVycyc7XG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2Uge1xuICAgIHJlZ2lzdGVyTmFtZVZhbHVlID0gYCR7cmVnaXN0ZXJOYW1lVmFsdWVbMF0udG9VcHBlckNhc2UoKX0ke3JlZ2lzdGVyTmFtZVZhbHVlLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCl9YC8vINC/0LXRgNCy0YvQuSDRgdC40LzQstC+0Lsg0LIg0LLQtdGA0YXQtdC90Lwg0YDQtdCz0LjRgdGC0YDQtSwg0LAg0L7RgdGC0LDQu9GM0L3Ri9C1INCyINC90LjQttC90LXQvCArINGD0LHRgNCw0YLRjCDQstGB0LUg0L/RgNC+0LHQtdC70YtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlck5hbWUnLCByZWdpc3Rlck5hbWVWYWx1ZSk7XG4gICAgcmVnaXN0ZXJOYW1lSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJOYW1lSW5wLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG5cbiAgfTtcblxuXG5cbiAgLy/QstCw0LvQuNC00LDRhtC40Y8g0LfQvdCw0YfQtdC90LjRjyDQuNC90L/Rg9GC0LAg0YTQsNC80LjQu9C40LhcbiAgcmVnaXN0ZXJTdXJOYW1lRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgaWYgKHJlZ2lzdGVyU3VyTmFtZVZhbHVlID09PSAnJykge1xuXG4gICAgcmVnaXN0ZXJTdXJOYW1lSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJTdXJOYW1lRXJyb3IudGV4dENvbnRlbnQgPSAnRmlsbCBpbiB0aGUgZmllbGQnO1xuICAgIHJlZ2lzdGVyVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG5cbiAgfSBlbHNlIGlmIChyZWdpc3RlclN1ck5hbWVWYWx1ZS5sZW5ndGggPCAzKSB7XG5cbiAgICByZWdpc3RlclN1ck5hbWVJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICByZWdpc3RlclN1ck5hbWVFcnJvci50ZXh0Q29udGVudCA9ICdMYXN0IG5hbWUgbXVzdCBiZSBtb3JlIHRoYW4gMyBjaGFyYWN0ZXJzJztcbiAgICByZWdpc3RlclZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuXG4gIH0gZWxzZSB7XG4gICAgcmVnaXN0ZXJTdXJOYW1lVmFsdWUgPSBgJHtyZWdpc3RlclN1ck5hbWVWYWx1ZVswXS50b1VwcGVyQ2FzZSgpfSR7cmVnaXN0ZXJTdXJOYW1lVmFsdWUuc2xpY2UoMSkudG9Mb3dlckNhc2UoKX1gLy8g0L/QtdGA0LLRi9C5INGB0LjQvNCy0L7QuyDQsiDQstC10YDRhdC10L3QvCDRgNC10LPQuNGB0YLRgNC1LCDQsCDQvtGB0YLQsNC70YzQvdGL0LUg0LIg0L3QuNC20L3QtdC8ICsg0YPQsdGA0LDRgtGMINCy0YHQtSDQv9GA0L7QsdC10LvRi1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyU3VyTmFtZScsIHJlZ2lzdGVyU3VyTmFtZVZhbHVlKTtcbiAgICByZWdpc3RlclN1ck5hbWVJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICByZWdpc3RlclN1ck5hbWVJbnAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcblxuICB9O1xuXG5cblxuICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQsCDQv9C+0YfRgtGLXG4gIHJlZ2lzdGVyRW1haWxFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAocmVnaXN0ZXJFbWFpbFZhbHVlID09PSAnJykge1xuXG4gICAgcmVnaXN0ZXJFbWFpbElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIHJlZ2lzdGVyRW1haWxFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKHJlZ2lzdGVyRW1haWxWYWx1ZS5sZW5ndGggPCAzKSB7XG5cbiAgICByZWdpc3RlckVtYWlsSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICByZWdpc3RlckVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnTWFpbCBsZW5ndGggbXVzdCBiZSBtb3JlIHRoYW4gMyBjaGFyYWN0ZXJzJztcbiAgICByZWdpc3RlclZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuXG4gIH0gZWxzZSBpZiAocmVnaXN0ZXJFbWFpbFZhbHVlLmluY2x1ZGVzKCdAJykgIT09IHRydWUpIHtcblxuICAgIHJlZ2lzdGVyRW1haWxJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICByZWdpc3RlckVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnTWFpbCBtdXN0IGNvbnRhaW4gXFwnQFxcJyc7XG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKHJlZ2lzdGVyRW1haWxWYWx1ZSA9PT0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJFbWFpbCcpKSB7XG5cbiAgICByZWdpc3RlckVtYWlsSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJFbWFpbEVycm9yLnRleHRDb250ZW50ID0gJ1RoaXMgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQnO1xuICAgIHJlZ2lzdGVyVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG5cbiAgfSBlbHNlIHtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyRW1haWwnLCByZWdpc3RlckVtYWlsVmFsdWUpO1xuICAgIHJlZ2lzdGVyRW1haWxJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICByZWdpc3RlckVtYWlsSW5wLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG5cbiAgfTtcblxuXG5cbiAgLy/QstCw0LvQuNC00LDRhtC40Y8g0LfQvdCw0YfQtdC90LjRjyDQuNC90L/Rg9GC0LAg0L/QsNGA0L7Qu9GPXG4gIHJlZ2lzdGVyUGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAocmVnaXN0ZXJQYXNzd29yZFZhbHVlID09PSAnJykge1xuXG4gICAgcmVnaXN0ZXJQYXNzd29yZElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIHJlZ2lzdGVyUGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKHJlZ2lzdGVyUGFzc3dvcmRWYWx1ZS5sZW5ndGggPCA4KSB7XG5cbiAgICByZWdpc3RlclBhc3N3b3JkSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJQYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ1Bhc3N3b3JkIGxlbmd0aCBtdXN0IGJlIG1vcmUgdGhhbiA4IGNoYXJhY3RlcnMnO1xuICAgIHJlZ2lzdGVyVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG5cbiAgfSBlbHNlIHtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyUGFzc3dvcmQnLCByZWdpc3RlclBhc3N3b3JkVmFsdWUpO1xuICAgIHJlZ2lzdGVyUGFzc3dvcmRJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICByZWdpc3RlclBhc3N3b3JkSW5wLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG5cbiAgfTtcblxuXG5cbiAgLy/QtdGB0LvQuCDQtdGB0YLRjCDQvtGI0LjQsdC60LAg0LIg0LLQsNC70LjQtNCw0YbQuNC4LCDRgtC+INC30LDQvdC+0LLQviDQv9GA0L7QudGC0LjRgdGMINC/0L4g0LLRgdC10Lwg0LfQvdCw0YfQtdC90LjRj9C8INC40L3Qv9GD0YLQsNC8XG4gIGlmIChyZWdpc3RlclZhbGlkYXRpb25SZXN1bHQgPT09IHRydWUpIHtcblxuICAgIHJldHVybjtcblxuICB9O1xuXG5cblxuICAvL9C/0L7RgdC70LUg0YPRgdC/0LXRiNC90L7QuSDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG5cbiAgLy/Qt9Cw0LrRgNGL0YLRjCDQvNC+0LTQsNC70LrRgyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gIHJlZ2lzdGVyRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGNsb3NlTW9kYWxSZWdpc3RlcigpO1xuXG4gIH0pO1xuXG4gIC8v0YPQtNCw0LvQuNGC0Ywg0LjQtyDQkdCUINGB0YfQtdGC0YfQuNC6INCy0LjQt9C40YLQvtCyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyVmlzaXRzJyk7XG5cbiAgLy/RgdC+0LfQtNCw0YLRjCDRgdGH0LXRgtGH0LjQuiDQstC40LfQuNGC0L7QsiDRjtC30LXRgNCwINC4INC/0YDQuNGB0LLQvtC40YLRjCDQsiDQvdC10LPQviDQt9C90LDRh9C10L3QuNC1INC40Lcg0JHQlFxuICBsZXQgdXNlclZpc2l0cyA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclZpc2l0cycpKTtcblxuICAvL9GD0LLQtdC70LjRh9C40YLRjCDQutC+0Lst0LLQviDQstC40LfQuNGC0L7QsiDRjtC30LXRgNCwINC90LAgMVxuICB1cFVzZXJWaXNpdHModXNlclZpc2l0cyk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJTdWJzY3JpcHRpb24nLCBmYWxzZSlcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJPd25Cb29rcycsIDApO1xuXG4gIC8v0L/RgNC40L3Rg9C00LjRgtC10LvRjNC90L4g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0Ywg0YHRgtGA0LDQvdC40YbRg1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcblxuXG5cbiAgLy/RgdCx0YDQvtGB0LjRgtGMINCy0YHQtSDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQvtCyXG4gIHJlZ2lzdGVyTmFtZUlucC52YWx1ZSA9ICcnO1xuICByZWdpc3Rlck5hbWVJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgcmVnaXN0ZXJTdXJOYW1lSW5wLnZhbHVlID0gJyc7XG4gIHJlZ2lzdGVyU3VyTmFtZUlucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICByZWdpc3RlckVtYWlsSW5wLnZhbHVlID0gJyc7XG4gIHJlZ2lzdGVyRW1haWxJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgcmVnaXN0ZXJQYXNzd29yZElucC52YWx1ZSA9ICcnO1xuICByZWdpc3RlclBhc3N3b3JkSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG5cblxuXG4gIC8v0YHQs9C10L3QtdGA0LjRgNC+0LLQsNGC0Ywg0YHQu9GD0YfQsNC50L3QvtC1INC00LXQstGP0YLQuNC30L3QsNGH0L3QvtC1INGH0LjRgdC70L5cbiAgbGV0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMDAwMDAwMCkgKyAxMDAwMDAwMDA7XG5cbiAgLy/RgdC60L7QvdCy0LXRgNGC0LjRgNC+0LLQsNGC0Ywg0YfQuNGB0LvQviDQsiAxNi3RgNC40YfQvdGD0Y4g0YHQuNGB0YLQtdC80YNcbiAgbGV0IGhleE51bWJlciA9IHJhbmRvbU51bWJlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblxuICAvL9C00L7QsdCw0LLQuNGC0Ywg0LLQtdC00YPRidC40LUg0L3Rg9C70LgsINC10YHQu9C4INC90LXQvtCx0YXQvtC00LjQvNC+XG4gIHdoaWxlIChoZXhOdW1iZXIubGVuZ3RoIDwgOSkge1xuXG4gICAgaGV4TnVtYmVyID0gXCIwXCIgKyBoZXhOdW1iZXI7XG5cbiAgfTtcblxuICAvL9GB0L7RhdGA0LDQvdC40YLRjCDQsiDQkdCUINGB0LPQtdC90LXRgNC40YDQvtCy0LDQvdC90YvQuSBjYXJkTnVtYmVyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJkTnVtYmVyJywgaGV4TnVtYmVyKTtcblxuICAvL9GB0L7RhdGA0LDQvdC40YLRjCDQsiDQkdCUINC00LDRgtGH0LjQutC4INGD0YHQv9C10YjQvdGL0YUg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQuCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4INGO0LfQtdGA0LBcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJSZWdpc3RlcmVkJywgdHJ1ZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyQXV0aG9yaXplZCcsIHRydWUpO1xufSk7XG5cblxuXG4vL9C+0YLQvNC10L3QuNGC0Ywg0LTQtdGE0L7Qu9GC0L3QvtC1INC/0L7QstC10LTQtdC90LjQtSDQutC90L7Qv9C60Lgg0L/RgNC4INGB0LDQsdC80LjRgtC1XG5yZWdpc3RlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbn0pO1xuXG5cblxuXG5cbi8vINCy0LDQu9C40LTQsNGG0LjRjyDRhNC+0YDQvNGLINCw0LLRgtC+0YDQuNC30LDRhtC40LhcblxuLy/Qv9C+0LvRg9GH0LjRgtGMINGE0L7RgNC80YMg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuY29uc3QgYXV0aG9yaXplZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZm9ybScpO1xuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0LLRgdC1INC40L3Qv9GD0YLRiyDQsiDRhNC+0YDQvNC1INCw0LLRgtC+0YDQuNC30LDRhtC40LhcbmNvbnN0IGF1dGhvcml6ZWRMb2dpbklucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1tb2RhbF9faW5wdXQtbG9naW4nKTtcbmNvbnN0IGF1dGhvcml6ZWRQYXNzd29yZElucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1tb2RhbF9faW5wdXQtcGFzc3dvcmQnKTtcblxuLy/Qv9C+0LvRg9GH0LjRgtGMINC/0L7Qu9GPINC00LvRjyDQstGL0LLQvtC00LAg0L7RiNC40LHQvtC6INCyINC40L3Qv9GD0YLQsNGFXG5jb25zdCBhdXRob3JpemVkTG9naW5FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1tb2RhbF9fZXJyb3ItdGV4dC1sb2dpbicpO1xuY29uc3QgYXV0aG9yaXplZFBhc3N3b3JkRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tbW9kYWxfX2Vycm9yLXRleHQtcGFzc3dvcmQnKTtcblxuLy/Qv9C+0LvRg9GH0LjRgtGMINC60L3QvtC/0LrRgyDQtNC70Y8g0YHQsNCx0LzQuNGC0LAg0YTQvtGA0LzRiyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG5jb25zdCBhdXRob3JpemVkRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1tb2RhbF9fYnRuLWxvZ2luJyk7XG5cblxuXG4vL9C+0LHRgNCw0LHQvtGC0LrQsCDQutC70LjQutCwINC/0L4g0LrQvdC+0L/QutC1INGB0LDQsdC80LjRgtCwINGE0L7RgNC80Ysg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuYXV0aG9yaXplZEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gIC8v0L7RgdGC0LDQvdC+0LLQuNGC0Ywg0YDQsNGB0L/RgNC+0YHRgtGA0LDQvdC10L3QuNC1INC/0L7QstC10LTQtdC90LjRjyDQutC90L7Qv9C60Lgg0YTQvtGA0LzRi1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIC8v0LfQsNC/0YDQtdGC0LjRgtGMINGB0LrRgNC+0LvQuyDRgdGC0YDQsNC90LjRhtGLINC/0YDQuCDQt9Cw0L/QvtC70L3QtdC90LjQuCDRhNC+0YDQvNGLINCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdG9wLXNjcm9sbCcpO1xuXG4gIC8v0L/QvtC70YPRh9C40YLRjCDQstGB0LUg0LfQvdCw0YfQtdC90LjRjyDQsiDQuNC90L/Rg9GC0LDRhVxuICBsZXQgYXV0aG9yaXplZExvZ2luVmFsdWUgPSBhdXRob3JpemVkTG9naW5JbnAudmFsdWUuc3BsaXQoL1xccysvKS5qb2luKCcnKTsgLy8g0YPQsdC40YDQsNGO0YLRgdGPINC/0YDQvtCx0LXQu9GLINCy0L3Rg9GC0YDQuCDRgdGC0YDQvtC60LhcbiAgbGV0IGF1dGhvcml6ZWRQYXNzd29yZFZhbHVlID0gYXV0aG9yaXplZFBhc3N3b3JkSW5wLnZhbHVlLnNwbGl0KC9cXHMrLykuam9pbignJyk7IC8vINGD0LHQuNGA0LDRjtGC0YHRjyDQv9GA0L7QsdC10LvRiyDQstC90YPRgtGA0Lgg0YHRgtGA0L7QutC4XG5cbiAgLy/QtNCw0YLRh9C40Log0LLQsNC70LjQtNCw0YbQuNC4INGE0L7RgNC80Ysg0LDRgtC+0YDQuNC30LDRhtC40LhcbiAgbGV0IGF1dGhvcml6ZWRWYWxpZGF0aW9uUmVzdWx0ID0gZmFsc2U7XG5cblxuXG4gIC8v0LLQsNC70LjQtNCw0YbQuNGPINC30L3QsNGH0LXQvdC40Y8g0LjQvdC/0YPRgtCwINC70L7Qs9C40L3QsFxuICBhdXRob3JpemVkTG9naW5FcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAoYXV0aG9yaXplZExvZ2luVmFsdWUgPT09ICcnKSB7XG4gICAgYXV0aG9yaXplZExvZ2luSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYXV0aG9yaXplZExvZ2luRXJyb3IudGV4dENvbnRlbnQgPSAnRmlsbCBpbiB0aGUgZmllbGQnO1xuICAgIGF1dGhvcml6ZWRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChhdXRob3JpemVkTG9naW5WYWx1ZSAhPT0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJFbWFpbCcpICYmIGF1dGhvcml6ZWRMb2dpblZhbHVlICE9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FyZE51bWJlcicpKSB7XG4gICAgYXV0aG9yaXplZExvZ2luSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYXV0aG9yaXplZExvZ2luRXJyb3IudGV4dENvbnRlbnQgPSAnVGhpcyBtYWlsIG9yIHJlYWRlcnMgY2FyZCBpcyBub3QgcmVnaXN0ZXJlZCc7XG4gICAgYXV0aG9yaXplZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGF1dGhvcml6ZWRMb2dpbklucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIGF1dGhvcml6ZWRMb2dpbklucC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuICB9O1xuXG5cblxuICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQsCDQv9Cw0YDQvtC70Y9cbiAgYXV0aG9yaXplZFBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgaWYgKGF1dGhvcml6ZWRQYXNzd29yZFZhbHVlID09PSAnJykge1xuXG4gICAgYXV0aG9yaXplZFBhc3N3b3JkSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYXV0aG9yaXplZFBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnRmlsbCBpbiB0aGUgZmllbGQnO1xuICAgIGF1dGhvcml6ZWRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKGF1dGhvcml6ZWRQYXNzd29yZFZhbHVlLmxlbmd0aCA8IDgpIHtcblxuICAgIGF1dGhvcml6ZWRQYXNzd29yZElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGF1dGhvcml6ZWRQYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ1Bhc3N3b3JkIGxlbmd0aCBtdXN0IGJlIG1vcmUgdGhhbiA4IGNoYXJhY3RlcnMnO1xuICAgIGF1dGhvcml6ZWRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKGF1dGhvcml6ZWRQYXNzd29yZFZhbHVlICE9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclBhc3N3b3JkJykpIHtcblxuICAgIGF1dGhvcml6ZWRQYXNzd29yZElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGF1dGhvcml6ZWRQYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ3dyb25nIHBhc3N3b3JkJztcbiAgICBhdXRob3JpemVkVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG5cbiAgfSBlbHNlIHtcblxuICAgIGF1dGhvcml6ZWRQYXNzd29yZElucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIGF1dGhvcml6ZWRQYXNzd29yZElucC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuXG4gIH07XG5cblxuXG4gIC8v0LXRgdC70Lgg0LXRgdGC0Ywg0L7RiNC40LHQutCwINCyINCy0LDQu9C40LTQsNGG0LjQuCwg0YLQviDQt9Cw0L3QvtCy0L4g0L/RgNC+0LnRgtC40YHRjCDQv9C+INCy0YHQtdC8INC30L3QsNGH0LXQvdC40Y/QvCDQuNC90L/Rg9GC0LDQvFxuICBpZiAoYXV0aG9yaXplZFZhbGlkYXRpb25SZXN1bHQgPT09IHRydWUpIHtcblxuICAgIHJldHVybjtcblxuICB9O1xuXG5cblxuICAvL9C/0L7RgdC70LUg0YPRgdC/0LXRiNC90L7QuSDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG5cbiAgLy/Qt9Cw0LrRgNGL0YLRjCDQvNC+0LTQsNC70LrRgyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG4gIGF1dGhvcml6ZWRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY2xvc2VNb2RhbExvZ0luKCk7XG5cbiAgfSk7XG5cblxuICBsZXQgdXNlclZpc2l0cyA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclZpc2l0cycpKTtcbiAgdXBVc2VyVmlzaXRzKHVzZXJWaXNpdHMpO1xuXG5cbiAgLy/Qv9GA0LjQvdGD0LTQuNGC0LXQu9GM0L3QviDQv9C10YDQtdC30LDQs9GA0YPQt9C40YLRjCDRgdGC0YDQsNC90LjRhtGDXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xuXG5cblxuICAvL9GB0L7RhdGA0LDQvdC40YLRjCDQsiDQkdCUINC00LDRgtGH0LjQuiDRg9GB0L/QtdGI0L3QvtC5INCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0Y7Qt9C10YDQsFxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckF1dGhvcml6ZWQnLCB0cnVlKTtcblxuXG5cbiAgLy/RgdCx0YDQvtGB0LjRgtGMINCy0YHQtSDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQvtCyXG4gIGF1dGhvcml6ZWRMb2dpbklucC52YWx1ZSA9ICcnO1xuICBhdXRob3JpemVkTG9naW5JbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgYXV0aG9yaXplZFBhc3N3b3JkSW5wLnZhbHVlID0gJyc7XG4gIGF1dGhvcml6ZWRQYXNzd29yZElucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xufSk7XG5cblxuLy/Rg9Cy0LXQu9C40YfQuNGC0Ywg0LrQvtC7LdCy0L4g0LLQuNC30LjRgtC+0LIg0L3QsCAxXG5cblxuLy/QvtGC0LzQtdC90LjRgtGMINC00LXRhNC+0LvRgtC90L7QtSDQv9C+0LLQtdC00LXQvdC40LUg0LrQvdC+0L/QutC4INC/0YDQuCDRgdCw0LHQvNC40YLQtVxuYXV0aG9yaXplZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbn0pO1xuXG5cblxuXG4vL9C10YHQu9C4INGO0LfQtdGAINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvVxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyUmVnaXN0ZXJlZCcpID09PSAndHJ1ZScgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJBdXRob3JpemVkJykgIT09ICd0cnVlJykge1xuXG4gIC8vINCy0LDQu9C40LTQsNGG0LjRjyDRhNC+0YDQvNGLINC/0YDQvtCy0LXRgNC60Lgg0LrQsNGA0YLRi1xuXG4gIC8v0L/QvtC70YPRh9C40YLRjCDRhNC+0YDQvNGDINC/0YDQvtCy0LXRgNC60Lgg0LrQsNGA0YLRi1xuICBjb25zdCBjYXJkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLWZvcm0nKTtcblxuICAvL9C/0L7Qu9GD0YfQuNGC0Ywg0LLRgdC1INC40L3Qv9GD0YLRiyDQsiDRhNC+0YDQvNC1INC/0YDQvtCy0LXRgNC60Lgg0LrQsNGA0YLRi1xuICBjb25zdCBjYXJkTmFtZUlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19mb3JtLWlucHV0LW5hbWUnKTtcbiAgY29uc3QgY2FyZE51bWJlcklucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19mb3JtLWlucHV0LW51bWJlcicpO1xuXG4gIC8v0L/QvtC70YPRh9C40YLRjCDQv9C+0LvRjyDQtNC70Y8g0LLRi9Cy0L7QtNCwINC+0YjQuNCx0L7QuiDQsiDQuNC90L/Rg9GC0LDRhVxuICBjb25zdCBjYXJkTmFtZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2Vycm9yLXRleHQtbmFtZScpO1xuICBjb25zdCBjYXJkTnVtYmVyRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fZXJyb3ItdGV4dC1udW1iZXInKTtcblxuICAvL9C/0L7Qu9GD0YfQuNGC0Ywg0LrQvdC+0L/QutGDINC00LvRjyDRgdCw0LHQvNC40YLQsCDRhNC+0YDQvNGLINC/0YDQvtCy0LXRgNC60Lgg0LrQsNGA0YLRi1xuICBjb25zdCBjYXJkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2Zvcm0tYnRuJyk7XG5cblxuICBjYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIC8v0L7RgdGC0LDQvdC+0LLQuNGC0Ywg0YDQsNGB0L/RgNC+0YHRgtGA0LDQvdC10L3QuNC1INC/0L7QstC10LTQtdC90LjRjyDQutC90L7Qv9C60Lgg0YTQvtGA0LzRi1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAvL9C/0L7Qu9GD0YfQuNGC0Ywg0LLRgdC1INC30L3QsNGH0LXQvdC40Y8g0LIg0LjQvdC/0YPRgtCw0YVcbiAgICBsZXQgY2FyZE5hbWVWYWx1ZSA9IGNhcmROYW1lSW5wLnZhbHVlLnJlcGxhY2UoLyhefFxccylcXFMvZywgZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEudG9VcHBlckNhc2UoKSB9KSAvL9C60LDQttC00L7QtSDRgdC70L7QstC+INC90LDRh9C40L3QsNC10YLRgdGPINGBINCx0YPQutCy0Ysg0LIg0LLQtdGA0YXQvdC10Lwg0YDQtdCz0LjRgdGC0YDQtVxuICAgIGxldCBjYXJkTnVtYmVyVmFsdWUgPSBjYXJkTnVtYmVySW5wLnZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cblxuXG4gICAgLy/QtNCw0YLRh9C40Log0LLQsNC70LjQtNCw0YbQuNC4INGE0L7RgNC80Ysg0L/RgNC+0LLQtdGA0LrQuCDQutCw0YDRgtGLXG4gICAgbGV0IGNhcmRWYWxpZGF0aW9uUmVzdWx0ID0gZmFsc2U7XG5cbiAgICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQsCDQuNC80LXQvdC4XG4gICAgY2FyZE5hbWVFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGlmIChjYXJkTmFtZVZhbHVlID09PSAnJykge1xuICAgICAgY2FyZE5hbWVJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgIGNhcmROYW1lRXJyb3IudGV4dENvbnRlbnQgPSAnRmlsbCBpbiB0aGUgZmllbGQnO1xuICAgICAgY2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY2FyZE5hbWVWYWx1ZSAhPT0gYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJOYW1lJyl9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJTdXJOYW1lJyl9YCkge1xuICAgICAgY2FyZE5hbWVJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgIGNhcmROYW1lRXJyb3IudGV4dENvbnRlbnQgPSAnRW50ZXIgdGhlIGNvcnJlY3QgZmlyc3QgYW5kIGxhc3QgbmFtZSc7XG4gICAgICBjYXJkVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhcmROYW1lSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgICBjYXJkTmFtZUlucC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuICAgIH07XG5cbiAgICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQsCDQvdC+0LzQtdGA0LAg0LrQsNGA0YLRi1xuICAgIGNhcmROdW1iZXJFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGlmIChjYXJkTnVtYmVyVmFsdWUgPT09ICcnKSB7XG4gICAgICBjYXJkTnVtYmVySW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgICBjYXJkTnVtYmVyRXJyb3IudGV4dENvbnRlbnQgPSAnRmlsbCBpbiB0aGUgZmllbGQnO1xuICAgICAgY2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY2FyZE51bWJlclZhbHVlICE9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FyZE51bWJlcicpKSB7XG4gICAgICBjYXJkTnVtYmVySW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgICBjYXJkTnVtYmVyRXJyb3IudGV4dENvbnRlbnQgPSAnQ2FyZCBudW1iZXIgaXMgbm90IGZvdW5kJztcbiAgICAgIGNhcmRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FyZE51bWJlcklucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgICAgY2FyZE51bWJlcklucC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuICAgIH07XG5cbiAgICAvL9C10YHQu9C4INC10YHRgtGMINC+0YjQuNCx0LrQsCDQsiDQstCw0LvQuNC00LDRhtC40LgsINGC0L4g0LfQsNC90L7QstC+INC/0YDQvtC50YLQuNGB0Ywg0L/QviDQstGB0LXQvCDQt9C90LDRh9C10L3QuNGP0Lwg0LjQvdC/0YPRgtCw0LxcbiAgICBpZiAoY2FyZFZhbGlkYXRpb25SZXN1bHQgPT09IHRydWUpIHtcblxuICAgICAgcmV0dXJuO1xuXG4gICAgfTtcblxuICAgIC8v0YHQsdGA0L7RgdC40YLRjCDQstGB0LUg0LfQvdCw0YfQtdC90LjRjyDQuNC90L/Rg9GC0L7QslxuICAgIGNhcmROYW1lSW5wLnZhbHVlID0gJyc7XG4gICAgY2FyZE5hbWVJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgICBjYXJkTnVtYmVySW5wLnZhbHVlID0gJyc7XG4gICAgY2FyZE51bWJlcklucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuXG5cblxuICAgIC8v0L/QvtC70YPRh9C40YLRjCDQsdC70L7QuiDRgSDQuNC90YTQvtC5INC+INGO0LfQtdGA0LVcbiAgICBjb25zdCBjaGVja0NhcmRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fY29udGVudCcpO1xuXG4gICAgLy/Qv9C+0LzQtdC90Y/RgtGMINGA0LDQt9C80LXRgtC60YMg0L/QvtC0INC30LDQv9GA0L7RgSDRjtC30LXRgNCwXG4gICAgY2hlY2tDYXJkQm94LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fbGVmdCBmbGV4XCI+XG4gICAgPGgzIGNsYXNzPVwiY2FyZF9fbGVmdC1zdWJ0aXRsZVwiPllvdXIgTGlicmFyeSBjYXJkPC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fbGVmdC1ib3R0b21cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19sZWZ0LWluZm9cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkX19uYW1lXCI+QnJvb2tseW4gUHVibGljIExpYnJhcnk8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPSBcImNhcmRfX3VzZXItbmFtZVwiPiR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJOYW1lJyl9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJTdXJOYW1lJyl9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz0gXCJjYXJkX191c2VyLW51bWJlclwiPiR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmROdW1iZXInKX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzcz1cImNhcmRfX2xlZnQtaW5mby1saXN0IGxpc3QtcmVzZXQgaW5mby1saXN0XCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImluZm8tbGlzdF9faXRlbVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1saXN0LW5hbWVcIj5WaXNpdHM8L3NwYW4+XG4gICAgICAgICAgPHN2Zz5cbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cImltZy9zcHJpdGUuc3ZnI3Zpc2l0c1wiPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1saXN0LWNvdW50IGluZm8tbGlzdC1jb3VudC12aXNpdHNcIj4ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVmlzaXRzJyl9PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJpbmZvLWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tbGlzdC1uYW1lXCI+Qm9udXNlczwvc3Bhbj5cbiAgICAgICAgICA8c3ZnPlxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiaW1nL3Nwcml0ZS5zdmcjYm9udXNlc1wiPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1saXN0LWNvdW50XCI+MTI0MDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiaW5mby1saXN0X19pdGVtXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWxpc3QtbmFtZVwiPkJvb2tzPC9zcGFuPlxuICAgICAgICAgIDxzdmc+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCJpbWcvc3ByaXRlLnN2ZyNib29rc1wiPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1saXN0LWNvdW50IGluZm8tbGlzdC1jb3VudC1ib29rc1wiPiR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJPd25Cb29rcycpfTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2FyZF9fcmlnaHQgZmxleFwiPlxuICA8aDMgY2xhc3M9XCJjYXJkX19yaWdodC1zdWJ0aXRsZVwiPkdldCBhIHJlYWRlciBjYXJkPC9oMz5cbiAgPHAgY2xhc3M9XCJjYXJkX19yaWdodC1kZXNjclwiPllvdSB3aWxsIGJlIGFibGUgdG8gc2VlIGEgcmVhZGVyIGNhcmQgYWZ0ZXIgbG9nZ2luZyBpbnRvIGFjY291bnQgb3IgeW91IGNhbiByZWdpc3RlciBhIG5ldyBhY2NvdW50PC9wPlxuICA8ZGl2IGNsYXNzPVwiY2FyZF9fcmlnaHQtYm90dG9tIGZsZXhcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXJlc2V0IGNhcmRfX3JpZ2h0LWJ0biBjYXJkX19yaWdodC1idG4tcmVnaXN0ZXJcIiBkaXNhYmxlZD5TaWduIFVwPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yZXNldCBjYXJkX19yaWdodC1idG4gY2FyZF9fcmlnaHQtYnRuLWxvZ2luXCIgZGlzYWJsZWQ+TG9nIGluPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG4gIGA7XG5cbiAgICAvL9Cy0LXRgNC90YPRgtGMINC00LXRhNC+0LvRgtC90YPRjiDRgNCw0LfQvNC10YLQutGDINGH0LXRgNC10LcgMTDRgVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICBjaGVja0NhcmRCb3guaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjYXJkX19sZWZ0IGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkX19sZWZ0LXN1YnRpdGxlXCI+RmluZCB5b3VyIExpYnJhcnkgY2FyZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2xlZnQtYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3M9XCJmb3JtIGNhcmRfX2Zvcm0gZmxleFwiIGlkPVwiY2FyZC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19mb3JtLXRvcCBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkX19uYW1lXCI+QnJvb2tseW4gUHVibGljIExpYnJhcnk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2FyZF9fbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQtcmVzZXQgY2FyZF9fZm9ybS1pbnB1dCBjYXJkX19mb3JtLWlucHV0LW5hbWVcIiBwbGFjZWhvbGRlcj1cIlJlYWRlcidzIG5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dC1jYXJkIGVycm9yLXRleHQgY2FyZF9fZXJyb3ItdGV4dC1uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2FyZF9fbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQtcmVzZXQgY2FyZF9fZm9ybS1pbnB1dCBjYXJkX19mb3JtLWlucHV0LW51bWJlclwiIHBsYWNlaG9sZGVyPVwiQ2FyZCBudW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dC1jYXJkIGVycm9yLXRleHQgY2FyZF9fZXJyb3ItdGV4dC1udW1iZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19mb3JtLWJvdHRvbSBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yZXNldCBjYXJkX19mb3JtLWJ0blwiIHR5cGU9XCJzdWJtaXRcIj5DaGVjayB0aGUgY2FyZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19yaWdodCBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZF9fcmlnaHQtc3VidGl0bGVcIj5HZXQgYSByZWFkZXIgY2FyZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX19yaWdodC1kZXNjclwiPllvdSB3aWxsIGJlIGFibGUgdG8gc2VlIGEgcmVhZGVyIGNhcmQgYWZ0ZXIgbG9nZ2luZyBpbnRvIGFjY291bnQgb3IgeW91IGNhbiByZWdpc3RlciBhIG5ldyBhY2NvdW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19yaWdodC1ib3R0b20gZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yZXNldCBjYXJkX19yaWdodC1idG4gY2FyZF9fcmlnaHQtYnRuLXJlZ2lzdGVyXCI+U2lnbiBVcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yZXNldCBjYXJkX19yaWdodC1idG4gY2FyZF9fcmlnaHQtYnRuLWxvZ2luXCI+TG9nIGluPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgLy/Qv9GA0LjQvdGD0LTQuNGC0LXQu9GM0L3QviDQv9C10YDQtdC30LDQs9GA0YPQt9C40YLRjCDRgdGC0YDQsNC90LjRhtGDXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LCAxMDAwMCk7XG5cbiAgfSk7XG5cbiAgLy/QvtGC0LzQtdC90LjRgtGMINC00LXRhNC+0LvRgtC90L7QtSDQv9C+0LLQtdC00LXQvdC40LUg0LrQvdC+0L/QutC4INC/0YDQuCDRgdCw0LHQvNC40YLQtVxuICBjYXJkRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIH0pO1xufTtcblxuXG5cblxuXG4vLyDQstCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LzRiyDQv9C+0LrRg9C/0LrQuCDQsNCx0L7QvdC10LzQtdC90YLQsFxuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0YTQvtGA0LzRgyDQv9C+0LrRg9C/0LrQuCDQsNCx0L7QvdC10LzQtdC90YLQsFxuY29uc3QgYnV5Q2FyZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5LWNhcmQtZm9ybScpO1xuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0LLRgdC1INC40L3Qv9GD0YLRiyDQsiDRhNC+0YDQvNC1INC/0L7QutGD0L/QutC4INCw0LHQvtC90LXQvNC10L3RgtCwXG5jb25zdCBidXlDYXJkTnVtYmVySW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1eS1jYXJkLWZvcm1fX2lucHV0LWNhcmQtbnVtYmVyJyk7XG5jb25zdCBidXlDYXJkRXhwQ29kZUZpcnN0SW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1eS1jYXJkLWZvcm1fX2lucHV0LWV4cGlyYXRpb24tY29kZS0xJyk7XG5jb25zdCBidXlDYXJkRXhwQ29kZVNlY29uZElucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXktY2FyZC1mb3JtX19pbnB1dC1leHBpcmF0aW9uLWNvZGUtMicpO1xuY29uc3QgYnV5Q2FyZENWQ0lucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXktY2FyZC1mb3JtX19pbnB1dC1jdmMnKTtcbmNvbnN0IGJ1eUNhcmRIb2xkZXJJbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV5LWNhcmQtZm9ybV9faW5wdXQtY2FyZGhvbGRlci1uYW1lJyk7XG5jb25zdCBidXlDYXJkUG9zdGFsSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1eS1jYXJkLWZvcm1fX2lucHV0LXBvc3RhbC1jb2RlJyk7XG5jb25zdCBidXlDYXJkQ2l0eUlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXktY2FyZC1mb3JtX19pbnB1dC1jaXR5Jyk7XG5cblxuLy/Qv9C+0LvRg9GH0LjRgtGMINC/0L7Qu9GPINC00LvRjyDQstGL0LLQvtC00LAg0L7RiNC40LHQvtC6INCyINC40L3Qv9GD0YLQsNGFXG5jb25zdCBidXlDYXJkTnVtYmVyRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV5LWNhcmQtZm9ybV9fZXJyb3ItdGV4dC1jYXJkLW51bWJlcicpO1xuY29uc3QgYnV5Q2FyZEV4cENvZGVFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXktY2FyZC1mb3JtX19lcnJvci10ZXh0LWNvZGUnKTtcbmNvbnN0IGJ1eUNhcmRDVkNFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXktY2FyZC1mb3JtX19lcnJvci10ZXh0LWN2YycpO1xuY29uc3QgYnV5Q2FyZEhvbGRlckVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1eS1jYXJkLWZvcm1fX2Vycm9yLXRleHQtY2FyZGhvbGRlci1uYW1lJyk7XG5jb25zdCBidXlDYXJkUG9zdGFsRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV5LWNhcmQtZm9ybV9fZXJyb3ItdGV4dC1wb3N0YWwtY29kZScpO1xuY29uc3QgYnV5Q2FyZENpdHlFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXktY2FyZC1mb3JtX19lcnJvci10ZXh0LWNpdHknKTtcblxuLy/Qv9C+0LvRg9GH0LjRgtGMINC60L3QvtC/0LrRgyDQtNC70Y8g0YHQsNCx0LzQuNGC0LAg0YTQvtGA0LzRiyDQv9C+0LrRg9C/0LrQuCDQsNCx0L7QvdC10LzQtdC90YLQsFxuY29uc3QgYnV5Q2FyZEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV5LWNhcmQtZm9ybV9fYnRuLXN1Ym1pdCcpO1xuXG5cbi8v0L7QsdGA0LDQsdC+0YLQutCwINC60LvQuNC60LAg0L/QviDQutC90L7Qv9C60LUg0YHQsNCx0LzQuNGC0LAg0YTQvtGA0LzRiyDQv9C+0LrRg9C/0LrQuCDQsNCx0L7QvdC10LzQtdC90YLQsFxuYnV5Q2FyZEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gIC8v0L7RgdGC0LDQvdC+0LLQuNGC0Ywg0YDQsNGB0L/RgNC+0YHRgtGA0LDQvdC10L3QuNC1INC/0L7QstC10LTQtdC90LjRjyDQutC90L7Qv9C60Lgg0YTQvtGA0LzRi1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIC8v0LfQsNC/0YDQtdGC0LjRgtGMINGB0LrRgNC+0LvQuyDRgdGC0YDQsNC90LjRhtGLINC/0YDQuCDQt9Cw0L/QvtC70L3QtdC90LjQuCDRhNC+0YDQvNGLINC/0L7QutGD0L/QutC4INCw0LHQvtC90LXQvNC10L3RgtCwXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc3RvcC1zY3JvbGwnKTtcblxuICAvL9C/0L7Qu9GD0YfQuNGC0Ywg0LLRgdC1INC30L3QsNGH0LXQvdC40Y8g0LIg0LjQvdC/0YPRgtCw0YVcbiAgbGV0IGJ1eUNhcmROdW1iZXJWYWx1ZSA9IGJ1eUNhcmROdW1iZXJJbnAudmFsdWUuc3BsaXQoL1xccysvKS5qb2luKCcnKTsgLy8g0YPQsdC40YDQsNGO0YLRgdGPINC/0YDQvtCx0LXQu9GLXG4gIGxldCBidXlDYXJkRXhwQ29kZUZpcnN0VmFsdWUgPSBidXlDYXJkRXhwQ29kZUZpcnN0SW5wLnZhbHVlLnNwbGl0KC9cXHMrLykuam9pbignJyk7IC8vINGD0LHQuNGA0LDRjtGC0YHRjyDQv9GA0L7QsdC10LvRi1xuICBsZXQgYnV5Q2FyZEV4cENvZGVTZWNvbmRWYWx1ZSA9IGJ1eUNhcmRFeHBDb2RlU2Vjb25kSW5wLnZhbHVlLnNwbGl0KC9cXHMrLykuam9pbignJyk7IC8vINGD0LHQuNGA0LDRjtGC0YHRjyDQv9GA0L7QsdC10LvRi1xuICBsZXQgYnV5Q2FyZENWQ1ZhbHVlID0gYnV5Q2FyZENWQ0lucC52YWx1ZS5zcGxpdCgvXFxzKy8pLmpvaW4oJycpOyAvLyDRg9Cx0LjRgNCw0Y7RgtGB0Y8g0L/RgNC+0LHQtdC70YtcbiAgbGV0IGJ1eUNhcmRIb2xkZXJWYWx1ZSA9IGJ1eUNhcmRIb2xkZXJJbnAudmFsdWUucmVwbGFjZSgvKF58XFxzKVxcUy9nLCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYS50b1VwcGVyQ2FzZSgpIH0pOyAvL9C60LDQttC00L7QtSDRgdC70L7QstC+INC90LDRh9C40L3QsNC10YLRgdGPINGBINCx0YPQutCy0Ysg0LIg0LLQtdGA0YXQvdC10Lwg0YDQtdCz0LjRgdGC0YDQtVxuICBsZXQgYnV5Q2FyZFBvc3RhbFZhbHVlID0gYnV5Q2FyZFBvc3RhbElucC52YWx1ZS5zcGxpdCgvXFxzKy8pLmpvaW4oJycpOyAvLyDRg9Cx0LjRgNCw0Y7RgtGB0Y8g0L/RgNC+0LHQtdC70YtcbiAgbGV0IGJ1eUNhcmRDaXR5VmFsdWUgPSBidXlDYXJkQ2l0eUlucC52YWx1ZTtcblxuICAvL9C00LDRgtGH0LjQuiDQstCw0LvQuNC00LDRhtC40Lgg0YTQvtGA0LzRiyDQv9C+0LrRg9C/0LrQuCDQsNCx0L7QvdC10LzQtdC90YLQsFxuICBsZXQgYnV5Q2FyZFZhbGlkYXRpb25SZXN1bHQgPSBmYWxzZTtcblxuXG4gIC8v0LLQsNC70LjQtNCw0YbQuNGPINC30L3QsNGH0LXQvdC40Y8g0LjQvdC/0YPRgtCwINC90L7QvNC10YDQsCDQutCw0YDRgtGLXG4gIGJ1eUNhcmROdW1iZXJFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAoYnV5Q2FyZE51bWJlclZhbHVlID09PSAnJykge1xuICAgIGJ1eUNhcmROdW1iZXJJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBidXlDYXJkTnVtYmVyRXJyb3IudGV4dENvbnRlbnQgPSAnRmlsbCBpbiB0aGUgZmllbGQnO1xuICAgIGJ1eUNhcmRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICgvW0EtWmEtetCQLdCv0LAt0Y/QgdGRXS8udGVzdChidXlDYXJkTnVtYmVyVmFsdWUpKSB7XG4gICAgYnV5Q2FyZE51bWJlcklucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGJ1eUNhcmROdW1iZXJFcnJvci50ZXh0Q29udGVudCA9ICdDYXJkIG51bWJlciBjYW5ub3QgY29udGFpbiBsZXR0ZXJzJztcbiAgICBidXlDYXJkVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoYnV5Q2FyZE51bWJlclZhbHVlLmxlbmd0aCAhPT0gMTYpIHtcbiAgICBidXlDYXJkTnVtYmVySW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYnV5Q2FyZE51bWJlckVycm9yLnRleHRDb250ZW50ID0gJ0NhcmQgbnVtYmVyIG11c3QgY29udGFpbiAxNiBkaWdpdHMnO1xuICAgIGJ1eUNhcmRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBidXlDYXJkTnVtYmVySW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgYnV5Q2FyZE51bWJlcklucC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuICB9O1xuXG5cblxuICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDQt9C90LDRh9C10L3QuNGPIDIg0LjQvdC/0YPRgtCwIEV4cGlyYXRpb24gY29kZVxuICBidXlDYXJkRXhwQ29kZUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gIGlmIChidXlDYXJkRXhwQ29kZVNlY29uZFZhbHVlID09PSAnJykge1xuICAgIGJ1eUNhcmRFeHBDb2RlU2Vjb25kSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYnV5Q2FyZEV4cENvZGVFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgYnV5Q2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICAgIGJ1eUNhcmRFeHBDb2RlU2Vjb25kSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIH0gZWxzZSBpZiAoL1tBLVphLXrQkC3Qr9CwLdGP0IHRkV0vLnRlc3QoYnV5Q2FyZEV4cENvZGVTZWNvbmRWYWx1ZSkpIHtcbiAgICBidXlDYXJkRXhwQ29kZVNlY29uZElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGJ1eUNhcmRFeHBDb2RlRXJyb3IudGV4dENvbnRlbnQgPSAnRXhwaXJhdGlvbiBjb2RlIGNhbm5vdCBjb250YWluIGxldHRlcnMnO1xuICAgIGJ1eUNhcmRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcbiAgICBidXlDYXJkRXhwQ29kZVNlY29uZElucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICB9IGVsc2UgaWYgKGJ1eUNhcmRFeHBDb2RlU2Vjb25kVmFsdWUubGVuZ3RoICE9PSAyKSB7XG4gICAgYnV5Q2FyZEV4cENvZGVTZWNvbmRJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBidXlDYXJkRXhwQ29kZUVycm9yLnRleHRDb250ZW50ID0gJ0V4cGlyYXRpb24gY29kZSBtdXN0IGNvbnRhaW4gMiBkaWdpdHMnO1xuICAgIGJ1eUNhcmRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcbiAgICBidXlDYXJkRXhwQ29kZVNlY29uZElucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICB9IGVsc2Uge1xuICAgIGJ1eUNhcmRFeHBDb2RlU2Vjb25kSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgYnV5Q2FyZEV4cENvZGVTZWNvbmRJbnAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcbiAgfTtcblxuXG4gIC8v0LLQsNC70LjQtNCw0YbQuNGPINC30L3QsNGH0LXQvdC40Y8gMSDQuNC90L/Rg9GC0LAgRXhwaXJhdGlvbiBjb2RlXG4gIGJ1eUNhcmRFeHBDb2RlRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgaWYgKGJ1eUNhcmRFeHBDb2RlRmlyc3RWYWx1ZSA9PT0gJycpIHtcbiAgICBidXlDYXJkRXhwQ29kZUZpcnN0SW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYnV5Q2FyZEV4cENvZGVFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgYnV5Q2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICAgIGJ1eUNhcmRFeHBDb2RlRmlyc3RJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgfSBlbHNlIGlmICgvW0EtWmEtetCQLdCv0LAt0Y/QgdGRXS8udGVzdChidXlDYXJkRXhwQ29kZUZpcnN0VmFsdWUpKSB7XG4gICAgYnV5Q2FyZEV4cENvZGVGaXJzdElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGJ1eUNhcmRFeHBDb2RlRXJyb3IudGV4dENvbnRlbnQgPSAnRXhwaXJhdGlvbiBjb2RlIGNhbm5vdCBjb250YWluIGxldHRlcnMnO1xuICAgIGJ1eUNhcmRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcbiAgICBidXlDYXJkRXhwQ29kZUZpcnN0SW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIH0gZWxzZSBpZiAoYnV5Q2FyZEV4cENvZGVGaXJzdFZhbHVlLmxlbmd0aCAhPT0gMikge1xuICAgIGJ1eUNhcmRFeHBDb2RlRmlyc3RJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBidXlDYXJkRXhwQ29kZUVycm9yLnRleHRDb250ZW50ID0gJ0V4cGlyYXRpb24gY29kZSBtdXN0IGNvbnRhaW4gMiBkaWdpdHMnO1xuICAgIGJ1eUNhcmRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcbiAgICBidXlDYXJkRXhwQ29kZUZpcnN0SW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIH0gZWxzZSB7XG4gICAgYnV5Q2FyZEV4cENvZGVGaXJzdElucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIGJ1eUNhcmRFeHBDb2RlRmlyc3RJbnAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcbiAgfTtcblxuXG4gIC8v0LLQsNC70LjQtNCw0YbQuNGPINC30L3QsNGH0LXQvdC40Y8gMiDQuNC90L/Rg9GC0LAgRXhwaXJhdGlvbiBjb2RlXG4gIGJ1eUNhcmRFeHBDb2RlRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgaWYgKGJ1eUNhcmRFeHBDb2RlU2Vjb25kVmFsdWUgPT09ICcnKSB7XG4gICAgYnV5Q2FyZEV4cENvZGVTZWNvbmRJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBidXlDYXJkRXhwQ29kZUVycm9yLnRleHRDb250ZW50ID0gJ0ZpbGwgaW4gdGhlIGZpZWxkJztcbiAgICBidXlDYXJkVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gICAgYnV5Q2FyZEV4cENvZGVTZWNvbmRJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgfSBlbHNlIGlmICgvW0EtWmEtetCQLdCv0LAt0Y/QgdGRXS8udGVzdChidXlDYXJkRXhwQ29kZVNlY29uZFZhbHVlKSkge1xuICAgIGJ1eUNhcmRFeHBDb2RlU2Vjb25kSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYnV5Q2FyZEV4cENvZGVFcnJvci50ZXh0Q29udGVudCA9ICdFeHBpcmF0aW9uIGNvZGUgY2Fubm90IGNvbnRhaW4gbGV0dGVycyc7XG4gICAgYnV5Q2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICAgIGJ1eUNhcmRFeHBDb2RlU2Vjb25kSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIH0gZWxzZSBpZiAoYnV5Q2FyZEV4cENvZGVTZWNvbmRWYWx1ZS5sZW5ndGggIT09IDIpIHtcbiAgICBidXlDYXJkRXhwQ29kZVNlY29uZElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGJ1eUNhcmRFeHBDb2RlRXJyb3IudGV4dENvbnRlbnQgPSAnRXhwaXJhdGlvbiBjb2RlIG11c3QgY29udGFpbiAyIGRpZ2l0cyc7XG4gICAgYnV5Q2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICAgIGJ1eUNhcmRFeHBDb2RlU2Vjb25kSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIH0gZWxzZSB7XG4gICAgYnV5Q2FyZEV4cENvZGVTZWNvbmRJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICBidXlDYXJkRXhwQ29kZVNlY29uZElucC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuICB9O1xuXG5cblxuICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQsCBDVkNcbiAgYnV5Q2FyZENWQ0Vycm9yLnRleHRDb250ZW50ID0gJyc7XG4gIGlmIChidXlDYXJkQ1ZDVmFsdWUgPT09ICcnKSB7XG4gICAgYnV5Q2FyZENWQ0lucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGJ1eUNhcmRDVkNFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgYnV5Q2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICAgIGJ1eUNhcmRDVkNJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgfSBlbHNlIGlmICgvW0EtWmEtetCQLdCv0LAt0Y/QgdGRXS8udGVzdChidXlDYXJkQ1ZDVmFsdWUpKSB7XG4gICAgYnV5Q2FyZENWQ0lucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGJ1eUNhcmRDVkNFcnJvci50ZXh0Q29udGVudCA9ICdDVkMgY2Fubm90IGNvbnRhaW4gbGV0dGVycyc7XG4gICAgYnV5Q2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICAgIGJ1eUNhcmRDVkNJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgfSBlbHNlIGlmIChidXlDYXJkQ1ZDVmFsdWUubGVuZ3RoICE9PSAzKSB7XG4gICAgYnV5Q2FyZENWQ0lucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGJ1eUNhcmRDVkNFcnJvci50ZXh0Q29udGVudCA9ICdDVkMgbXVzdCBjb250YWluIDMgZGlnaXRzJztcbiAgICBidXlDYXJkVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gICAgYnV5Q2FyZENWQ0lucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICB9IGVsc2Uge1xuICAgIGJ1eUNhcmRDVkNJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICBidXlDYXJkQ1ZDSW5wLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gIH07XG5cblxuXG4gIC8v0LLQsNC70LjQtNCw0YbQuNGPINC30L3QsNGH0LXQvdC40Y8g0LjQvdC/0YPRgtCwINC40LzQtdC90LhcbiAgYnV5Q2FyZEhvbGRlckVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gIGlmIChidXlDYXJkSG9sZGVyVmFsdWUgPT09ICcnKSB7XG4gICAgYnV5Q2FyZEhvbGRlcklucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGJ1eUNhcmRIb2xkZXJFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgYnV5Q2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKC9b0JAt0K/QsC3Rj10vLnRlc3QoYnV5Q2FyZEhvbGRlclZhbHVlKSkge1xuICAgIGJ1eUNhcmRIb2xkZXJJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBidXlDYXJkSG9sZGVyRXJyb3IudGV4dENvbnRlbnQgPSAnTmFtZSBtdXN0IGJlIGluIEVuZ2xpc2gnO1xuICAgIGJ1eUNhcmRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICghL1tBLVphLXpdLy50ZXN0KGJ1eUNhcmRIb2xkZXJWYWx1ZSkpIHtcbiAgICBidXlDYXJkSG9sZGVySW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYnV5Q2FyZEhvbGRlckVycm9yLnRleHRDb250ZW50ID0gJ05hbWUgY2Fubm90IGNvbnRhaW4gbnVtYmVycyc7XG4gICAgYnV5Q2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGJ1eUNhcmRIb2xkZXJJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICBidXlDYXJkSG9sZGVySW5wLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gIH07XG5cblxuICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQsCDQv9C+0YfRgtC+0LLQvtCz0L4g0LjQvdC00LXQutGB0LBcbiAgYnV5Q2FyZFBvc3RhbEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gIGlmIChidXlDYXJkUG9zdGFsVmFsdWUgPT09ICcnKSB7XG4gICAgYnV5Q2FyZFBvc3RhbElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGJ1eUNhcmRQb3N0YWxFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgYnV5Q2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKC9bQS1aYS160JAt0K/QsC3Rj9CB0ZFdLy50ZXN0KGJ1eUNhcmRQb3N0YWxWYWx1ZSkpIHtcbiAgICBidXlDYXJkUG9zdGFsSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYnV5Q2FyZFBvc3RhbEVycm9yLnRleHRDb250ZW50ID0gJ1Bvc3RhbCBjb2RlIG11c3Qgbm90IGNvbnRhaW4gbGV0dGVycyc7XG4gICAgYnV5Q2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGJ1eUNhcmRQb3N0YWxWYWx1ZS5sZW5ndGggIT09IDYpIHtcbiAgICBidXlDYXJkUG9zdGFsSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYnV5Q2FyZFBvc3RhbEVycm9yLnRleHRDb250ZW50ID0gJ1ppcCBjb2RlIGxlbmd0aCBtdXN0IGJlIDYgZGlnaXRzJztcbiAgICBidXlDYXJkVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYnV5Q2FyZFBvc3RhbElucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIGJ1eUNhcmRQb3N0YWxJbnAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcbiAgfTtcblxuXG5cbiAgLy/QstCw0LvQuNC00LDRhtC40Y8g0LfQvdCw0YfQtdC90LjRjyDQuNC90L/Rg9GC0LAg0LPQvtGA0L7QtNCwXG4gIGJ1eUNhcmRDaXR5RXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgaWYgKGJ1eUNhcmRDaXR5VmFsdWUgPT09ICcnKSB7XG4gICAgYnV5Q2FyZENpdHlJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBidXlDYXJkQ2l0eUVycm9yLnRleHRDb250ZW50ID0gJ0ZpbGwgaW4gdGhlIGZpZWxkJztcbiAgICBidXlDYXJkVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoL1vQkC3Qr9CwLdGPXS8udGVzdChidXlDYXJkQ2l0eVZhbHVlKSkge1xuICAgIGJ1eUNhcmRDaXR5SW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYnV5Q2FyZENpdHlFcnJvci50ZXh0Q29udGVudCA9ICdDaXR5IG11c3QgYmUgaW4gRW5nbGlzaCc7XG4gICAgYnV5Q2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKCEvW0EtWmEtel0vLnRlc3QoYnV5Q2FyZENpdHlWYWx1ZSkpIHtcbiAgICBidXlDYXJkQ2l0eUlucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGJ1eUNhcmRDaXR5RXJyb3IudGV4dENvbnRlbnQgPSAnQ2l0eSBjYW5ub3QgY29udGFpbiBudW1iZXJzJztcbiAgICBidXlDYXJkVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYnV5Q2FyZENpdHlJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICBidXlDYXJkQ2l0eUlucC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuICB9O1xuXG5cblxuICAvL9C10YHQu9C4INC10YHRgtGMINC+0YjQuNCx0LrQsCDQsiDQstCw0LvQuNC00LDRhtC40LgsINGC0L4g0LfQsNC90L7QstC+INC/0YDQvtC50YLQuNGB0Ywg0L/QviDQstGB0LXQvCDQt9C90LDRh9C10L3QuNGP0Lwg0LjQvdC/0YPRgtCw0LxcbiAgaWYgKGJ1eUNhcmRWYWxpZGF0aW9uUmVzdWx0ID09PSB0cnVlKSB7XG5cbiAgICByZXR1cm47XG5cbiAgfTtcblxuICAvL9C/0L7RgdC70LUg0YPRgdC/0LXRiNC90L7QuSDQstCw0LvQuNC00LDRhtC40Lgg0L/QvtC60YPQv9C60Lgg0LDQsdC+0L3QtdC80LXQvdGC0LBcblxuICAvL9C30LDQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINC/0L7QutGD0L/QutC4INCw0LHQvtC90LXQvNC10L3RgtCwXG4gIGNvbnN0IGJ1eUNhcmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXktY2FyZC1tb2RhbCcpO1xuICBjb25zdCBidXlDYXJkTW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1eS1jYXJkLW92ZXJsYXknKTtcbiAgY29uc3QgYnV5Q2FyZE1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXktY2FyZC1jb250ZW50Jyk7XG4gIGxldCBidXlDYXJkT3Blbk1vZGFsID0gdHJ1ZTtcblxuICBidXlDYXJkTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYnV5LWNhcmQtbW9kYWwtLWFjdGl2ZScpO1xuICBidXlDYXJkTW9kYWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2J1eS1jYXJkLW92ZXJsYXktLWFjdGl2ZScpO1xuICBidXlDYXJkTW9kYWxDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2J1eS1jYXJkLWNvbnRlbnQtLWFjdGl2ZScpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0b3Atc2Nyb2xsJyk7XG4gIGJ1eUNhcmRPcGVuTW9kYWwgPSBmYWxzZTtcblxuXG4gIC8v0L/RgNC40L3Rg9C00LjRgtC10LvRjNC90L4g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0Ywg0YHRgtGA0LDQvdC40YbRg1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcblxuXG4gIC8v0YHQvtGF0YDQsNC90LjRgtGMINCyINCR0JQg0LTQsNGC0YfQuNC6INGD0YHQv9C10YjQvdC+0Lkg0L/QvtC60YPQv9C60Lgg0LDQsdC+0L3QtdC80LXQvdGC0LBcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJTdWJzY3JpcHRpb24nLCB0cnVlKTtcblxuXG5cbiAgLy/RgdCx0YDQvtGB0LjRgtGMINCy0YHQtSDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQvtCyXG4gIGJ1eUNhcmROdW1iZXJJbnAudmFsdWUgPSAnJztcbiAgYnV5Q2FyZE51bWJlcklucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICBidXlDYXJkRXhwQ29kZUZpcnN0SW5wLnZhbHVlID0gJyc7XG4gIGJ1eUNhcmRFeHBDb2RlRmlyc3RJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgYnV5Q2FyZEV4cENvZGVTZWNvbmRJbnAudmFsdWUgPSAnJztcbiAgYnV5Q2FyZEV4cENvZGVTZWNvbmRJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgYnV5Q2FyZENWQ0lucC52YWx1ZSA9ICcnO1xuICBidXlDYXJkQ1ZDSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIGJ1eUNhcmRIb2xkZXJJbnAudmFsdWUgPSAnJztcbiAgYnV5Q2FyZEhvbGRlcklucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICBidXlDYXJkUG9zdGFsSW5wLnZhbHVlID0gJyc7XG4gIGJ1eUNhcmRQb3N0YWxJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgYnV5Q2FyZENpdHlJbnAudmFsdWUgPSAnJztcbiAgYnV5Q2FyZENpdHlJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbn0pO1xuXG5cblxuXG4vL9C+0YLQvNC10L3QuNGC0Ywg0LTQtdGE0L7Qu9GC0L3QvtC1INC/0L7QstC10LTQtdC90LjQtSDQutC90L7Qv9C60Lgg0L/RgNC4INGB0LDQsdC80LjRgtC1XG5idXlDYXJkRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuXG4gIGUucHJldmVudERlZmF1bHQoKTtcblxufSk7XG5cbiJdfQ==
