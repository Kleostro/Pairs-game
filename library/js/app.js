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


// // Описание PR

// console.log(`
//     1. Task: (https://github.com/rolling-scopes-school/tasks/blob/master/tasks/library/library-part1.md)
//     \n
//     2. Deploy: (https://rolling-scopes-school.github.io/kleostro-JSFEPRESCHOOL2023Q2/library/)
//     \n
//     3. Done 19.07.2023 / deadline 31.07.2023
//     \n
//     4. Score: 100 / 100
// `);

// // Скрипт для проверки количества тегов

// console.log(`
//     Небольшой бонус для ревьюеров :)
//     \n
//     Список используемых тегов в верстке:
// `);

// selectors = ['header',
//   'main',
//   'footer',
//   'section',
//   'nav',
//   'ul',
//   'li',
//   'a',
//   'button',
//   'form',
//   'input',
//   'label',
//   'h1',
//   'h2',
//   'h3',
//   'h4',
//   'p',
//   'div',
//   'article',
//   'span',
//   'img',
//   'svg',
//   'time',
// ];

// let total = 0;
// selectors.forEach((selector) => {
//   const count = Array.from(document.querySelectorAll(selector)).length;
//   console.log(`${selector}:  ${count}`);
//   if (count > 0) total++;
// });
// console.log('Total unique: ', total);

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
};



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
        <span class="info-list-count">${localStorage.getItem('userVisits')}</span>
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
        <span class="info-list-count">2</span>
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

  const profileVisits = document.querySelector('.profile-modal__list-count');
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


  //создать счетчик визитов юзера и присвоить в него значение из БД
  let userVisits = Number(localStorage.getItem('userVisits'));

  //увеличить кол-во визитов юзера на 1
  upUserVisits(userVisits);

  //если юзер уже зарегистрирован
  if(localStorage.getItem('userRegistered')) {

    //удалить из БД счетчик визитов
    localStorage.removeItem('userVisits');

      //создать счетчик визитов юзера и присвоить в него значение из БД
    let userVisits = Number(localStorage.getItem('userVisits'));

    //увеличить кол-во визитов юзера на 1
    upUserVisits(userVisits);

  };


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
    let cardNameValue = cardNameInp.value.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()}) //каждое слово начинается с буквы в верхнем регистре
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
    checkCardBox.innerHTML =  `
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
          <span class="info-list-count">1</span>
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
          <span class="info-list-count">2</span>
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudEJ0bi5qcyIsImNvbXBvbmVudHMvYnVyZ2VyLmpzIiwiY29tcG9uZW50cy9pbmRleC5qcyIsImNvbXBvbmVudHMvbW9kYWwuanMiLCJjb21wb25lbnRzL3N3aXBlci5qcyIsImNvbXBvbmVudHMvdGFicy5qcyIsImNvbXBvbmVudHMvdXNlckFmdGVyUmVnaXN0ZXIuanMiLCJjb21wb25lbnRzL3ZhbGlkYXRpb25Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhY2NvdW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2J0bicpO1xuY29uc3QgYWNjb3VudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fbGlzdCcpO1xuXG5pZiAoYWNjb3VudEJ0bikge1xuXG4gIGFjY291bnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWNjb3VudF9fbGlzdCcpICYmICFlLnRhcmdldC5jbG9zZXN0KCcuYWNjb3VudF9fbGlzdCcpICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY291bnRfX2J0bicpKSB7XG5cbiAgICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICAgIH07XG4gIH0pO1xufTtcblxuXG5cbmlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyUmVnaXN0ZXJlZCcpICE9PSAndHJ1ZScgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJBdXRob3JpemVkJykgIT09ICd0cnVlJyB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclJlZ2lzdGVyZWQnKSA9PT0gJ3RydWUnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyQXV0aG9yaXplZCcpICE9PSAndHJ1ZScpIHtcblxuICBhY2NvdW50QnRuLmlubmVySFRNTCA9IGBcbiAgPHN2Zz5cbiAgICA8dXNlIHhsaW5rOmhyZWY9XCJpbWcvc3ByaXRlLnN2ZyNhY2NvdW50XCI+PC91c2U+XG4gIDwvc3ZnPlxuICBgXG4gIGFjY291bnRMaXN0LmlubmVySFRNTCA9IGBcbiAgICA8c3Ryb25nIGNsYXNzPVwiYWNjb3VudF9fbGlzdC10ZXh0XCI+UHJvZmlsZTwvc3Ryb25nPlxuICAgIDxsaSBjbGFzcz1cImFjY291bnRfX2xpc3QtaXRlbVwiPjxidXR0b24gY2xhc3M9XCJhY2NvdW50X19saXN0LWJ1dHRvbiBhY2NvdW50X19saXN0LWJ1dHRvbi1sb2dpbiBidG4tcmVzZXRcIj5Mb2cgSW48L2J1dHRvbj48L2xpPlxuICAgIDxsaSBjbGFzcz1cImFjY291bnRfX2xpc3QtaXRlbVwiPjxidXR0b24gY2xhc3M9XCJhY2NvdW50X19saXN0LWJ1dHRvbiBhY2NvdW50X19saXN0LWJ1dHRvbi1yZWdpc3RlciBidG4tcmVzZXRcIj5SZWdpc3RlcjwvYnV0dG9uPjwvbGk+XG4gIGBcbn07XG4iLCJjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcblxuaWYgKGJ1cmdlcikge1xuXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcbiAgY29uc3QgbWVudUxpbmtzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fbGlzdC1saW5rXCIpO1xuXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJidXJnZXItLWFjdGl2ZVwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJzdG9wLXNjcm9sbFwiKTtcblxuICB9KTtcblxuICAgIG1lbnVMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlci0tYWN0aXZlXCIpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3RvcC1zY3JvbGxcIik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJnZXJcIikgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoXCIubmF2X19saXN0XCIpKSB7XG5cbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiYnVyZ2VyLS1hY3RpdmVcIik7XG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInN0b3Atc2Nyb2xsXCIpO1xuICAgIH07XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAyNykge1xuXG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcImJ1cmdlci0tYWN0aXZlXCIpO1xuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LS1hY3RpdmVcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzdG9wLXNjcm9sbFwiKTtcblxuICAgIH07XG4gIH0pO1xufTtcblxuIiwiLy8g0J/Qu9Cw0LLQvdGL0Lkg0YHQutGA0L7Qu9C7INC/0L4g0Y/QutC+0YDRj9C8XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCInKS5mb3JFYWNoKGxpbmsgPT4ge1xuXG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHJpbmcoMSk7XG5cbiAgICBjb25zdCBzY3JvbGxUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmKTtcbiAgICAvLyBjb25zdCB0b3BPZmZzZXQgPSA5MDtcbiAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSBzY3JvbGxUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnN0IG9mZnNldFBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uO1xuXG4gICAgd2luZG93LnNjcm9sbEJ5KHtcbiAgICAgIHRvcDogb2Zmc2V0UG9zaXRpb24sXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG4vLyAvLyDQntC/0LjRgdCw0L3QuNC1IFBSXG5cbi8vIGNvbnNvbGUubG9nKGBcbi8vICAgICAxLiBUYXNrOiAoaHR0cHM6Ly9naXRodWIuY29tL3JvbGxpbmctc2NvcGVzLXNjaG9vbC90YXNrcy9ibG9iL21hc3Rlci90YXNrcy9saWJyYXJ5L2xpYnJhcnktcGFydDEubWQpXG4vLyAgICAgXFxuXG4vLyAgICAgMi4gRGVwbG95OiAoaHR0cHM6Ly9yb2xsaW5nLXNjb3Blcy1zY2hvb2wuZ2l0aHViLmlvL2tsZW9zdHJvLUpTRkVQUkVTQ0hPT0wyMDIzUTIvbGlicmFyeS8pXG4vLyAgICAgXFxuXG4vLyAgICAgMy4gRG9uZSAxOS4wNy4yMDIzIC8gZGVhZGxpbmUgMzEuMDcuMjAyM1xuLy8gICAgIFxcblxuLy8gICAgIDQuIFNjb3JlOiAxMDAgLyAxMDBcbi8vIGApO1xuXG4vLyAvLyDQodC60YDQuNC/0YIg0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0LrQvtC70LjRh9C10YHRgtCy0LAg0YLQtdCz0L7QslxuXG4vLyBjb25zb2xlLmxvZyhgXG4vLyAgICAg0J3QtdCx0L7Qu9GM0YjQvtC5INCx0L7QvdGD0YEg0LTQu9GPINGA0LXQstGM0Y7QtdGA0L7QsiA6KVxuLy8gICAgIFxcblxuLy8gICAgINCh0L/QuNGB0L7QuiDQuNGB0L/QvtC70YzQt9GD0LXQvNGL0YUg0YLQtdCz0L7QsiDQsiDQstC10YDRgdGC0LrQtTpcbi8vIGApO1xuXG4vLyBzZWxlY3RvcnMgPSBbJ2hlYWRlcicsXG4vLyAgICdtYWluJyxcbi8vICAgJ2Zvb3RlcicsXG4vLyAgICdzZWN0aW9uJyxcbi8vICAgJ25hdicsXG4vLyAgICd1bCcsXG4vLyAgICdsaScsXG4vLyAgICdhJyxcbi8vICAgJ2J1dHRvbicsXG4vLyAgICdmb3JtJyxcbi8vICAgJ2lucHV0Jyxcbi8vICAgJ2xhYmVsJyxcbi8vICAgJ2gxJyxcbi8vICAgJ2gyJyxcbi8vICAgJ2gzJyxcbi8vICAgJ2g0Jyxcbi8vICAgJ3AnLFxuLy8gICAnZGl2Jyxcbi8vICAgJ2FydGljbGUnLFxuLy8gICAnc3BhbicsXG4vLyAgICdpbWcnLFxuLy8gICAnc3ZnJyxcbi8vICAgJ3RpbWUnLFxuLy8gXTtcblxuLy8gbGV0IHRvdGFsID0gMDtcbi8vIHNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuLy8gICBjb25zdCBjb3VudCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmxlbmd0aDtcbi8vICAgY29uc29sZS5sb2coYCR7c2VsZWN0b3J9OiAgJHtjb3VudH1gKTtcbi8vICAgaWYgKGNvdW50ID4gMCkgdG90YWwrKztcbi8vIH0pO1xuLy8gY29uc29sZS5sb2coJ1RvdGFsIHVuaXF1ZTogJywgdG90YWwpO1xuIiwiY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuLy/QtdGB0LvQuCDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0LXRgdGC0Ywg0Y3Qu9C10LzQtdC90YIg0YEg0LrQu9Cw0YHRgdC+0LwgbW9kYWwsINCy0YvQv9C+0LvQvdC40YLRjCDRgdC70LXQtNGD0Y7RidC40Lkg0LrQvtC0OlxuaWYgKG1vZGFsKSB7XG5cbiAgLy/QvdCw0LnRgtC4INCy0YHQtSDRjdC70LXQvNC10L3RgtGLLCDQutC+0YLQvtGA0YvQtSDQvtGC0YHQvdC+0YHRj9GC0YHRjyDQuiDQvNC+0LTQsNC70LrQtSDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gIGNvbnN0IHJlZ2lzdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXItbW9kYWwnKTtcbiAgY29uc3QgcmVnaXN0ZXJNb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXItb3ZlcmxheScpO1xuICBjb25zdCByZWdpc3Rlck1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1jb250ZW50Jyk7XG5cbiAgLy/QuNC90LTQuNC60LDRgtC+0YAg0L7RgtC60YDRi9GC0L7QuSDQvNC+0LTQsNC70LrQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gIGxldCByZWdpc3Rlck9wZW5Nb2RhbCA9IGZhbHNlO1xuXG4gIC8v0L3QsNC50YLQuCDQstGB0LUg0LrQvdC+0L/QutC4LCDQutC+0YLQvtGA0YvQtSDQvtGC0L3QvtGB0Y/RgtGB0Y8g0Log0LzQvtC00LDQu9C60LUg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBjb25zdCByZWdpc3Rlck1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19idG4nKTtcbiAgY29uc3QgYWNjb3VudFJlZ2lzdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2xpc3QtYnV0dG9uLXJlZ2lzdGVyJyk7XG4gIGNvbnN0IENhcmRSZWdpc3RlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19yaWdodC1idG4tcmVnaXN0ZXInKTtcbiAgY29uc3QgcmVnaXN0ZXJNb2RhbEJ0bkxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19idG4tbG9naW4nKTtcblxuXG5cbiAgLy/QvdCw0LnRgtC4INCy0YHQtSDRjdC70LXQvNC10L3RgtGLLCDQutC+0YLQvtGA0YvQtSDQvtGC0L3QvtGB0Y/RgtGB0Y8g0Log0LzQvtC00LDQu9C60LUg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICBjb25zdCBsb2dJbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLW1vZGFsJyk7XG4gIGNvbnN0IGxvZ0luTW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLW92ZXJsYXknKTtcbiAgY29uc3QgbG9nSW5Nb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tY29udGVudCcpO1xuXG4gIC8v0LjQvdC00LjQutCw0YLQvtGAINC+0YLQutGA0YvRgtC+0Lkg0LzQvtC00LDQu9C60Lgg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICBsZXQgbG9nSW5PcGVuTW9kYWwgPSBmYWxzZTtcblxuICAvL9C90LDQudGC0Lgg0LLRgdC1INC60L3QvtC/0LrQuCwg0LrQvtGC0L7RgNGL0LUg0L7RgtC90L7RgdGP0YLRgdGPINC6INC80L7QtNCw0LvQutC1INCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgY29uc3QgYWNjb3VudExvZ0luQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2xpc3QtYnV0dG9uLWxvZ2luJyk7XG4gIGNvbnN0IGNhcmRMb2dJbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19yaWdodC1idG4tbG9naW4nKTtcbiAgY29uc3QgbG9nSW5Nb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1tb2RhbF9fYnRuJyk7XG4gIGNvbnN0IGxvZ0luTW9kYWxCdG5SZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1tb2RhbF9fYnRuLXJlZ2lzdGVyJyk7XG5cblxuXG4gIC8v0YTRg9C90LrRhtC40Y8g0L7RgtC60YDRi9GC0LjRjyDQvNC+0LTQsNC70LrQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gIGNvbnN0IG9wZW5Nb2RhbFJlZ2lzdGVyID0gKCkgPT4ge1xuICAgIHJlZ2lzdGVyTW9kYWwuY2xhc3NMaXN0LmFkZCgncmVnaXN0ZXItbW9kYWwtLWFjdGl2ZScpO1xuICAgIHJlZ2lzdGVyTW9kYWxPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyLW92ZXJsYXktLWFjdGl2ZScpO1xuICAgIHJlZ2lzdGVyTW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyLWNvbnRlbnQtLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc3RvcC1zY3JvbGwnKTtcbiAgICByZWdpc3Rlck9wZW5Nb2RhbCA9IHRydWU7XG4gIH07XG5cbiAgLy/RhNGD0L3QutGG0LjRjyDQt9Cw0LrRgNGL0YLQuNGPINC80L7QtNCw0LvQutC4INGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgY29uc3QgY2xvc2VNb2RhbFJlZ2lzdGVyID0gKCkgPT4ge1xuICAgIHJlZ2lzdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgncmVnaXN0ZXItbW9kYWwtLWFjdGl2ZScpO1xuICAgIHJlZ2lzdGVyTW9kYWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZ2lzdGVyLW92ZXJsYXktLWFjdGl2ZScpO1xuICAgIHJlZ2lzdGVyTW9kYWxDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZ2lzdGVyLWNvbnRlbnQtLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKTtcbiAgICByZWdpc3Rlck9wZW5Nb2RhbCA9IGZhbHNlO1xuICAgIHJlZ2lzdGVyTmFtZUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgcmVnaXN0ZXJOYW1lSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJTdXJOYW1lRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICByZWdpc3RlclN1ck5hbWVJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICByZWdpc3RlckVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICByZWdpc3RlckVtYWlsSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJQYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgcmVnaXN0ZXJQYXNzd29yZElucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICB9O1xuXG5cblxuICAvL9GE0YPQvdC60YbQuNGPINC+0YLQutGA0YvRgtC40Y8g0LzQvtC00LDQu9C60Lgg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICBjb25zdCBvcGVuTW9kYWxMb2dJbiA9ICgpID0+IHtcbiAgICBsb2dJbk1vZGFsLmNsYXNzTGlzdC5hZGQoJ2xvZ2luLW1vZGFsLS1hY3RpdmUnKTtcbiAgICBsb2dJbk1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdsb2dpbi1vdmVybGF5LS1hY3RpdmUnKTtcbiAgICBsb2dJbk1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdsb2dpbi1jb250ZW50LS1hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3N0b3Atc2Nyb2xsJyk7XG4gICAgbG9nSW5PcGVuTW9kYWwgPSB0cnVlO1xuICB9O1xuXG4gIC8v0YTRg9C90LrRhtC40Y8g0LfQsNC60YDRi9GC0LjRjyDQvNC+0LTQsNC70LrQuCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG4gIGNvbnN0IGNsb3NlTW9kYWxMb2dJbiA9ICgpID0+IHtcbiAgICBsb2dJbk1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2xvZ2luLW1vZGFsLS1hY3RpdmUnKTtcbiAgICBsb2dJbk1vZGFsT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdsb2dpbi1vdmVybGF5LS1hY3RpdmUnKTtcbiAgICBsb2dJbk1vZGFsQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2dpbi1jb250ZW50LS1hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0b3Atc2Nyb2xsJyk7XG4gICAgbG9nSW5PcGVuTW9kYWwgPSBmYWxzZTtcbiAgICBhdXRob3JpemVkTG9naW5FcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGF1dGhvcml6ZWRMb2dpbklucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIGF1dGhvcml6ZWRQYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgYXV0aG9yaXplZFBhc3N3b3JkSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gIH07XG5cblxuXG4gIC8vINC10YHQu9C4INGO0LfQtdGAINC90LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9INC40LvQuCDQvdC1INCw0LLRgtC+0YDQuNC30L7QstCw0L0sINGC0L4g0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJSZWdpc3RlcmVkJykgIT09ICd0cnVlJyB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckF1dGhvcml6ZWQnKSAhPT0gJ3RydWUnKSB7XG5cbiAgICAvL9C/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDIFJlZ2lzdGVyINCyINC00YDQvtC/LdC70LjRgdGC0LUg0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICAgIGFjY291bnRSZWdpc3RlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBvcGVuTW9kYWxSZWdpc3RlcigpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy/Qv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRgyBTaWduIFVwINCyINGB0LXQutGG0LjQuCBjYXJkINC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgICBDYXJkUmVnaXN0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgb3Blbk1vZGFsUmVnaXN0ZXIoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBhY2NvdW50TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvdW50X19saXN0LS1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8v0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutGA0LXRgdGC0LjQuiDQsiDQvNC+0LTQsNC70LrQtSDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC30LDQutGA0YvRgtGMINC10LVcbiAgICByZWdpc3Rlck1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbFJlZ2lzdGVyKTtcblxuICAgIC8v0L/RgNC4INC+0YLQutGA0YvRgtC+0Lkg0LzQvtC00LDQu9C60LUg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQuCDQv9GA0Lgg0LvRjtCx0L7QvCDQutC70LjQutC1INCy0L3QtSDQvtCx0LvQsNGB0YLQuCDQt9Cw0LrRgNGL0YLRjCDQvNC+0LTQsNC70LrRgyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKHJlZ2lzdGVyT3Blbk1vZGFsID09PSB0cnVlICYmICFlLnRhcmdldC5jbG9zZXN0KCcubW9kYWxfX2NvbnRlbnQnKSkge1xuICAgICAgICBjbG9zZU1vZGFsUmVnaXN0ZXIoKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvL9C/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDIExvZ2luINCyINC80L7QtNCw0LvQutC1INGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0LfQsNC60YDRi9GC0Ywg0LXQtSDQuCDQvtGC0LrRgNGL0YLRjCDQvNC+0LTQsNC70LrRgyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG4gICAgcmVnaXN0ZXJNb2RhbEJ0bkxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNsb3NlTW9kYWxSZWdpc3RlcigpO1xuICAgICAgb3Blbk1vZGFsTG9nSW4oKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH07XG5cblxuXG4gIC8v0LXRgdC70Lgg0Y7Qt9C10YAg0L3QtSDQsNCy0YLQvtGA0LjQt9C+0LLQsNC9LCDRgtC+INC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyQXV0aG9yaXplZCcpICE9PSAndHJ1ZScpIHtcblxuICAgIC8v0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMgTG9nIEluINCyINC00YDQvtC/LdC70LjRgdGC0LUg0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICAgIGFjY291bnRMb2dJbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBvcGVuTW9kYWxMb2dJbigpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy/Qv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRgyBMb2cgSW4g0LIg0YHQtdC60YbQuNC4IGNhcmQg0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICAgIGNhcmRMb2dJbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBvcGVuTW9kYWxMb2dJbigpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy/Qv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60YDQtdGB0YLQuNC6INCyINC80L7QtNCw0LvQutC1INGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0LfQsNC60YDRi9GC0Ywg0LXQtVxuICAgIGxvZ0luTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsTG9nSW4pO1xuXG4gICAgLy/Qv9GA0Lgg0L7RgtC60YDRi9GC0L7QuSDQvNC+0LTQsNC70LrQtSDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4INC4INC/0YDQuCDQu9GO0LHQvtC8INC60LvQuNC60LUg0LLQvdC1INC+0LHQu9Cw0YHRgtC4INC30LDQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAobG9nSW5PcGVuTW9kYWwgPT09IHRydWUgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY29udGVudCcpKSB7XG4gICAgICAgIGNsb3NlTW9kYWxMb2dJbigpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIC8v0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMgUmVnaXN0ZXIg0LIg0LzQvtC00LDQu9C60LUg0LDQstGC0L7RgNC40LfQsNGG0LjQuCDQt9Cw0LrRgNGL0YLRjCDQtdC1INC4INC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgICBsb2dJbk1vZGFsQnRuUmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY2xvc2VNb2RhbExvZ0luKCk7XG4gICAgICBvcGVuTW9kYWxSZWdpc3RlcigpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgfTtcblxuXG5cbiAgLy/QtdGB0LvQuCDRjtC30LXRgCDQvdC1INCw0LLRgtC+0YDQuNC30LjRgNC+0LLQsNC9LCDRgtC+INC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0L/RgNC4INC60LvQuNC60LUg0L3QsCDQu9GO0LHRg9GOINC60L3QvtC/0LrRgyBidXkg0LIg0YHQtdC60YbQuNC4IGZhdm9yaXRlc1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJBdXRob3JpemVkJykgIT09ICd0cnVlJykge1xuXG4gICAgLy/QvdCw0LnRgtC4INCy0YHQtSDQutC90L7Qv9C60Lgg0LrQsNGA0YLQvtGH0LXQuiDQutC90LjQs1xuICAgIGNvbnN0IGZhdm9yaXRlc0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmF2b3JpdGVzLWNhcmRfX2J0bicpO1xuXG4gICAgLy/Qv9GA0L7QudGC0LjRgdGMINC/0L4g0LLRgdC10Lwg0LrQvdC+0L/QutCw0LxcbiAgICBmYXZvcml0ZXNCdG5zLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG5cbiAgICAgIC8v0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBvcGVuTW9kYWxMb2dJbigpO1xuXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn07XG5cblxuIiwiY29uc3Qgc3dpcGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXInKTtcblxuaWYoc3dpcGVycykge1xuICBuZXcgU3dpcGVyICgnLnN3aXBlcicsIHtcblxuICAgIGF1dG9wbGF5OiB7XG4gICAgICBkZWxheTogMzAwMCxcbiAgICB9LFxuXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDE6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjUsXG4gICAgICB9LFxuICAgICAgNzY5OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICBzcGFjZUJldHdlZW46IDI1LFxuICAgICAgfSxcbiAgICAgIDEyNzA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjUsXG4gICAgICB9XG4gICAgfSxcblxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQtYWJvdXQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldi1hYm91dCcsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcblxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiAnLmFib3V0X19wYWdpbmF0aW9uJyxcbiAgICAgIHR5cGU6ICdidWxsZXRzJyxcbiAgICAgIGJ1bGxldEFjdGl2ZUNsYXNzOiAnYWJvdXRfX3BhZ2luYXRpb24tYnVsbGV0LS1hY3RpdmUnLFxuICAgICAgYnVsbGV0Q2xhc3M6IFx0J2Fib3V0X19wYWdpbmF0aW9uLWJ1bGxldCcsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbiAgfSk7XG59O1xuIiwiY29uc3QgZmF2b3JpdGVzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdm9yaXRlcycpO1xuXG5pZiAoZmF2b3JpdGVzVGFiKSB7XG4gIGxldCB0YWJzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXRlc19fbGFiZWwnKTtcbiAgbGV0IHRhYkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmF2b3JpdGVzX19saXN0LWl0ZW0nKTtcblxuICB0YWJzQnRuLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IHBhdGggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wYXRoO1xuXG4gICAgICB0YWJzQnRuLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnZmF2b3JpdGVzX19sYWJlbC0tYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZXNfX2xhYmVsLS1hY3RpdmUnKTtcblxuICAgICAgdGFiSXRlbS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmF2b3JpdGVzX19saXN0LWl0ZW0tLWFjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGVzX19saXN0LWl0ZW0tLWFjdGl2ZScpO1xuICAgICAgICBpdGVtLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaXRlbS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS10YXJnZXRdOm5vdChbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdKWApLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZmF2b3JpdGVzX19saXN0LWl0ZW0tLWFjdGl2ZScpO1xuICAgICAgICAgIGl0ZW0uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgfSwgMCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCIvL9C10YHQu9C4INGO0LfQtdGAINC90LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9LCDRgtC+INC60L3QvtC/0LrQsCBDaGVjayB0aGUgY2FyZCDQvdC4INC6INGH0LXQvNGDINC90LUg0L/RgNC40LLQtdC00LXRglxuXG4vL9C90LDQudGC0Lgg0YTQvtGA0LzRgyDQuCDQutC90L7Qv9C60YMgQ2hlY2sgdGhlIGNhcmRcbmNvbnN0IGNoZWNrQ2FyZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1mb3JtJyk7XG5jb25zdCBjaGVja0NhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fZm9ybS1idG4nKTtcblxuXG4vL9C10YHQu9C4INGO0LfQtdGAINCd0JUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJSZWdpc3RlcmVkJykgIT09ICd0cnVlJykge1xuXG4gIGNoZWNrQ2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAvL9C+0YHRgtCw0L3QvtCy0LjRgtGMINGA0LDRgdC/0YDQvtGB0YLRgNCw0L3QtdC90LjQtSDQv9C+0LLQtdC00LXQvdC40Y8g0LrQvdC+0L/QutC4INGE0L7RgNC80YtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIH0pO1xuXG4gIC8v0L7RgtC80LXQvdC40YLRjCDQtNC10YTQvtC70YLQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1INC60L3QvtC/0LrQuCDQv9GA0Lgg0YHQsNCx0LzQuNGC0LVcbiAgY2hlY2tDYXJkRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIH0pO1xufTtcblxuXG5cblxuXG4vL9C/0L7RgdC70LUg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDRjtC30LXRgCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L0g0Jgg0LDQstGC0L7RgNC40LfQvtCy0LDQvVxuXG4vL9C10YHQu9C4INGO0LfQtdGAINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvSDQmCDQsNCy0YLQvtGA0LjQt9C+0LLQsNC9XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJSZWdpc3RlcmVkJykgPT09ICd0cnVlJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckF1dGhvcml6ZWQnKSA9PT0gJ3RydWUnKSB7XG5cbiAgLy/Qv9C+0LvRg9GH0LjRgtGMINC40L3QuNGG0LjQsNC70Ysg0Y7Qt9C10YDQsFxuICBsZXQgdXNlck5hbWVJbml0aWFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJOYW1lJyk7XG4gIGxldCB1c2VyU3VyTmFtZUluaXRpYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclN1ck5hbWUnKTtcbiAgbGV0IHVzZXJJbml0aWFscyA9IGAke3VzZXJOYW1lSW5pdGlhbFswXX0ke3VzZXJTdXJOYW1lSW5pdGlhbFswXX1gO1xuXG4gIGxldCBjYXJkQm94SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19jb250ZW50Jyk7XG5cbiAgY2FyZEJveEluZm8uaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiY2FyZF9fbGVmdCBmbGV4XCI+XG4gIDxoMyBjbGFzcz1cImNhcmRfX2xlZnQtc3VidGl0bGVcIj5Zb3VyIExpYnJhcnkgY2FyZDwvaDM+XG4gIDxkaXYgY2xhc3M9XCJjYXJkX19sZWZ0LWJvdHRvbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkX19sZWZ0LWluZm9cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZF9fbmFtZVwiPkJyb29rbHluIFB1YmxpYyBMaWJyYXJ5PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9IFwiY2FyZF9fdXNlci1uYW1lXCI+JHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKX0gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclN1ck5hbWUnKX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz0gXCJjYXJkX191c2VyLW51bWJlclwiPiR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmROdW1iZXInKX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPHVsIGNsYXNzPVwiY2FyZF9fbGVmdC1pbmZvLWxpc3QgbGlzdC1yZXNldCBpbmZvLWxpc3RcIj5cbiAgICAgIDxsaSBjbGFzcz1cImluZm8tbGlzdF9faXRlbVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tbGlzdC1uYW1lXCI+VmlzaXRzPC9zcGFuPlxuICAgICAgICA8c3ZnPlxuICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cImltZy9zcHJpdGUuc3ZnI3Zpc2l0c1wiPjwvdXNlPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWxpc3QtY291bnRcIj4ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVmlzaXRzJyl9PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImluZm8tbGlzdF9faXRlbVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tbGlzdC1uYW1lXCI+Qm9udXNlczwvc3Bhbj5cbiAgICAgICAgPHN2Zz5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCJpbWcvc3ByaXRlLnN2ZyNib251c2VzXCI+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tbGlzdC1jb3VudFwiPjEyNDA8L3NwYW4+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mby1saXN0X19pdGVtXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1saXN0LW5hbWVcIj5Cb29rczwvc3Bhbj5cbiAgICAgICAgPHN2Zz5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCJpbWcvc3ByaXRlLnN2ZyNib29rc1wiPjwvdXNlPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWxpc3QtY291bnRcIj4yPC9zcGFuPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImNhcmRfX3JpZ2h0IGZsZXhcIj5cbiAgPGgzIGNsYXNzPVwiY2FyZF9fcmlnaHQtc3VidGl0bGVcIj5WaXNpdCB5b3VyIHByb2ZpbGU8L2gzPlxuICA8cCBjbGFzcz1cImNhcmRfX3JpZ2h0LWRlc2NyXCI+V2l0aCBhIGRpZ2l0YWwgbGlicmFyeSBjYXJkIHlvdSBnZXQgZnJlZSBhY2Nlc3MgdG8gdGhlIExpYnJhcnnigJlzIHdpZGUgYXJyYXkgb2YgZGlnaXRhbCByZXNvdXJjZXMgaW5jbHVkaW5nIGUtYm9va3MsIGRhdGFiYXNlcywgZWR1Y2F0aW9uYWwgcmVzb3VyY2VzLCBhbmQgbW9yZS48L3A+XG4gIDxkaXYgY2xhc3M9XCJjYXJkX19yaWdodC1ib3R0b20gZmxleFwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4tcmVzZXQgY2FyZF9fcmlnaHQtYnRuIGNhcmRfX3JpZ2h0LWJ0bi1wcm9maWxlXCI+UHJvZmlsZTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuYFxuXG5cblxuICAvL9C10YHQu9C4INGO0LfQtdGA0L3QtdC50Lwg0LXRgdGC0Ywg0LIg0JHQlCwg0YLQviDQstC80LXRgdGC0L4g0YHQstCzINC40LrQvtC90LrQuCDQsiDQutC90L7Qv9C60LUg0Y7Qt9C10YDQsCDQstGB0YLQsNCy0LjRgtGMINC10LPQviDQuNC90LjRhtC40LDQu9GLXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKSkge1xuXG4gICAgLy/Qt9Cw0LzQtdC90LjRgtGMINGB0L7QtNC10YDQttC40LzRi9C5INC60L7QtCDQutC90L7Qv9C60Lgg0Y7Qt9C10YDQsCDQvdCwINC10LPQviDQuNC90LjRhtC40LDQu9GLXG4gICAgYWNjb3VudEJ0bi5pbm5lckhUTUwgPSB1c2VySW5pdGlhbHM7XG4gICAgYWNjb3VudEJ0bi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJOYW1lJyl9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJTdXJOYW1lJyl9YClcbiAgICBhY2NvdW50QnRuLmNsYXNzTGlzdC5hZGQoJ2FjY291bnRfX2J0bi1hZnRlci1yZWdpc3RlcicpO1xuXG4gICAgLy/Qt9Cw0LzQtdC90LjRgtGMINGB0L7QtNC10YDQttC40LzRi9C5INC60L7QtCDQtNGA0L7Qvy3Qu9C40YHRgtCwINC90LAg0LTRgNC+0L8t0LvQuNGB0YIg0L/QvtGB0LvQtSDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG4gICAgYWNjb3VudExpc3QuY2xhc3NMaXN0LmFkZCgnYWNjb3VudF9fbGlzdC1sb2dpbicpO1xuICAgIGFjY291bnRMaXN0LmlubmVySFRNTCA9IGBcbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cImFjY291bnRfX2xpc3QtdGV4dFwiPiR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmROdW1iZXInKX08L3N0cm9uZz5cbiAgICAgICAgPGxpIGNsYXNzPVwiYWNjb3VudF9fbGlzdC1pdGVtXCI+PGJ1dHRvbiBjbGFzcz1cImFjY291bnRfX2xpc3QtYnV0dG9uIGFjY291bnRfX2xpc3QtYnV0dG9uLW15LXByb2ZpbGUgYnRuLXJlc2V0XCI+TXkgcHJvZmlsZTwvYnV0dG9uPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImFjY291bnRfX2xpc3QtaXRlbVwiPjxidXR0b24gY2xhc3M9XCJhY2NvdW50X19saXN0LWJ1dHRvbiBhY2NvdW50X19saXN0LWJ1dHRvbi1sb2dvdXQgYnRuLXJlc2V0XCI+TG9nIE91dDwvYnV0dG9uPjwvbGk+XG4gICAgICBgXG4gIH07XG59O1xuXG5cblxuLy/QstGL0YXQvtC0INC40Lcg0L/RgNC+0YTQuNC70Y9cblxuLy/Qv9C+0LvRg9GH0LjRgtGMINC60L3QvtC/0LrRgyDQstGL0YXQvtC00LAg0LjQtyDQv9GA0L7RhNC40LvRj1xuY29uc3QgbG9nT3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2xpc3QtYnV0dG9uLWxvZ291dCcpO1xuXG4vL9C10YHQu9C4INC10YHRgtGMINC60L3QvtC/0LrQsCDQstGL0YXQvtC00LAg0LjQtyDQv9GA0L7RhNC40LvRjywg0YLQviDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC90LXQtSDRg9C00LDQu9C40YLRjCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNGOINGO0LfQtdGA0LAg0LjQtyDQv9GA0L7RhNC40LvRjyDQuCDQv9C10YDQtdC30LDQs9GA0YPQt9C40YLRjCDRgdGC0YDQsNC90LjRhtGDLCDRgtC10Lwg0YHQsNC80YvQvCDRg9Cx0YDQsNGC0Ywg0LDQstGC0L7RgNC40LfQsNGG0LjRjiDRgSDRjtC30LXRgNCwXG5pZiAobG9nT3V0QnRuKSB7XG5cbiAgbG9nT3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyQXV0aG9yaXplZCcpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuXG4gIH0pO1xufTtcblxuXG5cbi8v0LXRgdC70Lgg0Y7Qt9C10YAg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9INC4INCw0LLRgtC+0YDQuNC30L7QstCw0L0sINGC0L4g0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0L/RgNC+0YTQuNC70Y9cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclJlZ2lzdGVyZWQnKSA9PT0gJ3RydWUnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyQXV0aG9yaXplZCcpID09PSAndHJ1ZScpIHtcblxuICAvL9C90LDQudGC0Lgg0LLRgdC1INGN0LvQtdC80LXQvdGC0YssINC60L7RgtC+0YDRi9C1INC+0YLQvdC+0YHRj9GC0YHRjyDQuiDQvNC+0LTQsNC70LrQtSDQv9GA0L7RhNC40LvRj1xuICBjb25zdCBwcm9maWxlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1tb2RhbCcpO1xuICBjb25zdCBwcm9maWxlTW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtb3ZlcmxheScpO1xuICBjb25zdCBwcm9maWxlTW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtY29udGVudCcpO1xuXG4gIC8v0LjQvdC00LjQutCw0YLQvtGAINC+0YLQutGA0YvRgtC+0Lkg0LzQvtC00LDQu9C60Lgg0L/RgNC+0YTQuNC70Y9cbiAgbGV0IHByb2ZpbGVPcGVuTW9kYWwgPSBmYWxzZTtcblxuICAvL9GE0YPQvdC60YbQuNGPINC+0YLQutGA0YvRgtC40Y8g0LzQvtC00LDQu9C60Lgg0L/RgNC+0YTQuNC70Y9cbiAgY29uc3Qgb3Blbk1vZGFsUHJvZmlsZSA9ICgpID0+IHtcbiAgICBwcm9maWxlTW9kYWwuY2xhc3NMaXN0LmFkZCgncHJvZmlsZS1tb2RhbC0tYWN0aXZlJyk7XG4gICAgcHJvZmlsZU1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdwcm9maWxlLW92ZXJsYXktLWFjdGl2ZScpO1xuICAgIHByb2ZpbGVNb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHJvZmlsZS1jb250ZW50LS1hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3N0b3Atc2Nyb2xsJyk7XG4gICAgcHJvZmlsZU9wZW5Nb2RhbCA9IHRydWU7XG4gIH07XG5cbiAgLy/RhNGD0L3QutGG0LjRjyDQt9Cw0LrRgNGL0YLQuNGPINC80L7QtNCw0LvQutC4INC/0YDQvtGE0LjQu9GPXG4gIGNvbnN0IGNsb3NlTW9kYWxQcm9maWxlID0gKCkgPT4ge1xuICAgIHByb2ZpbGVNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9maWxlLW1vZGFsLS1hY3RpdmUnKTtcbiAgICBwcm9maWxlTW9kYWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2ZpbGUtb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgcHJvZmlsZU1vZGFsQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9maWxlLWNvbnRlbnQtLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKTtcbiAgICBwcm9maWxlT3Blbk1vZGFsID0gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYWNjb3VudFByb2ZpbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fbGlzdC1idXR0b24tbXktcHJvZmlsZScpO1xuICBjb25zdCBjYXJkUHJvZmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19yaWdodC1idG4tcHJvZmlsZScpO1xuICBjb25zdCBwcm9maWxlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1tb2RhbF9fYnRuJyk7XG4gIC8v0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMgTXkgcHJvZmlsZSDQsiDQtNGA0L7Qvy3Qu9C40YHRgtC1INC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINC/0YDQvtGE0LjQu9GPXG4gIGFjY291bnRQcm9maWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBvcGVuTW9kYWxQcm9maWxlKCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBhY2NvdW50TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvdW50X19saXN0LS1hY3RpdmUnKTtcbiAgfSk7XG5cblxuICAvL9C/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDIFByb2ZpbGUg0LIg0YHQtdC60YbQuNC4IGNhcmQg0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0L/RgNC+0YTQuNC70Y9cbiAgY2FyZFByb2ZpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIG9wZW5Nb2RhbFByb2ZpbGUoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICB9KTtcblxuICAvL9C/0YDQuCDQutC70LjQutC1INC90LAg0LrRgNC10YHRgtC40Log0LIg0LzQvtC00LDQu9C60LUg0L/RgNC+0YTQuNC70Y8g0LfQsNC60YDRi9GC0Ywg0LXQtVxuICBwcm9maWxlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsUHJvZmlsZSk7XG5cbiAgLy/Qv9GA0Lgg0L7RgtC60YDRi9GC0L7QuSDQvNC+0LTQsNC70LrQtSDQv9GA0L7RhNC40LvRjyDQuCDQv9GA0Lgg0LvRjtCx0L7QvCDQutC70LjQutC1INCy0L3QtSDQvtCx0LvQsNGB0YLQuCDQt9Cw0LrRgNGL0YLRjCDQvNC+0LTQsNC70LrRgyDQv9GA0L7RhNC40LvRj1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKHByb2ZpbGVPcGVuTW9kYWwgPT09IHRydWUgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY29udGVudCcpKSB7XG4gICAgICBjbG9zZU1vZGFsUHJvZmlsZSgpO1xuICAgIH07XG4gIH0pO1xuXG5cbiAgbGV0IHVzZXJOYW1lSW5pdGlhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyTmFtZScpO1xuICBsZXQgdXNlclN1ck5hbWVJbml0aWFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJTdXJOYW1lJyk7XG4gIGxldCB1c2VySW5pdGlhbHMgPSBgJHt1c2VyTmFtZUluaXRpYWxbMF19JHt1c2VyU3VyTmFtZUluaXRpYWxbMF19YDtcblxuICBjb25zdCBwcm9maWxlSW5pdGlhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1tb2RhbF9faW5pdGlhbHMnKTtcbiAgcHJvZmlsZUluaXRpYWxzLnRleHRDb250ZW50ID0gdXNlckluaXRpYWxzO1xuXG4gIGNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtbW9kYWxfX25hbWUnKTtcbiAgcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKX0gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclN1ck5hbWUnKX1gO1xuXG4gIGNvbnN0IHByb2ZpbGVWaXNpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1tb2RhbF9fbGlzdC1jb3VudCcpO1xuICBwcm9maWxlVmlzaXRzLnRleHRDb250ZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJWaXNpdHMnKTtcblxuICBjb25zdCBwcm9maWxlQ2FyZE51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLW1vZGFsX19jYXJkLW51bWJlci1jb3B5Jyk7XG4gIHByb2ZpbGVDYXJkTnVtYmVyLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmROdW1iZXInKTtcblxuICBwcm9maWxlQ2FyZE51bWJlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgY2FyZE51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLW1vZGFsX19jYXJkLW51bWJlci1jb3B5Jyk7XG4gICAgY2FyZE51bWJlci5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gIH0pXG59XG4iLCIvLyDQstCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LzRiyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG5cbi8v0L/QvtC70YPRh9C40YLRjCDRhNC+0YDQvNGDINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbmNvbnN0IHJlZ2lzdGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1mb3JtJyk7XG5cbi8v0L/QvtC70YPRh9C40YLRjCDQstGB0LUg0LjQvdC/0YPRgtGLINCyINGE0L7RgNC80LUg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuY29uc3QgcmVnaXN0ZXJOYW1lSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19pbnB1dC1uYW1lJyk7XG5jb25zdCByZWdpc3RlclN1ck5hbWVJbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXItbW9kYWxfX2lucHV0LXN1cm5hbWUnKTtcbmNvbnN0IHJlZ2lzdGVyRW1haWxJbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXItbW9kYWxfX2lucHV0LWVtYWlsJyk7XG5jb25zdCByZWdpc3RlclBhc3N3b3JkSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19pbnB1dC1wYXNzd29yZCcpO1xuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0L/QvtC70Y8g0LTQu9GPINCy0YvQstC+0LTQsCDQvtGI0LjQsdC+0Log0LIg0LjQvdC/0YPRgtCw0YVcbmNvbnN0IHJlZ2lzdGVyTmFtZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19lcnJvci10ZXh0LW5hbWUnKTtcbmNvbnN0IHJlZ2lzdGVyU3VyTmFtZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19lcnJvci10ZXh0LXN1cm5hbWUnKTtcbmNvbnN0IHJlZ2lzdGVyRW1haWxFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9fZXJyb3ItdGV4dC1lbWFpbCcpO1xuY29uc3QgcmVnaXN0ZXJQYXNzd29yZEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19lcnJvci10ZXh0LXBhc3N3b3JkJyk7XG5cbi8v0L/QvtC70YPRh9C40YLRjCDQutC90L7Qv9C60YMg0LTQu9GPINGB0LDQsdC80LjRgtCwINGE0L7RgNC80Ysg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuY29uc3QgcmVnaXN0ZXJGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19idG4tc3VibWl0Jyk7XG5cbmNvbnN0IHVwVXNlclZpc2l0cyA9ICh1c2VyVmlzaXRzKSA9PiB7XG4gIHVzZXJWaXNpdHMrK1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclZpc2l0cycsIHVzZXJWaXNpdHMpO1xufTtcblxuXG5cbi8v0L7QsdGA0LDQsdC+0YLQutCwINC60LvQuNC60LAg0L/QviDQutC90L7Qv9C60LUg0YHQsNCx0LzQuNGC0LAg0YTQvtGA0LzRiyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG5yZWdpc3RlckZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gIC8v0L7RgdGC0LDQvdC+0LLQuNGC0Ywg0YDQsNGB0L/RgNC+0YHRgtGA0LDQvdC10L3QuNC1INC/0L7QstC10LTQtdC90LjRjyDQutC90L7Qv9C60Lgg0YTQvtGA0LzRi1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIC8v0LfQsNC/0YDQtdGC0LjRgtGMINGB0LrRgNC+0LvQuyDRgdGC0YDQsNC90LjRhtGLINC/0YDQuCDQt9Cw0L/QvtC70L3QtdC90LjQuCDRhNC+0YDQvNGLINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdG9wLXNjcm9sbCcpO1xuXG4gIC8v0L/QvtC70YPRh9C40YLRjCDQstGB0LUg0LfQvdCw0YfQtdC90LjRjyDQsiDQuNC90L/Rg9GC0LDRhVxuICBsZXQgcmVnaXN0ZXJOYW1lVmFsdWUgPSByZWdpc3Rlck5hbWVJbnAudmFsdWUuc3BsaXQoL1xccysvKS5qb2luKCcnKTsgLy8g0YPQsdC40YDQsNGO0YLRgdGPINC/0YDQvtCx0LXQu9GLINCy0L3Rg9GC0YDQuCDRgdGC0YDQvtC60LhcbiAgbGV0IHJlZ2lzdGVyU3VyTmFtZVZhbHVlID0gcmVnaXN0ZXJTdXJOYW1lSW5wLnZhbHVlLnNwbGl0KC9cXHMrLykuam9pbignJyk7IC8vINGD0LHQuNGA0LDRjtGC0YHRjyDQv9GA0L7QsdC10LvRiyDQstC90YPRgtGA0Lgg0YHRgtGA0L7QutC4XG4gIGxldCByZWdpc3RlckVtYWlsVmFsdWUgPSByZWdpc3RlckVtYWlsSW5wLnZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1xccysvKS5qb2luKCcnKTsgLy8g0LLRgdC1INGB0LjQvNCy0L7Qu9GLINC30LDQv9C40YHRi9Cy0LDRjtGC0YHRjyDQsiDQvdC40LbQvdC10Lwg0YDQtdCz0LjRgdGC0YDQtSDQuCDRg9Cx0LjRgNCw0Y7RgtGB0Y8g0L/RgNC+0LHQtdC70Ysg0LLQvdGD0YLRgNC4INGB0YLRgNC+0LrQuFxuICBsZXQgcmVnaXN0ZXJQYXNzd29yZFZhbHVlID0gcmVnaXN0ZXJQYXNzd29yZElucC52YWx1ZS5zcGxpdCgvXFxzKy8pLmpvaW4oJycpOyAvLyDRg9Cx0LjRgNCw0Y7RgtGB0Y8g0L/RgNC+0LHQtdC70Ysg0LLQvdGD0YLRgNC4INGB0YLRgNC+0LrQuFxuXG4gIC8v0LTQsNGC0YfQuNC6INCy0LDQu9C40LTQsNGG0LjQuCDRhNC+0YDQvNGLINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgbGV0IHJlZ2lzdGVyVmFsaWRhdGlvblJlc3VsdCA9IGZhbHNlO1xuXG5cblxuICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQsCDQuNC80LXQvdC4XG4gIHJlZ2lzdGVyTmFtZUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gIGlmIChyZWdpc3Rlck5hbWVWYWx1ZSA9PT0gJycpIHtcblxuICAgIHJlZ2lzdGVyTmFtZUlucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIHJlZ2lzdGVyTmFtZUVycm9yLnRleHRDb250ZW50ID0gJ0ZpbGwgaW4gdGhlIGZpZWxkJztcbiAgICByZWdpc3RlclZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuXG4gIH0gZWxzZSBpZiAocmVnaXN0ZXJOYW1lVmFsdWUubGVuZ3RoIDwgMykge1xuXG4gICAgcmVnaXN0ZXJOYW1lSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJOYW1lRXJyb3IudGV4dENvbnRlbnQgPSAnTmFtZSBsZW5ndGggbXVzdCBiZSBtb3JlIHRoYW4gMyBjaGFyYWN0ZXJzJztcbiAgICByZWdpc3RlclZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuXG4gIH0gZWxzZSB7XG4gICAgcmVnaXN0ZXJOYW1lVmFsdWUgPSBgJHtyZWdpc3Rlck5hbWVWYWx1ZVswXS50b1VwcGVyQ2FzZSgpfSR7cmVnaXN0ZXJOYW1lVmFsdWUuc2xpY2UoMSkudG9Mb3dlckNhc2UoKX1gLy8g0L/QtdGA0LLRi9C5INGB0LjQvNCy0L7QuyDQsiDQstC10YDRhdC10L3QvCDRgNC10LPQuNGB0YLRgNC1LCDQsCDQvtGB0YLQsNC70YzQvdGL0LUg0LIg0L3QuNC20L3QtdC8ICsg0YPQsdGA0LDRgtGMINCy0YHQtSDQv9GA0L7QsdC10LvRi1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyTmFtZScsIHJlZ2lzdGVyTmFtZVZhbHVlKTtcbiAgICByZWdpc3Rlck5hbWVJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICByZWdpc3Rlck5hbWVJbnAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcblxuICB9O1xuXG5cblxuICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQsCDRhNCw0LzQuNC70LjQuFxuICByZWdpc3RlclN1ck5hbWVFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAocmVnaXN0ZXJTdXJOYW1lVmFsdWUgPT09ICcnKSB7XG5cbiAgICByZWdpc3RlclN1ck5hbWVJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICByZWdpc3RlclN1ck5hbWVFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKHJlZ2lzdGVyU3VyTmFtZVZhbHVlLmxlbmd0aCA8IDMpIHtcblxuICAgIHJlZ2lzdGVyU3VyTmFtZUlucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIHJlZ2lzdGVyU3VyTmFtZUVycm9yLnRleHRDb250ZW50ID0gJ0xhc3QgbmFtZSBtdXN0IGJlIG1vcmUgdGhhbiAzIGNoYXJhY3RlcnMnO1xuICAgIHJlZ2lzdGVyVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG5cbiAgfSBlbHNlIHtcbiAgICByZWdpc3RlclN1ck5hbWVWYWx1ZSA9IGAke3JlZ2lzdGVyU3VyTmFtZVZhbHVlWzBdLnRvVXBwZXJDYXNlKCl9JHtyZWdpc3RlclN1ck5hbWVWYWx1ZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpfWAvLyDQv9C10YDQstGL0Lkg0YHQuNC80LLQvtC7INCyINCy0LXRgNGF0LXQvdC8INGA0LXQs9C40YHRgtGA0LUsINCwINC+0YHRgtCw0LvRjNC90YvQtSDQsiDQvdC40LbQvdC10LwgKyDRg9Cx0YDQsNGC0Ywg0LLRgdC1INC/0YDQvtCx0LXQu9GLXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJTdXJOYW1lJywgcmVnaXN0ZXJTdXJOYW1lVmFsdWUpO1xuICAgIHJlZ2lzdGVyU3VyTmFtZUlucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIHJlZ2lzdGVyU3VyTmFtZUlucC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuXG4gIH07XG5cblxuXG4gIC8v0LLQsNC70LjQtNCw0YbQuNGPINC30L3QsNGH0LXQvdC40Y8g0LjQvdC/0YPRgtCwINC/0L7Rh9GC0YtcbiAgcmVnaXN0ZXJFbWFpbEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gIGlmIChyZWdpc3RlckVtYWlsVmFsdWUgPT09ICcnKSB7XG5cbiAgICByZWdpc3RlckVtYWlsSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJFbWFpbEVycm9yLnRleHRDb250ZW50ID0gJ0ZpbGwgaW4gdGhlIGZpZWxkJztcbiAgICByZWdpc3RlclZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuXG4gIH0gZWxzZSBpZiAocmVnaXN0ZXJFbWFpbFZhbHVlLmxlbmd0aCA8IDMpIHtcblxuICAgIHJlZ2lzdGVyRW1haWxJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgIHJlZ2lzdGVyRW1haWxFcnJvci50ZXh0Q29udGVudCA9ICdNYWlsIGxlbmd0aCBtdXN0IGJlIG1vcmUgdGhhbiAzIGNoYXJhY3RlcnMnO1xuICAgIHJlZ2lzdGVyVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG5cbiAgfSBlbHNlIGlmIChyZWdpc3RlckVtYWlsVmFsdWUuaW5jbHVkZXMoJ0AnKSAhPT0gdHJ1ZSkge1xuXG4gICAgcmVnaXN0ZXJFbWFpbElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIHJlZ2lzdGVyRW1haWxFcnJvci50ZXh0Q29udGVudCA9ICdNYWlsIG11c3QgY29udGFpbiBcXCdAXFwnJztcbiAgICByZWdpc3RlclZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuXG4gIH0gZWxzZSB7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckVtYWlsJywgcmVnaXN0ZXJFbWFpbFZhbHVlKTtcbiAgICByZWdpc3RlckVtYWlsSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJFbWFpbElucC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuXG4gIH07XG5cblxuXG4gIC8v0LLQsNC70LjQtNCw0YbQuNGPINC30L3QsNGH0LXQvdC40Y8g0LjQvdC/0YPRgtCwINC/0LDRgNC+0LvRj1xuICByZWdpc3RlclBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgaWYgKHJlZ2lzdGVyUGFzc3dvcmRWYWx1ZSA9PT0gJycpIHtcblxuICAgIHJlZ2lzdGVyUGFzc3dvcmRJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICByZWdpc3RlclBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnRmlsbCBpbiB0aGUgZmllbGQnO1xuICAgIHJlZ2lzdGVyVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG5cbiAgfSBlbHNlIGlmIChyZWdpc3RlclBhc3N3b3JkVmFsdWUubGVuZ3RoIDwgOCkge1xuXG4gICAgcmVnaXN0ZXJQYXNzd29yZElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIHJlZ2lzdGVyUGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICdQYXNzd29yZCBsZW5ndGggbXVzdCBiZSBtb3JlIHRoYW4gOCBjaGFyYWN0ZXJzJztcbiAgICByZWdpc3RlclZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuXG4gIH0gZWxzZSB7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclBhc3N3b3JkJywgcmVnaXN0ZXJQYXNzd29yZFZhbHVlKTtcbiAgICByZWdpc3RlclBhc3N3b3JkSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJQYXNzd29yZElucC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuXG4gIH07XG5cblxuXG4gIC8v0LXRgdC70Lgg0LXRgdGC0Ywg0L7RiNC40LHQutCwINCyINCy0LDQu9C40LTQsNGG0LjQuCwg0YLQviDQt9Cw0L3QvtCy0L4g0L/RgNC+0LnRgtC40YHRjCDQv9C+INCy0YHQtdC8INC30L3QsNGH0LXQvdC40Y/QvCDQuNC90L/Rg9GC0LDQvFxuICBpZiAocmVnaXN0ZXJWYWxpZGF0aW9uUmVzdWx0ID09PSB0cnVlKSB7XG5cbiAgICByZXR1cm47XG5cbiAgfTtcblxuXG5cbiAgLy/Qv9C+0YHQu9C1INGD0YHQv9C10YjQvdC+0Lkg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuXG4gIC8v0LfQsNC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICByZWdpc3RlckZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICBjbG9zZU1vZGFsUmVnaXN0ZXIoKTtcblxuICB9KTtcblxuXG4gIC8v0YHQvtC30LTQsNGC0Ywg0YHRh9C10YLRh9C40Log0LLQuNC30LjRgtC+0LIg0Y7Qt9C10YDQsCDQuCDQv9GA0LjRgdCy0L7QuNGC0Ywg0LIg0L3QtdCz0L4g0LfQvdCw0YfQtdC90LjQtSDQuNC3INCR0JRcbiAgbGV0IHVzZXJWaXNpdHMgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJWaXNpdHMnKSk7XG5cbiAgLy/Rg9Cy0LXQu9C40YfQuNGC0Ywg0LrQvtC7LdCy0L4g0LLQuNC30LjRgtC+0LIg0Y7Qt9C10YDQsCDQvdCwIDFcbiAgdXBVc2VyVmlzaXRzKHVzZXJWaXNpdHMpO1xuXG4gIC8v0LXRgdC70Lgg0Y7Qt9C10YAg0YPQttC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvVxuICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclJlZ2lzdGVyZWQnKSkge1xuXG4gICAgLy/Rg9C00LDQu9C40YLRjCDQuNC3INCR0JQg0YHRh9C10YLRh9C40Log0LLQuNC30LjRgtC+0LJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlclZpc2l0cycpO1xuXG4gICAgICAvL9GB0L7Qt9C00LDRgtGMINGB0YfQtdGC0YfQuNC6INCy0LjQt9C40YLQvtCyINGO0LfQtdGA0LAg0Lgg0L/RgNC40YHQstC+0LjRgtGMINCyINC90LXQs9C+INC30L3QsNGH0LXQvdC40LUg0LjQtyDQkdCUXG4gICAgbGV0IHVzZXJWaXNpdHMgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJWaXNpdHMnKSk7XG5cbiAgICAvL9GD0LLQtdC70LjRh9C40YLRjCDQutC+0Lst0LLQviDQstC40LfQuNGC0L7QsiDRjtC30LXRgNCwINC90LAgMVxuICAgIHVwVXNlclZpc2l0cyh1c2VyVmlzaXRzKTtcblxuICB9O1xuXG5cbiAgLy/Qv9GA0LjQvdGD0LTQuNGC0LXQu9GM0L3QviDQv9C10YDQtdC30LDQs9GA0YPQt9C40YLRjCDRgdGC0YDQsNC90LjRhtGDXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xuXG5cblxuICAvL9GB0LHRgNC+0YHQuNGC0Ywg0LLRgdC1INC30L3QsNGH0LXQvdC40Y8g0LjQvdC/0YPRgtC+0LJcbiAgcmVnaXN0ZXJOYW1lSW5wLnZhbHVlID0gJyc7XG4gIHJlZ2lzdGVyTmFtZUlucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICByZWdpc3RlclN1ck5hbWVJbnAudmFsdWUgPSAnJztcbiAgcmVnaXN0ZXJTdXJOYW1lSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIHJlZ2lzdGVyRW1haWxJbnAudmFsdWUgPSAnJztcbiAgcmVnaXN0ZXJFbWFpbElucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICByZWdpc3RlclBhc3N3b3JkSW5wLnZhbHVlID0gJyc7XG4gIHJlZ2lzdGVyUGFzc3dvcmRJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcblxuXG5cbiAgLy/RgdCz0LXQvdC10YDQuNGA0L7QstCw0YLRjCDRgdC70YPRh9Cw0LnQvdC+0LUg0LTQtdCy0Y/RgtC40LfQvdCw0YfQvdC+0LUg0YfQuNGB0LvQvlxuICBsZXQgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwMDAwMDAwKSArIDEwMDAwMDAwMDtcblxuICAvL9GB0LrQvtC90LLQtdGA0YLQuNGA0L7QstCw0YLRjCDRh9C40YHQu9C+INCyIDE2LdGA0LjRh9C90YPRjiDRgdC40YHRgtC10LzRg1xuICBsZXQgaGV4TnVtYmVyID0gcmFuZG9tTnVtYmVyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXG4gIC8v0LTQvtCx0LDQstC40YLRjCDQstC10LTRg9GJ0LjQtSDQvdGD0LvQuCwg0LXRgdC70Lgg0L3QtdC+0LHRhdC+0LTQuNC80L5cbiAgd2hpbGUgKGhleE51bWJlci5sZW5ndGggPCA5KSB7XG5cbiAgICBoZXhOdW1iZXIgPSBcIjBcIiArIGhleE51bWJlcjtcblxuICB9O1xuXG4gIC8v0YHQvtGF0YDQsNC90LjRgtGMINCyINCR0JQg0YHQs9C10L3QtdGA0LjRgNC+0LLQsNC90L3Ri9C5IGNhcmROdW1iZXJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcmROdW1iZXInLCBoZXhOdW1iZXIpO1xuXG4gIC8v0YHQvtGF0YDQsNC90LjRgtGMINCyINCR0JQg0LTQsNGC0YfQuNC60Lgg0YPRgdC/0LXRiNC90YvRhSDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC4INCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0Y7Qt9C10YDQsFxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclJlZ2lzdGVyZWQnLCB0cnVlKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJBdXRob3JpemVkJywgdHJ1ZSk7XG59KTtcblxuXG5cbi8v0L7RgtC80LXQvdC40YLRjCDQtNC10YTQvtC70YLQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1INC60L3QvtC/0LrQuCDQv9GA0Lgg0YHQsNCx0LzQuNGC0LVcbnJlZ2lzdGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuXG4gIGUucHJldmVudERlZmF1bHQoKTtcblxufSk7XG5cblxuXG5cblxuLy8g0LLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC80Ysg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0YTQvtGA0LzRgyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG5jb25zdCBhdXRob3JpemVkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtJyk7XG5cbi8v0L/QvtC70YPRh9C40YLRjCDQstGB0LUg0LjQvdC/0YPRgtGLINCyINGE0L7RgNC80LUg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuY29uc3QgYXV0aG9yaXplZExvZ2luSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLW1vZGFsX19pbnB1dC1sb2dpbicpO1xuY29uc3QgYXV0aG9yaXplZFBhc3N3b3JkSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLW1vZGFsX19pbnB1dC1wYXNzd29yZCcpO1xuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0L/QvtC70Y8g0LTQu9GPINCy0YvQstC+0LTQsCDQvtGI0LjQsdC+0Log0LIg0LjQvdC/0YPRgtCw0YVcbmNvbnN0IGF1dGhvcml6ZWRMb2dpbkVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLW1vZGFsX19lcnJvci10ZXh0LWxvZ2luJyk7XG5jb25zdCBhdXRob3JpemVkUGFzc3dvcmRFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1tb2RhbF9fZXJyb3ItdGV4dC1wYXNzd29yZCcpO1xuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0LrQvdC+0L/QutGDINC00LvRjyDRgdCw0LHQvNC40YLQsCDRhNC+0YDQvNGLINCw0LLRgtC+0YDQuNC30LDRhtC40LhcbmNvbnN0IGF1dGhvcml6ZWRGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLW1vZGFsX19idG4tbG9naW4nKTtcblxuXG5cbi8v0L7QsdGA0LDQsdC+0YLQutCwINC60LvQuNC60LAg0L/QviDQutC90L7Qv9C60LUg0YHQsNCx0LzQuNGC0LAg0YTQvtGA0LzRiyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG5hdXRob3JpemVkRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgLy/QvtGB0YLQsNC90L7QstC40YLRjCDRgNCw0YHQv9GA0L7RgdGC0YDQsNC90LXQvdC40LUg0L/QvtCy0LXQtNC10L3QuNGPINC60L3QvtC/0LrQuCDRhNC+0YDQvNGLXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgLy/Qt9Cw0L/RgNC10YLQuNGC0Ywg0YHQutGA0L7Qu9C7INGB0YLRgNCw0L3QuNGG0Ysg0L/RgNC4INC30LDQv9C+0LvQvdC10L3QuNC4INGE0L7RgNC80Ysg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3N0b3Atc2Nyb2xsJyk7XG5cbiAgLy/Qv9C+0LvRg9GH0LjRgtGMINCy0YHQtSDQt9C90LDRh9C10L3QuNGPINCyINC40L3Qv9GD0YLQsNGFXG4gIGxldCBhdXRob3JpemVkTG9naW5WYWx1ZSA9IGF1dGhvcml6ZWRMb2dpbklucC52YWx1ZS5zcGxpdCgvXFxzKy8pLmpvaW4oJycpOyAvLyDRg9Cx0LjRgNCw0Y7RgtGB0Y8g0L/RgNC+0LHQtdC70Ysg0LLQvdGD0YLRgNC4INGB0YLRgNC+0LrQuFxuICBsZXQgYXV0aG9yaXplZFBhc3N3b3JkVmFsdWUgPSBhdXRob3JpemVkUGFzc3dvcmRJbnAudmFsdWUuc3BsaXQoL1xccysvKS5qb2luKCcnKTsgLy8g0YPQsdC40YDQsNGO0YLRgdGPINC/0YDQvtCx0LXQu9GLINCy0L3Rg9GC0YDQuCDRgdGC0YDQvtC60LhcblxuICAvL9C00LDRgtGH0LjQuiDQstCw0LvQuNC00LDRhtC40Lgg0YTQvtGA0LzRiyDQsNGC0L7RgNC40LfQsNGG0LjQuFxuICBsZXQgYXV0aG9yaXplZFZhbGlkYXRpb25SZXN1bHQgPSBmYWxzZTtcblxuXG5cbiAgLy/QstCw0LvQuNC00LDRhtC40Y8g0LfQvdCw0YfQtdC90LjRjyDQuNC90L/Rg9GC0LAg0LvQvtCz0LjQvdCwXG4gIGF1dGhvcml6ZWRMb2dpbkVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gIGlmIChhdXRob3JpemVkTG9naW5WYWx1ZSA9PT0gJycpIHtcbiAgICBhdXRob3JpemVkTG9naW5JbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBhdXRob3JpemVkTG9naW5FcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgYXV0aG9yaXplZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGF1dGhvcml6ZWRMb2dpblZhbHVlICE9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckVtYWlsJykgJiYgYXV0aG9yaXplZExvZ2luVmFsdWUgIT09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkTnVtYmVyJykpIHtcbiAgICBhdXRob3JpemVkTG9naW5JbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBhdXRob3JpemVkTG9naW5FcnJvci50ZXh0Q29udGVudCA9ICdUaGlzIG1haWwgb3IgcmVhZGVycyBjYXJkIGlzIG5vdCByZWdpc3RlcmVkJztcbiAgICBhdXRob3JpemVkVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXV0aG9yaXplZExvZ2luSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgYXV0aG9yaXplZExvZ2luSW5wLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gIH07XG5cblxuXG4gIC8v0LLQsNC70LjQtNCw0YbQuNGPINC30L3QsNGH0LXQvdC40Y8g0LjQvdC/0YPRgtCwINC/0LDRgNC+0LvRj1xuICBhdXRob3JpemVkUGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAoYXV0aG9yaXplZFBhc3N3b3JkVmFsdWUgPT09ICcnKSB7XG5cbiAgICBhdXRob3JpemVkUGFzc3dvcmRJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBhdXRob3JpemVkUGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgYXV0aG9yaXplZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoYXV0aG9yaXplZFBhc3N3b3JkVmFsdWUubGVuZ3RoIDwgOCkge1xuXG4gICAgYXV0aG9yaXplZFBhc3N3b3JkSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYXV0aG9yaXplZFBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnUGFzc3dvcmQgbGVuZ3RoIG11c3QgYmUgbW9yZSB0aGFuIDggY2hhcmFjdGVycyc7XG4gICAgYXV0aG9yaXplZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoYXV0aG9yaXplZFBhc3N3b3JkVmFsdWUgIT09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyUGFzc3dvcmQnKSkge1xuXG4gICAgYXV0aG9yaXplZFBhc3N3b3JkSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYXV0aG9yaXplZFBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnd3JvbmcgcGFzc3dvcmQnO1xuICAgIGF1dGhvcml6ZWRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2Uge1xuXG4gICAgYXV0aG9yaXplZFBhc3N3b3JkSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgYXV0aG9yaXplZFBhc3N3b3JkSW5wLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG5cbiAgfTtcblxuXG5cbiAgLy/QtdGB0LvQuCDQtdGB0YLRjCDQvtGI0LjQsdC60LAg0LIg0LLQsNC70LjQtNCw0YbQuNC4LCDRgtC+INC30LDQvdC+0LLQviDQv9GA0L7QudGC0LjRgdGMINC/0L4g0LLRgdC10Lwg0LfQvdCw0YfQtdC90LjRj9C8INC40L3Qv9GD0YLQsNC8XG4gIGlmIChhdXRob3JpemVkVmFsaWRhdGlvblJlc3VsdCA9PT0gdHJ1ZSkge1xuXG4gICAgcmV0dXJuO1xuXG4gIH07XG5cblxuXG4gIC8v0L/QvtGB0LvQtSDRg9GB0L/QtdGI0L3QvtC5INCw0LLRgtC+0YDQuNC30LDRhtC40LhcblxuICAvL9C30LDQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgYXV0aG9yaXplZEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICBjbG9zZU1vZGFsTG9nSW4oKTtcblxuICB9KTtcblxuXG4gIGxldCB1c2VyVmlzaXRzID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVmlzaXRzJykpO1xuICB1cFVzZXJWaXNpdHModXNlclZpc2l0cyk7XG5cblxuICAvL9C/0YDQuNC90YPQtNC40YLQtdC70YzQvdC+INC/0LXRgNC10LfQsNCz0YDRg9C30LjRgtGMINGB0YLRgNCw0L3QuNGG0YNcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG5cblxuXG4gIC8v0YHQvtGF0YDQsNC90LjRgtGMINCyINCR0JQg0LTQsNGC0YfQuNC6INGD0YHQv9C10YjQvdC+0Lkg0LDQstGC0L7RgNC40LfQsNGG0LjQuCDRjtC30LXRgNCwXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyQXV0aG9yaXplZCcsIHRydWUpO1xuXG5cblxuICAvL9GB0LHRgNC+0YHQuNGC0Ywg0LLRgdC1INC30L3QsNGH0LXQvdC40Y8g0LjQvdC/0YPRgtC+0LJcbiAgYXV0aG9yaXplZExvZ2luSW5wLnZhbHVlID0gJyc7XG4gIGF1dGhvcml6ZWRMb2dpbklucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICBhdXRob3JpemVkUGFzc3dvcmRJbnAudmFsdWUgPSAnJztcbiAgYXV0aG9yaXplZFBhc3N3b3JkSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG59KTtcblxuXG4vL9GD0LLQtdC70LjRh9C40YLRjCDQutC+0Lst0LLQviDQstC40LfQuNGC0L7QsiDQvdCwIDFcblxuXG4vL9C+0YLQvNC10L3QuNGC0Ywg0LTQtdGE0L7Qu9GC0L3QvtC1INC/0L7QstC10LTQtdC90LjQtSDQutC90L7Qv9C60Lgg0L/RgNC4INGB0LDQsdC80LjRgtC1XG5hdXRob3JpemVkRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuXG4gIGUucHJldmVudERlZmF1bHQoKTtcblxufSk7XG5cblxuXG5cbi8v0LXRgdC70Lgg0Y7Qt9C10YAg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJSZWdpc3RlcmVkJykgPT09ICd0cnVlJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckF1dGhvcml6ZWQnKSAhPT0gJ3RydWUnKSB7XG5cbiAgLy8g0LLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC80Ysg0L/RgNC+0LLQtdGA0LrQuCDQutCw0YDRgtGLXG5cbiAgLy/Qv9C+0LvRg9GH0LjRgtGMINGE0L7RgNC80YMg0L/RgNC+0LLQtdGA0LrQuCDQutCw0YDRgtGLXG4gIGNvbnN0IGNhcmRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtZm9ybScpO1xuXG4gIC8v0L/QvtC70YPRh9C40YLRjCDQstGB0LUg0LjQvdC/0YPRgtGLINCyINGE0L7RgNC80LUg0L/RgNC+0LLQtdGA0LrQuCDQutCw0YDRgtGLXG4gIGNvbnN0IGNhcmROYW1lSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2Zvcm0taW5wdXQtbmFtZScpO1xuICBjb25zdCBjYXJkTnVtYmVySW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2Zvcm0taW5wdXQtbnVtYmVyJyk7XG5cbiAgLy/Qv9C+0LvRg9GH0LjRgtGMINC/0L7Qu9GPINC00LvRjyDQstGL0LLQvtC00LAg0L7RiNC40LHQvtC6INCyINC40L3Qv9GD0YLQsNGFXG4gIGNvbnN0IGNhcmROYW1lRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fZXJyb3ItdGV4dC1uYW1lJyk7XG4gIGNvbnN0IGNhcmROdW1iZXJFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19lcnJvci10ZXh0LW51bWJlcicpO1xuXG4gIC8v0L/QvtC70YPRh9C40YLRjCDQutC90L7Qv9C60YMg0LTQu9GPINGB0LDQsdC80LjRgtCwINGE0L7RgNC80Ysg0L/RgNC+0LLQtdGA0LrQuCDQutCw0YDRgtGLXG4gIGNvbnN0IGNhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fZm9ybS1idG4nKTtcblxuXG4gIGNhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgLy/QvtGB0YLQsNC90L7QstC40YLRjCDRgNCw0YHQv9GA0L7RgdGC0YDQsNC90LXQvdC40LUg0L/QvtCy0LXQtNC10L3QuNGPINC60L3QvtC/0LrQuCDRhNC+0YDQvNGLXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIC8v0L/QvtC70YPRh9C40YLRjCDQstGB0LUg0LfQvdCw0YfQtdC90LjRjyDQsiDQuNC90L/Rg9GC0LDRhVxuICAgIGxldCBjYXJkTmFtZVZhbHVlID0gY2FyZE5hbWVJbnAudmFsdWUucmVwbGFjZSgvKF58XFxzKVxcUy9nLCBmdW5jdGlvbihhKSB7cmV0dXJuIGEudG9VcHBlckNhc2UoKX0pIC8v0LrQsNC20LTQvtC1INGB0LvQvtCy0L4g0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEg0LHRg9C60LLRiyDQsiDQstC10YDRhdC90LXQvCDRgNC10LPQuNGB0YLRgNC1XG4gICAgbGV0IGNhcmROdW1iZXJWYWx1ZSA9IGNhcmROdW1iZXJJbnAudmFsdWUudG9VcHBlckNhc2UoKTtcblxuXG5cbiAgICAvL9C00LDRgtGH0LjQuiDQstCw0LvQuNC00LDRhtC40Lgg0YTQvtGA0LzRiyDQv9GA0L7QstC10YDQutC4INC60LDRgNGC0YtcbiAgICBsZXQgY2FyZFZhbGlkYXRpb25SZXN1bHQgPSBmYWxzZTtcblxuICAgIC8v0LLQsNC70LjQtNCw0YbQuNGPINC30L3QsNGH0LXQvdC40Y8g0LjQvdC/0YPRgtCwINC40LzQtdC90LhcbiAgICBjYXJkTmFtZUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgaWYgKGNhcmROYW1lVmFsdWUgPT09ICcnKSB7XG4gICAgICBjYXJkTmFtZUlucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgICAgY2FyZE5hbWVFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgICBjYXJkVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChjYXJkTmFtZVZhbHVlICE9PSBgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKX0gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclN1ck5hbWUnKX1gKSB7XG4gICAgICBjYXJkTmFtZUlucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgICAgY2FyZE5hbWVFcnJvci50ZXh0Q29udGVudCA9ICdFbnRlciB0aGUgY29ycmVjdCBmaXJzdCBhbmQgbGFzdCBuYW1lJztcbiAgICAgIGNhcmRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FyZE5hbWVJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICAgIGNhcmROYW1lSW5wLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gICAgfTtcblxuICAgIC8v0LLQsNC70LjQtNCw0YbQuNGPINC30L3QsNGH0LXQvdC40Y8g0LjQvdC/0YPRgtCwINC90L7QvNC10YDQsCDQutCw0YDRgtGLXG4gICAgY2FyZE51bWJlckVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgaWYgKGNhcmROdW1iZXJWYWx1ZSA9PT0gJycpIHtcbiAgICAgIGNhcmROdW1iZXJJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgIGNhcmROdW1iZXJFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgICBjYXJkVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChjYXJkTnVtYmVyVmFsdWUgIT09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkTnVtYmVyJykpIHtcbiAgICAgIGNhcmROdW1iZXJJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgIGNhcmROdW1iZXJFcnJvci50ZXh0Q29udGVudCA9ICdDYXJkIG51bWJlciBpcyBub3QgZm91bmQnO1xuICAgICAgY2FyZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXJkTnVtYmVySW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgICBjYXJkTnVtYmVySW5wLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gICAgfTtcblxuICAgIC8v0LXRgdC70Lgg0LXRgdGC0Ywg0L7RiNC40LHQutCwINCyINCy0LDQu9C40LTQsNGG0LjQuCwg0YLQviDQt9Cw0L3QvtCy0L4g0L/RgNC+0LnRgtC40YHRjCDQv9C+INCy0YHQtdC8INC30L3QsNGH0LXQvdC40Y/QvCDQuNC90L/Rg9GC0LDQvFxuICAgIGlmIChjYXJkVmFsaWRhdGlvblJlc3VsdCA9PT0gdHJ1ZSkge1xuXG4gICAgICByZXR1cm47XG5cbiAgICB9O1xuXG4gICAgLy/RgdCx0YDQvtGB0LjRgtGMINCy0YHQtSDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQvtCyXG4gICAgY2FyZE5hbWVJbnAudmFsdWUgPSAnJztcbiAgICBjYXJkTmFtZUlucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICAgIGNhcmROdW1iZXJJbnAudmFsdWUgPSAnJztcbiAgICBjYXJkTnVtYmVySW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG5cblxuXG4gICAgLy/Qv9C+0LvRg9GH0LjRgtGMINCx0LvQvtC6INGBINC40L3RhNC+0Lkg0L4g0Y7Qt9C10YDQtVxuICAgIGNvbnN0IGNoZWNrQ2FyZEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19jb250ZW50Jyk7XG5cbiAgICAvL9C/0L7QvNC10L3Rj9GC0Ywg0YDQsNC30LzQtdGC0LrRgyDQv9C+0LQg0LfQsNC/0YDQvtGBINGO0LfQtdGA0LBcbiAgICBjaGVja0NhcmRCb3guaW5uZXJIVE1MID0gIGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fbGVmdCBmbGV4XCI+XG4gICAgPGgzIGNsYXNzPVwiY2FyZF9fbGVmdC1zdWJ0aXRsZVwiPllvdXIgTGlicmFyeSBjYXJkPC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fbGVmdC1ib3R0b21cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19sZWZ0LWluZm9cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkX19uYW1lXCI+QnJvb2tseW4gUHVibGljIExpYnJhcnk8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPSBcImNhcmRfX3VzZXItbmFtZVwiPiR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJOYW1lJyl9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJTdXJOYW1lJyl9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz0gXCJjYXJkX191c2VyLW51bWJlclwiPiR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmROdW1iZXInKX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzcz1cImNhcmRfX2xlZnQtaW5mby1saXN0IGxpc3QtcmVzZXQgaW5mby1saXN0XCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImluZm8tbGlzdF9faXRlbVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1saXN0LW5hbWVcIj5WaXNpdHM8L3NwYW4+XG4gICAgICAgICAgPHN2Zz5cbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cImltZy9zcHJpdGUuc3ZnI3Zpc2l0c1wiPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1saXN0LWNvdW50XCI+MTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiaW5mby1saXN0X19pdGVtXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWxpc3QtbmFtZVwiPkJvbnVzZXM8L3NwYW4+XG4gICAgICAgICAgPHN2Zz5cbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cImltZy9zcHJpdGUuc3ZnI2JvbnVzZXNcIj48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tbGlzdC1jb3VudFwiPjEyNDA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImluZm8tbGlzdF9faXRlbVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1saXN0LW5hbWVcIj5Cb29rczwvc3Bhbj5cbiAgICAgICAgICA8c3ZnPlxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiaW1nL3Nwcml0ZS5zdmcjYm9va3NcIj48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tbGlzdC1jb3VudFwiPjI8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNhcmRfX3JpZ2h0IGZsZXhcIj5cbiAgPGgzIGNsYXNzPVwiY2FyZF9fcmlnaHQtc3VidGl0bGVcIj5HZXQgYSByZWFkZXIgY2FyZDwvaDM+XG4gIDxwIGNsYXNzPVwiY2FyZF9fcmlnaHQtZGVzY3JcIj5Zb3Ugd2lsbCBiZSBhYmxlIHRvIHNlZSBhIHJlYWRlciBjYXJkIGFmdGVyIGxvZ2dpbmcgaW50byBhY2NvdW50IG9yIHlvdSBjYW4gcmVnaXN0ZXIgYSBuZXcgYWNjb3VudDwvcD5cbiAgPGRpdiBjbGFzcz1cImNhcmRfX3JpZ2h0LWJvdHRvbSBmbGV4XCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yZXNldCBjYXJkX19yaWdodC1idG4gY2FyZF9fcmlnaHQtYnRuLXJlZ2lzdGVyXCIgZGlzYWJsZWQ+U2lnbiBVcDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4tcmVzZXQgY2FyZF9fcmlnaHQtYnRuIGNhcmRfX3JpZ2h0LWJ0bi1sb2dpblwiIGRpc2FibGVkPkxvZyBpbjwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuICBgO1xuXG4gICAgLy/QstC10YDQvdGD0YLRjCDQtNC10YTQvtC70YLQvdGD0Y4g0YDQsNC30LzQtdGC0LrRgyDRh9C10YDQtdC3IDEw0YFcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgY2hlY2tDYXJkQm94LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY2FyZF9fbGVmdCBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZF9fbGVmdC1zdWJ0aXRsZVwiPkZpbmQgeW91ciBMaWJyYXJ5IGNhcmQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19sZWZ0LWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwiZm9ybSBjYXJkX19mb3JtIGZsZXhcIiBpZD1cImNhcmQtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fZm9ybS10b3AgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZF9fbmFtZVwiPkJyb29rbHluIFB1YmxpYyBMaWJyYXJ5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNhcmRfX2xhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0LXJlc2V0IGNhcmRfX2Zvcm0taW5wdXQgY2FyZF9fZm9ybS1pbnB1dC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJSZWFkZXIncyBuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHQtY2FyZCBlcnJvci10ZXh0IGNhcmRfX2Vycm9yLXRleHQtbmFtZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNhcmRfX2xhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0LXJlc2V0IGNhcmRfX2Zvcm0taW5wdXQgY2FyZF9fZm9ybS1pbnB1dC1udW1iZXJcIiBwbGFjZWhvbGRlcj1cIkNhcmQgbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHQtY2FyZCBlcnJvci10ZXh0IGNhcmRfX2Vycm9yLXRleHQtbnVtYmVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fZm9ybS1ib3R0b20gZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcmVzZXQgY2FyZF9fZm9ybS1idG5cIiB0eXBlPVwic3VibWl0XCI+Q2hlY2sgdGhlIGNhcmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fcmlnaHQgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmRfX3JpZ2h0LXN1YnRpdGxlXCI+R2V0IGEgcmVhZGVyIGNhcmQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fcmlnaHQtZGVzY3JcIj5Zb3Ugd2lsbCBiZSBhYmxlIHRvIHNlZSBhIHJlYWRlciBjYXJkIGFmdGVyIGxvZ2dpbmcgaW50byBhY2NvdW50IG9yIHlvdSBjYW4gcmVnaXN0ZXIgYSBuZXcgYWNjb3VudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fcmlnaHQtYm90dG9tIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcmVzZXQgY2FyZF9fcmlnaHQtYnRuIGNhcmRfX3JpZ2h0LWJ0bi1yZWdpc3RlclwiPlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcmVzZXQgY2FyZF9fcmlnaHQtYnRuIGNhcmRfX3JpZ2h0LWJ0bi1sb2dpblwiPkxvZyBpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgIC8v0L/RgNC40L3Rg9C00LjRgtC10LvRjNC90L4g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0Ywg0YHRgtGA0LDQvdC40YbRg1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSwgMTAwMDApO1xuXG4gIH0pO1xuXG4gIC8v0L7RgtC80LXQvdC40YLRjCDQtNC10YTQvtC70YLQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1INC60L3QvtC/0LrQuCDQv9GA0Lgg0YHQsNCx0LzQuNGC0LVcbiAgY2FyZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICB9KTtcbn07XG5cbiJdfQ==
