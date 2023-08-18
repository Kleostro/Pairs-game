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


// Описание PR

console.log(`
    1. Task: (https://github.com/rolling-scopes-school/tasks/blob/master/tasks/library/library-part1.md)
    \n
    2. Deploy: (https://rolling-scopes-school.github.io/kleostro-JSFEPRESCHOOL2023Q2/library/)
    \n
    3. Done 19.07.2023 / deadline 31.07.2023
    \n
    4. Score: 100 / 100
`);

// Скрипт для проверки количества тегов

console.log(`
    Небольшой бонус для ревьюеров :)
    \n
    Список используемых тегов в верстке:
`);

selectors = ['header',
  'main',
  'footer',
  'section',
  'nav',
  'ul',
  'li',
  'a',
  'button',
  'form',
  'input',
  'label',
  'h1',
  'h2',
  'h3',
  'h4',
  'p',
  'div',
  'article',
  'span',
  'img',
  'svg',
  'time',
];

let total = 0;
selectors.forEach((selector) => {
  const count = Array.from(document.querySelectorAll(selector)).length;
  console.log(`${selector}:  ${count}`);
  if (count > 0) total++;
});
console.log('Total unique: ', total);

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

    const favoritesBtns = document.querySelectorAll('.favorites-card__btn');

    favoritesBtns.forEach(function (el) {

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

const favoritesTab = document.querySelector('.favorites')

if(favoritesTab) {
let tabsBtn = document.querySelectorAll('.favorites__label');
let tabItem = document.querySelectorAll('.favorites__list-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){

    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('favorites__label--active')});
    e.currentTarget.classList.add('favorites__label--active');

    tabItem.forEach(function(element){ element.classList.remove('favorites__list-item--active')});
    document.querySelectorAll(`[data-target="${path}"]`).forEach(item => item.classList.toggle('favorites__list-item--active'));
  })
})
}


//после регистрации юзер зарегистрирован И авторизован

//если юзер зарегистрирован И авторизован
if (localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true') {

  //получить инициалы юзера в верхнем регистре
  let userNameInitial = localStorage.getItem('userName');
  let userSurNameInitial = localStorage.getItem('userSurName');
  let userInitials = `${userNameInitial[0].toUpperCase()}${userSurNameInitial[0].toUpperCase()}`;



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



//обработка клика по кнопке сабмита формы регистрации
registerFormBtn.addEventListener('click', (e) => {

  //остановить распространение поведения кнопки формы
  e.stopPropagation();

  //запретить скролл страницы при заполнении формы регистрации
  document.body.classList.add('stop-scroll');

  //получить все значения в инпутах
  let registerNameValue = registerNameInp.value;
  let registerSurNameValue = registerSurNameInp.value;
  let registerEmailValue = registerEmailInp.value;
  let registerPasswordValue = registerPasswordInp.value;

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
  let authorizedLoginValue = authorizedLoginInp.value;
  let authorizedPasswordValue = authorizedPasswordInp.value;

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



  //принудительно перезагрузить страницу
  location.reload();



  //сохранить в БД датчик успешной авторизации юзера
  localStorage.setItem('userAuthorized', true);



  //сбросить все значения инпутов
  authorizedLoginInp.value = '';
  authorizedLoginInp.classList.remove('complete');
  authorizedLoginInp.value = '';
  authorizedLoginInp.classList.remove('complete');
});





//отменить дефолтное поведение кнопки при сабмите
authorizedForm.addEventListener('submit', (e) => {

  e.preventDefault();

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudEJ0bi5qcyIsImNvbXBvbmVudHMvYnVyZ2VyLmpzIiwiY29tcG9uZW50cy9pbmRleC5qcyIsImNvbXBvbmVudHMvbW9kYWwuanMiLCJjb21wb25lbnRzL3N3aXBlci5qcyIsImNvbXBvbmVudHMvdGFicy5qcyIsImNvbXBvbmVudHMvdXNlckFmdGVyTG9naW4uanMiLCJjb21wb25lbnRzL3VzZXJBZnRlclJlZ2lzdGVyLmpzIiwiY29tcG9uZW50cy92YWxpZGF0aW9uRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhY2NvdW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2J0bicpO1xuY29uc3QgYWNjb3VudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fbGlzdCcpO1xuXG5pZiAoYWNjb3VudEJ0bikge1xuXG4gIGFjY291bnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWNjb3VudF9fbGlzdCcpICYmICFlLnRhcmdldC5jbG9zZXN0KCcuYWNjb3VudF9fbGlzdCcpICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY291bnRfX2J0bicpKSB7XG5cbiAgICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICAgIH07XG4gIH0pO1xufTtcblxuXG5cbmlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyUmVnaXN0ZXJlZCcpICE9PSAndHJ1ZScgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJBdXRob3JpemVkJykgIT09ICd0cnVlJyB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclJlZ2lzdGVyZWQnKSA9PT0gJ3RydWUnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyQXV0aG9yaXplZCcpICE9PSAndHJ1ZScpIHtcblxuICBhY2NvdW50QnRuLmlubmVySFRNTCA9IGBcbiAgPHN2Zz5cbiAgICA8dXNlIHhsaW5rOmhyZWY9XCJpbWcvc3ByaXRlLnN2ZyNhY2NvdW50XCI+PC91c2U+XG4gIDwvc3ZnPlxuICBgXG4gIGFjY291bnRMaXN0LmlubmVySFRNTCA9IGBcbiAgICA8c3Ryb25nIGNsYXNzPVwiYWNjb3VudF9fbGlzdC10ZXh0XCI+UHJvZmlsZTwvc3Ryb25nPlxuICAgIDxsaSBjbGFzcz1cImFjY291bnRfX2xpc3QtaXRlbVwiPjxidXR0b24gY2xhc3M9XCJhY2NvdW50X19saXN0LWJ1dHRvbiBhY2NvdW50X19saXN0LWJ1dHRvbi1sb2dpbiBidG4tcmVzZXRcIj5Mb2cgSW48L2J1dHRvbj48L2xpPlxuICAgIDxsaSBjbGFzcz1cImFjY291bnRfX2xpc3QtaXRlbVwiPjxidXR0b24gY2xhc3M9XCJhY2NvdW50X19saXN0LWJ1dHRvbiBhY2NvdW50X19saXN0LWJ1dHRvbi1yZWdpc3RlciBidG4tcmVzZXRcIj5SZWdpc3RlcjwvYnV0dG9uPjwvbGk+XG4gIGBcbn07XG4iLCJjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcblxuaWYgKGJ1cmdlcikge1xuXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcbiAgY29uc3QgbWVudUxpbmtzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fbGlzdC1saW5rXCIpO1xuXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJidXJnZXItLWFjdGl2ZVwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJzdG9wLXNjcm9sbFwiKTtcblxuICB9KTtcblxuICAgIG1lbnVMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlci0tYWN0aXZlXCIpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3RvcC1zY3JvbGxcIik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJnZXJcIikgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoXCIubmF2X19saXN0XCIpKSB7XG5cbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiYnVyZ2VyLS1hY3RpdmVcIik7XG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInN0b3Atc2Nyb2xsXCIpO1xuICAgIH07XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAyNykge1xuXG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcImJ1cmdlci0tYWN0aXZlXCIpO1xuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LS1hY3RpdmVcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzdG9wLXNjcm9sbFwiKTtcblxuICAgIH07XG4gIH0pO1xufTtcblxuIiwiLy8g0J/Qu9Cw0LLQvdGL0Lkg0YHQutGA0L7Qu9C7INC/0L4g0Y/QutC+0YDRj9C8XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCInKS5mb3JFYWNoKGxpbmsgPT4ge1xuXG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHJpbmcoMSk7XG5cbiAgICBjb25zdCBzY3JvbGxUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmKTtcbiAgICAvLyBjb25zdCB0b3BPZmZzZXQgPSA5MDtcbiAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSBzY3JvbGxUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnN0IG9mZnNldFBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uO1xuXG4gICAgd2luZG93LnNjcm9sbEJ5KHtcbiAgICAgIHRvcDogb2Zmc2V0UG9zaXRpb24sXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG4vLyDQntC/0LjRgdCw0L3QuNC1IFBSXG5cbmNvbnNvbGUubG9nKGBcbiAgICAxLiBUYXNrOiAoaHR0cHM6Ly9naXRodWIuY29tL3JvbGxpbmctc2NvcGVzLXNjaG9vbC90YXNrcy9ibG9iL21hc3Rlci90YXNrcy9saWJyYXJ5L2xpYnJhcnktcGFydDEubWQpXG4gICAgXFxuXG4gICAgMi4gRGVwbG95OiAoaHR0cHM6Ly9yb2xsaW5nLXNjb3Blcy1zY2hvb2wuZ2l0aHViLmlvL2tsZW9zdHJvLUpTRkVQUkVTQ0hPT0wyMDIzUTIvbGlicmFyeS8pXG4gICAgXFxuXG4gICAgMy4gRG9uZSAxOS4wNy4yMDIzIC8gZGVhZGxpbmUgMzEuMDcuMjAyM1xuICAgIFxcblxuICAgIDQuIFNjb3JlOiAxMDAgLyAxMDBcbmApO1xuXG4vLyDQodC60YDQuNC/0YIg0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0LrQvtC70LjRh9C10YHRgtCy0LAg0YLQtdCz0L7QslxuXG5jb25zb2xlLmxvZyhgXG4gICAg0J3QtdCx0L7Qu9GM0YjQvtC5INCx0L7QvdGD0YEg0LTQu9GPINGA0LXQstGM0Y7QtdGA0L7QsiA6KVxuICAgIFxcblxuICAgINCh0L/QuNGB0L7QuiDQuNGB0L/QvtC70YzQt9GD0LXQvNGL0YUg0YLQtdCz0L7QsiDQsiDQstC10YDRgdGC0LrQtTpcbmApO1xuXG5zZWxlY3RvcnMgPSBbJ2hlYWRlcicsXG4gICdtYWluJyxcbiAgJ2Zvb3RlcicsXG4gICdzZWN0aW9uJyxcbiAgJ25hdicsXG4gICd1bCcsXG4gICdsaScsXG4gICdhJyxcbiAgJ2J1dHRvbicsXG4gICdmb3JtJyxcbiAgJ2lucHV0JyxcbiAgJ2xhYmVsJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ3AnLFxuICAnZGl2JyxcbiAgJ2FydGljbGUnLFxuICAnc3BhbicsXG4gICdpbWcnLFxuICAnc3ZnJyxcbiAgJ3RpbWUnLFxuXTtcblxubGV0IHRvdGFsID0gMDtcbnNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICBjb25zdCBjb3VudCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmxlbmd0aDtcbiAgY29uc29sZS5sb2coYCR7c2VsZWN0b3J9OiAgJHtjb3VudH1gKTtcbiAgaWYgKGNvdW50ID4gMCkgdG90YWwrKztcbn0pO1xuY29uc29sZS5sb2coJ1RvdGFsIHVuaXF1ZTogJywgdG90YWwpO1xuIiwiY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuLy/QtdGB0LvQuCDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0LXRgdGC0Ywg0Y3Qu9C10LzQtdC90YIg0YEg0LrQu9Cw0YHRgdC+0LwgbW9kYWwsINCy0YvQv9C+0LvQvdC40YLRjCDRgdC70LXQtNGD0Y7RidC40Lkg0LrQvtC0OlxuaWYgKG1vZGFsKSB7XG5cbiAgLy/QvdCw0LnRgtC4INCy0YHQtSDRjdC70LXQvNC10L3RgtGLLCDQutC+0YLQvtGA0YvQtSDQvtGC0YHQvdC+0YHRj9GC0YHRjyDQuiDQvNC+0LTQsNC70LrQtSDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gIGNvbnN0IHJlZ2lzdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXItbW9kYWwnKTtcbiAgY29uc3QgcmVnaXN0ZXJNb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXItb3ZlcmxheScpO1xuICBjb25zdCByZWdpc3Rlck1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1jb250ZW50Jyk7XG5cbiAgLy/QuNC90LTQuNC60LDRgtC+0YAg0L7RgtC60YDRi9GC0L7QuSDQvNC+0LTQsNC70LrQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gIGxldCByZWdpc3Rlck9wZW5Nb2RhbCA9IGZhbHNlO1xuXG4gIC8v0L3QsNC50YLQuCDQstGB0LUg0LrQvdC+0L/QutC4LCDQutC+0YLQvtGA0YvQtSDQvtGC0L3QvtGB0Y/RgtGB0Y8g0Log0LzQvtC00LDQu9C60LUg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBjb25zdCByZWdpc3Rlck1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19idG4nKTtcbiAgY29uc3QgYWNjb3VudFJlZ2lzdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2xpc3QtYnV0dG9uLXJlZ2lzdGVyJyk7XG4gIGNvbnN0IENhcmRSZWdpc3RlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19yaWdodC1idG4tcmVnaXN0ZXInKTtcbiAgY29uc3QgcmVnaXN0ZXJNb2RhbEJ0bkxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19idG4tbG9naW4nKTtcblxuXG5cbiAgLy/QvdCw0LnRgtC4INCy0YHQtSDRjdC70LXQvNC10L3RgtGLLCDQutC+0YLQvtGA0YvQtSDQvtGC0L3QvtGB0Y/RgtGB0Y8g0Log0LzQvtC00LDQu9C60LUg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICBjb25zdCBsb2dJbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLW1vZGFsJyk7XG4gIGNvbnN0IGxvZ0luTW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLW92ZXJsYXknKTtcbiAgY29uc3QgbG9nSW5Nb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tY29udGVudCcpO1xuXG4gIC8v0LjQvdC00LjQutCw0YLQvtGAINC+0YLQutGA0YvRgtC+0Lkg0LzQvtC00LDQu9C60Lgg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICBsZXQgbG9nSW5PcGVuTW9kYWwgPSBmYWxzZTtcblxuICAvL9C90LDQudGC0Lgg0LLRgdC1INC60L3QvtC/0LrQuCwg0LrQvtGC0L7RgNGL0LUg0L7RgtC90L7RgdGP0YLRgdGPINC6INC80L7QtNCw0LvQutC1INCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgY29uc3QgYWNjb3VudExvZ0luQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2xpc3QtYnV0dG9uLWxvZ2luJyk7XG4gIGNvbnN0IGNhcmRMb2dJbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19yaWdodC1idG4tbG9naW4nKTtcbiAgY29uc3QgbG9nSW5Nb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1tb2RhbF9fYnRuJyk7XG4gIGNvbnN0IGxvZ0luTW9kYWxCdG5SZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1tb2RhbF9fYnRuLXJlZ2lzdGVyJyk7XG5cblxuXG4gIC8v0YTRg9C90LrRhtC40Y8g0L7RgtC60YDRi9GC0LjRjyDQvNC+0LTQsNC70LrQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gIGNvbnN0IG9wZW5Nb2RhbFJlZ2lzdGVyID0gKCkgPT4ge1xuICAgIHJlZ2lzdGVyTW9kYWwuY2xhc3NMaXN0LmFkZCgncmVnaXN0ZXItbW9kYWwtLWFjdGl2ZScpO1xuICAgIHJlZ2lzdGVyTW9kYWxPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyLW92ZXJsYXktLWFjdGl2ZScpO1xuICAgIHJlZ2lzdGVyTW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyLWNvbnRlbnQtLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc3RvcC1zY3JvbGwnKTtcbiAgICByZWdpc3Rlck9wZW5Nb2RhbCA9IHRydWU7XG4gIH07XG5cbiAgLy/RhNGD0L3QutGG0LjRjyDQt9Cw0LrRgNGL0YLQuNGPINC80L7QtNCw0LvQutC4INGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgY29uc3QgY2xvc2VNb2RhbFJlZ2lzdGVyID0gKCkgPT4ge1xuICAgIHJlZ2lzdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgncmVnaXN0ZXItbW9kYWwtLWFjdGl2ZScpO1xuICAgIHJlZ2lzdGVyTW9kYWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZ2lzdGVyLW92ZXJsYXktLWFjdGl2ZScpO1xuICAgIHJlZ2lzdGVyTW9kYWxDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZ2lzdGVyLWNvbnRlbnQtLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKTtcbiAgICByZWdpc3Rlck9wZW5Nb2RhbCA9IGZhbHNlO1xuICAgIHJlZ2lzdGVyTmFtZUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgcmVnaXN0ZXJOYW1lSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJTdXJOYW1lRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICByZWdpc3RlclN1ck5hbWVJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICByZWdpc3RlckVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICByZWdpc3RlckVtYWlsSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJQYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgcmVnaXN0ZXJQYXNzd29yZElucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICB9O1xuXG5cbiAgLy/RhNGD0L3QutGG0LjRjyDQvtGC0LrRgNGL0YLQuNGPINC80L7QtNCw0LvQutC4INCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgY29uc3Qgb3Blbk1vZGFsTG9nSW4gPSAoKSA9PiB7XG4gICAgbG9nSW5Nb2RhbC5jbGFzc0xpc3QuYWRkKCdsb2dpbi1tb2RhbC0tYWN0aXZlJyk7XG4gICAgbG9nSW5Nb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnbG9naW4tb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgbG9nSW5Nb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbG9naW4tY29udGVudC0tYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdG9wLXNjcm9sbCcpO1xuICAgIGxvZ0luT3Blbk1vZGFsID0gdHJ1ZTtcbiAgfTtcblxuICAvL9GE0YPQvdC60YbQuNGPINC30LDQutGA0YvRgtC40Y8g0LzQvtC00LDQu9C60Lgg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICBjb25zdCBjbG9zZU1vZGFsTG9nSW4gPSAoKSA9PiB7XG4gICAgbG9nSW5Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdsb2dpbi1tb2RhbC0tYWN0aXZlJyk7XG4gICAgbG9nSW5Nb2RhbE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnbG9naW4tb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgbG9nSW5Nb2RhbENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9naW4tY29udGVudC0tYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzdG9wLXNjcm9sbCcpO1xuICAgIGxvZ0luT3Blbk1vZGFsID0gZmFsc2U7XG4gICAgYXV0aG9yaXplZExvZ2luRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICBhdXRob3JpemVkTG9naW5JbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICBhdXRob3JpemVkUGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGF1dGhvcml6ZWRQYXNzd29yZElucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICB9O1xuXG5cblxuICAvLyDQtdGB0LvQuCDRjtC30LXRgCDQvdC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvSDQuNC70Lgg0L3QtSDQsNCy0YLQvtGA0LjQt9C+0LLQsNC9LCDRgtC+INC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyUmVnaXN0ZXJlZCcpICE9PSAndHJ1ZScgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJBdXRob3JpemVkJykgIT09ICd0cnVlJykge1xuXG4gICAgLy/Qv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRgyBSZWdpc3RlciDQsiDQtNGA0L7Qvy3Qu9C40YHRgtC1INC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgICBhY2NvdW50UmVnaXN0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgb3Blbk1vZGFsUmVnaXN0ZXIoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBhY2NvdW50TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvdW50X19saXN0LS1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8v0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMgU2lnbiBVcCDQsiDRgdC10LrRhtC40LggY2FyZCDQvtGC0LrRgNGL0YLRjCDQvNC+0LTQsNC70LrRgyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gICAgQ2FyZFJlZ2lzdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIG9wZW5Nb2RhbFJlZ2lzdGVyKCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgYWNjb3VudExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3VudF9fbGlzdC0tYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAvL9C/0YDQuCDQutC70LjQutC1INC90LAg0LrRgNC10YHRgtC40Log0LIg0LzQvtC00LDQu9C60LUg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQt9Cw0LrRgNGL0YLRjCDQtdC1XG4gICAgcmVnaXN0ZXJNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWxSZWdpc3Rlcik7XG5cbiAgICAvL9C/0YDQuCDQvtGC0LrRgNGL0YLQvtC5INC80L7QtNCw0LvQutC1INGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0Lgg0L/RgNC4INC70Y7QsdC+0Lwg0LrQu9C40LrQtSDQstC90LUg0L7QsdC70LDRgdGC0Lgg0LfQsNC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChyZWdpc3Rlck9wZW5Nb2RhbCA9PT0gdHJ1ZSAmJiAhZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jb250ZW50JykpIHtcbiAgICAgICAgY2xvc2VNb2RhbFJlZ2lzdGVyKCk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgLy/Qv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRgyBMb2dpbiDQsiDQvNC+0LTQsNC70LrQtSDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC30LDQutGA0YvRgtGMINC10LUg0Lgg0L7RgtC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICAgIHJlZ2lzdGVyTW9kYWxCdG5Mb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjbG9zZU1vZGFsUmVnaXN0ZXIoKTtcbiAgICAgIG9wZW5Nb2RhbExvZ0luKCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICB9O1xuXG5cblxuICAvL9C10YHQu9C4INGO0LfQtdGAINC90LUg0LDQstGC0L7RgNC40LfQvtCy0LDQvSwg0YLQviDQvtGC0LrRgNGL0YLRjCDQvNC+0LTQsNC70LrRgyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckF1dGhvcml6ZWQnKSAhPT0gJ3RydWUnKSB7XG5cbiAgICAvL9C/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDIExvZyBJbiDQsiDQtNGA0L7Qvy3Qu9C40YHRgtC1INC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgICBhY2NvdW50TG9nSW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgb3Blbk1vZGFsTG9nSW4oKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBhY2NvdW50TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvdW50X19saXN0LS1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8v0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMgTG9nIEluINCyINGB0LXQutGG0LjQuCBjYXJkINC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgICBjYXJkTG9nSW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgb3Blbk1vZGFsTG9nSW4oKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBhY2NvdW50TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvdW50X19saXN0LS1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8v0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutGA0LXRgdGC0LjQuiDQsiDQvNC+0LTQsNC70LrQtSDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC30LDQutGA0YvRgtGMINC10LVcbiAgICBsb2dJbk1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbExvZ0luKTtcblxuICAgIC8v0L/RgNC4INC+0YLQutGA0YvRgtC+0Lkg0LzQvtC00LDQu9C60LUg0LDQstGC0L7RgNC40LfQsNGG0LjQuCDQuCDQv9GA0Lgg0LvRjtCx0L7QvCDQutC70LjQutC1INCy0L3QtSDQvtCx0LvQsNGB0YLQuCDQt9Cw0LrRgNGL0YLRjCDQvNC+0LTQsNC70LrRgyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGxvZ0luT3Blbk1vZGFsID09PSB0cnVlICYmICFlLnRhcmdldC5jbG9zZXN0KCcubW9kYWxfX2NvbnRlbnQnKSkge1xuICAgICAgICBjbG9zZU1vZGFsTG9nSW4oKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvL9C/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDIFJlZ2lzdGVyINCyINC80L7QtNCw0LvQutC1INCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0LfQsNC60YDRi9GC0Ywg0LXQtSDQuCDQvtGC0LrRgNGL0YLRjCDQvNC+0LTQsNC70LrRgyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gICAgbG9nSW5Nb2RhbEJ0blJlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNsb3NlTW9kYWxMb2dJbigpO1xuICAgICAgb3Blbk1vZGFsUmVnaXN0ZXIoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy/QtdGB0LvQuCDRjtC30LXRgCDQvdC1INCw0LLRgtC+0YDQuNC30LjRgNC+0LLQsNC9LCDRgtC+INC+0YLQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0L/RgNC4INC60LvQuNC60LUg0L3QsCDQu9GO0LHRg9GOINC60L3QvtC/0LrRgyBidXkg0LIg0YHQtdC60YbQuNC4IGZhdm9yaXRlc1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJBdXRob3JpemVkJykgIT09ICd0cnVlJykge1xuXG4gICAgY29uc3QgZmF2b3JpdGVzQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZXMtY2FyZF9fYnRuJyk7XG5cbiAgICBmYXZvcml0ZXNCdG5zLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG5cbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb3Blbk1vZGFsTG9nSW4oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufTtcblxuXG4iLCJjb25zdCBzd2lwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcicpO1xuXG5pZihzd2lwZXJzKSB7XG4gIG5ldyBTd2lwZXIgKCcuc3dpcGVyJywge1xuXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiAzMDAwLFxuICAgIH0sXG5cbiAgICBicmVha3BvaW50czoge1xuICAgICAgMToge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNSxcbiAgICAgIH0sXG4gICAgICA3Njk6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjUsXG4gICAgICB9LFxuICAgICAgMTI3MDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNSxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dC1hYm91dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2LWFib3V0JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxuXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuYWJvdXRfX3BhZ2luYXRpb24nLFxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgYnVsbGV0QWN0aXZlQ2xhc3M6ICdhYm91dF9fcGFnaW5hdGlvbi1idWxsZXQtLWFjdGl2ZScsXG4gICAgICBidWxsZXRDbGFzczogXHQnYWJvdXRfX3BhZ2luYXRpb24tYnVsbGV0JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn07XG4iLCJjb25zdCBmYXZvcml0ZXNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzJylcblxuaWYoZmF2b3JpdGVzVGFiKSB7XG5sZXQgdGFic0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZXNfX2xhYmVsJyk7XG5sZXQgdGFiSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZXNfX2xpc3QtaXRlbScpO1xuXG50YWJzQnRuLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcblxuICAgIGNvbnN0IHBhdGggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wYXRoO1xuXG4gICAgdGFic0J0bi5mb3JFYWNoKGZ1bmN0aW9uKGJ0bil7IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmYXZvcml0ZXNfX2xhYmVsLS1hY3RpdmUnKX0pO1xuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZXNfX2xhYmVsLS1hY3RpdmUnKTtcblxuICAgIHRhYkl0ZW0uZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXsgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmYXZvcml0ZXNfX2xpc3QtaXRlbS0tYWN0aXZlJyl9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZmF2b3JpdGVzX19saXN0LWl0ZW0tLWFjdGl2ZScpKTtcbiAgfSlcbn0pXG59XG4iLCIiLCIvL9C/0L7RgdC70LUg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDRjtC30LXRgCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L0g0Jgg0LDQstGC0L7RgNC40LfQvtCy0LDQvVxuXG4vL9C10YHQu9C4INGO0LfQtdGAINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvSDQmCDQsNCy0YLQvtGA0LjQt9C+0LLQsNC9XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJSZWdpc3RlcmVkJykgPT09ICd0cnVlJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckF1dGhvcml6ZWQnKSA9PT0gJ3RydWUnKSB7XG5cbiAgLy/Qv9C+0LvRg9GH0LjRgtGMINC40L3QuNGG0LjQsNC70Ysg0Y7Qt9C10YDQsCDQsiDQstC10YDRhdC90LXQvCDRgNC10LPQuNGB0YLRgNC1XG4gIGxldCB1c2VyTmFtZUluaXRpYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKTtcbiAgbGV0IHVzZXJTdXJOYW1lSW5pdGlhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyU3VyTmFtZScpO1xuICBsZXQgdXNlckluaXRpYWxzID0gYCR7dXNlck5hbWVJbml0aWFsWzBdLnRvVXBwZXJDYXNlKCl9JHt1c2VyU3VyTmFtZUluaXRpYWxbMF0udG9VcHBlckNhc2UoKX1gO1xuXG5cblxuICAvL9C10YHQu9C4INGO0LfQtdGA0L3QtdC50Lwg0LXRgdGC0Ywg0LIg0JHQlCwg0YLQviDQstC80LXRgdGC0L4g0YHQstCzINC40LrQvtC90LrQuCDQsiDQutC90L7Qv9C60LUg0Y7Qt9C10YDQsCDQstGB0YLQsNCy0LjRgtGMINC10LPQviDQuNC90LjRhtC40LDQu9GLXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKSkge1xuXG4gICAgLy/Qt9Cw0LzQtdC90LjRgtGMINGB0L7QtNC10YDQttC40LzRi9C5INC60L7QtCDQutC90L7Qv9C60Lgg0Y7Qt9C10YDQsCDQvdCwINC10LPQviDQuNC90LjRhtC40LDQu9GLXG4gICAgYWNjb3VudEJ0bi5pbm5lckhUTUwgPSB1c2VySW5pdGlhbHM7XG4gICAgYWNjb3VudEJ0bi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJOYW1lJyl9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJTdXJOYW1lJyl9YClcbiAgICBhY2NvdW50QnRuLmNsYXNzTGlzdC5hZGQoJ2FjY291bnRfX2J0bi1hZnRlci1yZWdpc3RlcicpO1xuXG4gICAgLy/Qt9Cw0LzQtdC90LjRgtGMINGB0L7QtNC10YDQttC40LzRi9C5INC60L7QtCDQtNGA0L7Qvy3Qu9C40YHRgtCwINC90LAg0LTRgNC+0L8t0LvQuNGB0YIg0L/QvtGB0LvQtSDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG4gICAgYWNjb3VudExpc3QuY2xhc3NMaXN0LmFkZCgnYWNjb3VudF9fbGlzdC1sb2dpbicpO1xuICAgIGFjY291bnRMaXN0LmlubmVySFRNTCA9IGBcbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cImFjY291bnRfX2xpc3QtdGV4dFwiPiR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmROdW1iZXInKX08L3N0cm9uZz5cbiAgICAgICAgPGxpIGNsYXNzPVwiYWNjb3VudF9fbGlzdC1pdGVtXCI+PGJ1dHRvbiBjbGFzcz1cImFjY291bnRfX2xpc3QtYnV0dG9uIGFjY291bnRfX2xpc3QtYnV0dG9uLW15LXByb2ZpbGUgYnRuLXJlc2V0XCI+TXkgcHJvZmlsZTwvYnV0dG9uPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImFjY291bnRfX2xpc3QtaXRlbVwiPjxidXR0b24gY2xhc3M9XCJhY2NvdW50X19saXN0LWJ1dHRvbiBhY2NvdW50X19saXN0LWJ1dHRvbi1sb2dvdXQgYnRuLXJlc2V0XCI+TG9nIE91dDwvYnV0dG9uPjwvbGk+XG4gICAgICBgXG5cbiAgfTtcbn07XG5cblxuXG4vL9Cy0YvRhdC+0LQg0LjQtyDQv9GA0L7RhNC40LvRj1xuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0LrQvdC+0L/QutGDINCy0YvRhdC+0LTQsCDQuNC3INC/0YDQvtGE0LjQu9GPXG5jb25zdCBsb2dPdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fbGlzdC1idXR0b24tbG9nb3V0Jyk7XG5cbi8v0LXRgdC70Lgg0LXRgdGC0Ywg0LrQvdC+0L/QutCwINCy0YvRhdC+0LTQsCDQuNC3INC/0YDQvtGE0LjQu9GPLCDRgtC+INC/0YDQuCDQutC70LjQutC1INC90LAg0L3QtdC1INGD0LTQsNC70LjRgtGMINCw0LLRgtC+0YDQuNC30LDRhtC40Y4g0Y7Qt9C10YDQsCDQuNC3INC/0YDQvtGE0LjQu9GPINC4INC/0LXRgNC10LfQsNCz0YDRg9C30LjRgtGMINGB0YLRgNCw0L3QuNGG0YMsINGC0LXQvCDRgdCw0LzRi9C8INGD0LHRgNCw0YLRjCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNGOINGBINGO0LfQtdGA0LBcbmlmIChsb2dPdXRCdG4pIHtcblxuICBsb2dPdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJBdXRob3JpemVkJyk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgfSk7XG59O1xuIiwiLy8g0LLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC80Ysg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0YTQvtGA0LzRgyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG5jb25zdCByZWdpc3RlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItZm9ybScpO1xuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0LLRgdC1INC40L3Qv9GD0YLRiyDQsiDRhNC+0YDQvNC1INGA0LXQs9C40YHRgtGA0LDRhtC40LhcbmNvbnN0IHJlZ2lzdGVyTmFtZUlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9faW5wdXQtbmFtZScpO1xuY29uc3QgcmVnaXN0ZXJTdXJOYW1lSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19pbnB1dC1zdXJuYW1lJyk7XG5jb25zdCByZWdpc3RlckVtYWlsSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19pbnB1dC1lbWFpbCcpO1xuY29uc3QgcmVnaXN0ZXJQYXNzd29yZElucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9faW5wdXQtcGFzc3dvcmQnKTtcblxuLy/Qv9C+0LvRg9GH0LjRgtGMINC/0L7Qu9GPINC00LvRjyDQstGL0LLQvtC00LAg0L7RiNC40LHQvtC6INCyINC40L3Qv9GD0YLQsNGFXG5jb25zdCByZWdpc3Rlck5hbWVFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9fZXJyb3ItdGV4dC1uYW1lJyk7XG5jb25zdCByZWdpc3RlclN1ck5hbWVFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9fZXJyb3ItdGV4dC1zdXJuYW1lJyk7XG5jb25zdCByZWdpc3RlckVtYWlsRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXItbW9kYWxfX2Vycm9yLXRleHQtZW1haWwnKTtcbmNvbnN0IHJlZ2lzdGVyUGFzc3dvcmRFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9fZXJyb3ItdGV4dC1wYXNzd29yZCcpO1xuXG4vL9C/0L7Qu9GD0YfQuNGC0Ywg0LrQvdC+0L/QutGDINC00LvRjyDRgdCw0LHQvNC40YLQsCDRhNC+0YDQvNGLINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbmNvbnN0IHJlZ2lzdGVyRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9fYnRuLXN1Ym1pdCcpO1xuXG5cblxuLy/QvtCx0YDQsNCx0L7RgtC60LAg0LrQu9C40LrQsCDQv9C+INC60L3QvtC/0LrQtSDRgdCw0LHQvNC40YLQsCDRhNC+0YDQvNGLINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbnJlZ2lzdGVyRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgLy/QvtGB0YLQsNC90L7QstC40YLRjCDRgNCw0YHQv9GA0L7RgdGC0YDQsNC90LXQvdC40LUg0L/QvtCy0LXQtNC10L3QuNGPINC60L3QvtC/0LrQuCDRhNC+0YDQvNGLXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgLy/Qt9Cw0L/RgNC10YLQuNGC0Ywg0YHQutGA0L7Qu9C7INGB0YLRgNCw0L3QuNGG0Ysg0L/RgNC4INC30LDQv9C+0LvQvdC10L3QuNC4INGE0L7RgNC80Ysg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3N0b3Atc2Nyb2xsJyk7XG5cbiAgLy/Qv9C+0LvRg9GH0LjRgtGMINCy0YHQtSDQt9C90LDRh9C10L3QuNGPINCyINC40L3Qv9GD0YLQsNGFXG4gIGxldCByZWdpc3Rlck5hbWVWYWx1ZSA9IHJlZ2lzdGVyTmFtZUlucC52YWx1ZTtcbiAgbGV0IHJlZ2lzdGVyU3VyTmFtZVZhbHVlID0gcmVnaXN0ZXJTdXJOYW1lSW5wLnZhbHVlO1xuICBsZXQgcmVnaXN0ZXJFbWFpbFZhbHVlID0gcmVnaXN0ZXJFbWFpbElucC52YWx1ZTtcbiAgbGV0IHJlZ2lzdGVyUGFzc3dvcmRWYWx1ZSA9IHJlZ2lzdGVyUGFzc3dvcmRJbnAudmFsdWU7XG5cbiAgLy/QtNCw0YLRh9C40Log0LLQsNC70LjQtNCw0YbQuNC4INGE0L7RgNC80Ysg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBsZXQgcmVnaXN0ZXJWYWxpZGF0aW9uUmVzdWx0ID0gZmFsc2U7XG5cblxuXG4gIC8v0LLQsNC70LjQtNCw0YbQuNGPINC30L3QsNGH0LXQvdC40Y8g0LjQvdC/0YPRgtCwINC40LzQtdC90LhcbiAgcmVnaXN0ZXJOYW1lRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgaWYgKHJlZ2lzdGVyTmFtZVZhbHVlID09PSAnJykge1xuXG4gICAgcmVnaXN0ZXJOYW1lSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJOYW1lRXJyb3IudGV4dENvbnRlbnQgPSAnRmlsbCBpbiB0aGUgZmllbGQnO1xuICAgIHJlZ2lzdGVyVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG5cbiAgfSBlbHNlIGlmIChyZWdpc3Rlck5hbWVWYWx1ZS5sZW5ndGggPCAzKSB7XG5cbiAgICByZWdpc3Rlck5hbWVJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICByZWdpc3Rlck5hbWVFcnJvci50ZXh0Q29udGVudCA9ICdOYW1lIGxlbmd0aCBtdXN0IGJlIG1vcmUgdGhhbiAzIGNoYXJhY3RlcnMnO1xuICAgIHJlZ2lzdGVyVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG5cbiAgfSBlbHNlIHtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyTmFtZScsIHJlZ2lzdGVyTmFtZVZhbHVlKTtcbiAgICByZWdpc3Rlck5hbWVJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICByZWdpc3Rlck5hbWVJbnAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcblxuICB9O1xuXG5cblxuICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQsCDRhNCw0LzQuNC70LjQuFxuICByZWdpc3RlclN1ck5hbWVFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAocmVnaXN0ZXJTdXJOYW1lVmFsdWUgPT09ICcnKSB7XG5cbiAgICByZWdpc3RlclN1ck5hbWVJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICByZWdpc3RlclN1ck5hbWVFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKHJlZ2lzdGVyU3VyTmFtZVZhbHVlLmxlbmd0aCA8IDMpIHtcblxuICAgIHJlZ2lzdGVyU3VyTmFtZUlucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIHJlZ2lzdGVyU3VyTmFtZUVycm9yLnRleHRDb250ZW50ID0gJ0xhc3QgbmFtZSBtdXN0IGJlIG1vcmUgdGhhbiAzIGNoYXJhY3RlcnMnO1xuICAgIHJlZ2lzdGVyVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG5cbiAgfSBlbHNlIHtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyU3VyTmFtZScsIHJlZ2lzdGVyU3VyTmFtZVZhbHVlKTtcbiAgICByZWdpc3RlclN1ck5hbWVJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICByZWdpc3RlclN1ck5hbWVJbnAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcblxuICB9O1xuXG5cblxuICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQsCDQv9C+0YfRgtGLXG4gIHJlZ2lzdGVyRW1haWxFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAocmVnaXN0ZXJFbWFpbFZhbHVlID09PSAnJykge1xuXG4gICAgcmVnaXN0ZXJFbWFpbElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIHJlZ2lzdGVyRW1haWxFcnJvci50ZXh0Q29udGVudCA9ICdGaWxsIGluIHRoZSBmaWVsZCc7XG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKHJlZ2lzdGVyRW1haWxWYWx1ZS5sZW5ndGggPCAzKSB7XG5cbiAgICByZWdpc3RlckVtYWlsSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICByZWdpc3RlckVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnTWFpbCBsZW5ndGggbXVzdCBiZSBtb3JlIHRoYW4gMyBjaGFyYWN0ZXJzJztcbiAgICByZWdpc3RlclZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuXG4gIH0gZWxzZSBpZiAocmVnaXN0ZXJFbWFpbFZhbHVlLmluY2x1ZGVzKCdAJykgIT09IHRydWUpIHtcblxuICAgIHJlZ2lzdGVyRW1haWxJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICByZWdpc3RlckVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnTWFpbCBtdXN0IGNvbnRhaW4gXFwnQFxcJyc7XG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2Uge1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJFbWFpbCcsIHJlZ2lzdGVyRW1haWxWYWx1ZSk7XG4gICAgcmVnaXN0ZXJFbWFpbElucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIHJlZ2lzdGVyRW1haWxJbnAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcblxuICB9O1xuXG5cblxuICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQsCDQv9Cw0YDQvtC70Y9cbiAgcmVnaXN0ZXJQYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gIGlmIChyZWdpc3RlclBhc3N3b3JkVmFsdWUgPT09ICcnKSB7XG5cbiAgICByZWdpc3RlclBhc3N3b3JkSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgcmVnaXN0ZXJQYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ0ZpbGwgaW4gdGhlIGZpZWxkJztcbiAgICByZWdpc3RlclZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuXG4gIH0gZWxzZSBpZiAocmVnaXN0ZXJQYXNzd29yZFZhbHVlLmxlbmd0aCA8IDgpIHtcblxuICAgIHJlZ2lzdGVyUGFzc3dvcmRJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICByZWdpc3RlclBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnUGFzc3dvcmQgbGVuZ3RoIG11c3QgYmUgbW9yZSB0aGFuIDggY2hhcmFjdGVycyc7XG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2Uge1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJQYXNzd29yZCcsIHJlZ2lzdGVyUGFzc3dvcmRWYWx1ZSk7XG4gICAgcmVnaXN0ZXJQYXNzd29yZElucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIHJlZ2lzdGVyUGFzc3dvcmRJbnAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcblxuICB9O1xuXG5cblxuICAvL9C10YHQu9C4INC10YHRgtGMINC+0YjQuNCx0LrQsCDQsiDQstCw0LvQuNC00LDRhtC40LgsINGC0L4g0LfQsNC90L7QstC+INC/0YDQvtC50YLQuNGB0Ywg0L/QviDQstGB0LXQvCDQt9C90LDRh9C10L3QuNGP0Lwg0LjQvdC/0YPRgtCw0LxcbiAgaWYgKHJlZ2lzdGVyVmFsaWRhdGlvblJlc3VsdCA9PT0gdHJ1ZSkge1xuXG4gICAgcmV0dXJuO1xuXG4gIH07XG5cblxuXG4gIC8v0L/QvtGB0LvQtSDRg9GB0L/QtdGI0L3QvtC5INGA0LXQs9C40YHRgtGA0LDRhtC40LhcblxuICAvL9C30LDQutGA0YvRgtGMINC80L7QtNCw0LvQutGDINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgcmVnaXN0ZXJGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY2xvc2VNb2RhbFJlZ2lzdGVyKCk7XG5cbiAgfSk7XG5cblxuXG4gIC8v0L/RgNC40L3Rg9C00LjRgtC10LvRjNC90L4g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0Ywg0YHRgtGA0LDQvdC40YbRg1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcblxuXG5cbiAgLy/RgdCx0YDQvtGB0LjRgtGMINCy0YHQtSDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQvtCyXG4gIHJlZ2lzdGVyTmFtZUlucC52YWx1ZSA9ICcnO1xuICByZWdpc3Rlck5hbWVJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgcmVnaXN0ZXJTdXJOYW1lSW5wLnZhbHVlID0gJyc7XG4gIHJlZ2lzdGVyU3VyTmFtZUlucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICByZWdpc3RlckVtYWlsSW5wLnZhbHVlID0gJyc7XG4gIHJlZ2lzdGVyRW1haWxJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgcmVnaXN0ZXJQYXNzd29yZElucC52YWx1ZSA9ICcnO1xuICByZWdpc3RlclBhc3N3b3JkSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG5cblxuXG4gIC8v0YHQs9C10L3QtdGA0LjRgNC+0LLQsNGC0Ywg0YHQu9GD0YfQsNC50L3QvtC1INC00LXQstGP0YLQuNC30L3QsNGH0L3QvtC1INGH0LjRgdC70L5cbiAgbGV0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMDAwMDAwMCkgKyAxMDAwMDAwMDA7XG5cbiAgLy/RgdC60L7QvdCy0LXRgNGC0LjRgNC+0LLQsNGC0Ywg0YfQuNGB0LvQviDQsiAxNi3RgNC40YfQvdGD0Y4g0YHQuNGB0YLQtdC80YNcbiAgbGV0IGhleE51bWJlciA9IHJhbmRvbU51bWJlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblxuICAvL9C00L7QsdCw0LLQuNGC0Ywg0LLQtdC00YPRidC40LUg0L3Rg9C70LgsINC10YHQu9C4INC90LXQvtCx0YXQvtC00LjQvNC+XG4gIHdoaWxlIChoZXhOdW1iZXIubGVuZ3RoIDwgOSkge1xuXG4gICAgaGV4TnVtYmVyID0gXCIwXCIgKyBoZXhOdW1iZXI7XG5cbiAgfTtcblxuICAvL9GB0L7RhdGA0LDQvdC40YLRjCDQsiDQkdCUINGB0LPQtdC90LXRgNC40YDQvtCy0LDQvdC90YvQuSBjYXJkTnVtYmVyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJkTnVtYmVyJywgaGV4TnVtYmVyKTtcblxuICAvL9GB0L7RhdGA0LDQvdC40YLRjCDQsiDQkdCUINC00LDRgtGH0LjQutC4INGD0YHQv9C10YjQvdGL0YUg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQuCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4INGO0LfQtdGA0LBcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJSZWdpc3RlcmVkJywgdHJ1ZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyQXV0aG9yaXplZCcsIHRydWUpO1xufSk7XG5cblxuLy/QvtGC0LzQtdC90LjRgtGMINC00LXRhNC+0LvRgtC90L7QtSDQv9C+0LLQtdC00LXQvdC40LUg0LrQvdC+0L/QutC4INC/0YDQuCDRgdCw0LHQvNC40YLQtVxucmVnaXN0ZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG59KTtcblxuXG5cblxuXG4vLyDQstCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LzRiyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG5cbi8v0L/QvtC70YPRh9C40YLRjCDRhNC+0YDQvNGDINCw0LLRgtC+0YDQuNC30LDRhtC40LhcbmNvbnN0IGF1dGhvcml6ZWRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWZvcm0nKTtcblxuLy/Qv9C+0LvRg9GH0LjRgtGMINCy0YHQtSDQuNC90L/Rg9GC0Ysg0LIg0YTQvtGA0LzQtSDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG5jb25zdCBhdXRob3JpemVkTG9naW5JbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tbW9kYWxfX2lucHV0LWxvZ2luJyk7XG5jb25zdCBhdXRob3JpemVkUGFzc3dvcmRJbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tbW9kYWxfX2lucHV0LXBhc3N3b3JkJyk7XG5cbi8v0L/QvtC70YPRh9C40YLRjCDQv9C+0LvRjyDQtNC70Y8g0LLRi9Cy0L7QtNCwINC+0YjQuNCx0L7QuiDQsiDQuNC90L/Rg9GC0LDRhVxuY29uc3QgYXV0aG9yaXplZExvZ2luRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tbW9kYWxfX2Vycm9yLXRleHQtbG9naW4nKTtcbmNvbnN0IGF1dGhvcml6ZWRQYXNzd29yZEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLW1vZGFsX19lcnJvci10ZXh0LXBhc3N3b3JkJyk7XG5cbi8v0L/QvtC70YPRh9C40YLRjCDQutC90L7Qv9C60YMg0LTQu9GPINGB0LDQsdC80LjRgtCwINGE0L7RgNC80Ysg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuY29uc3QgYXV0aG9yaXplZEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tbW9kYWxfX2J0bi1sb2dpbicpO1xuXG5cblxuLy/QvtCx0YDQsNCx0L7RgtC60LAg0LrQu9C40LrQsCDQv9C+INC60L3QvtC/0LrQtSDRgdCw0LHQvNC40YLQsCDRhNC+0YDQvNGLINCw0LLRgtC+0YDQuNC30LDRhtC40LhcbmF1dGhvcml6ZWRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAvL9C+0YHRgtCw0L3QvtCy0LjRgtGMINGA0LDRgdC/0YDQvtGB0YLRgNCw0L3QtdC90LjQtSDQv9C+0LLQtdC00LXQvdC40Y8g0LrQvdC+0L/QutC4INGE0L7RgNC80YtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAvL9C30LDQv9GA0LXRgtC40YLRjCDRgdC60YDQvtC70Lsg0YHRgtGA0LDQvdC40YbRiyDQv9GA0Lgg0LfQsNC/0L7Qu9C90LXQvdC40Lgg0YTQvtGA0LzRiyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc3RvcC1zY3JvbGwnKTtcblxuICAvL9C/0L7Qu9GD0YfQuNGC0Ywg0LLRgdC1INC30L3QsNGH0LXQvdC40Y8g0LIg0LjQvdC/0YPRgtCw0YVcbiAgbGV0IGF1dGhvcml6ZWRMb2dpblZhbHVlID0gYXV0aG9yaXplZExvZ2luSW5wLnZhbHVlO1xuICBsZXQgYXV0aG9yaXplZFBhc3N3b3JkVmFsdWUgPSBhdXRob3JpemVkUGFzc3dvcmRJbnAudmFsdWU7XG5cbiAgLy/QtNCw0YLRh9C40Log0LLQsNC70LjQtNCw0YbQuNC4INGE0L7RgNC80Ysg0LDRgtC+0YDQuNC30LDRhtC40LhcbiAgbGV0IGF1dGhvcml6ZWRWYWxpZGF0aW9uUmVzdWx0ID0gZmFsc2U7XG5cblxuXG4gIC8v0LLQsNC70LjQtNCw0YbQuNGPINC30L3QsNGH0LXQvdC40Y8g0LjQvdC/0YPRgtCwINC70L7Qs9C40L3QsFxuICBhdXRob3JpemVkTG9naW5FcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAoYXV0aG9yaXplZExvZ2luVmFsdWUgPT09ICcnKSB7XG4gICAgYXV0aG9yaXplZExvZ2luSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYXV0aG9yaXplZExvZ2luRXJyb3IudGV4dENvbnRlbnQgPSAnRmlsbCBpbiB0aGUgZmllbGQnO1xuICAgIGF1dGhvcml6ZWRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChhdXRob3JpemVkTG9naW5WYWx1ZSAhPT0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJFbWFpbCcpICYmIGF1dGhvcml6ZWRMb2dpblZhbHVlICE9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FyZE51bWJlcicpKSB7XG4gICAgYXV0aG9yaXplZExvZ2luSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYXV0aG9yaXplZExvZ2luRXJyb3IudGV4dENvbnRlbnQgPSAnVGhpcyBtYWlsIG9yIHJlYWRlcnMgY2FyZCBpcyBub3QgcmVnaXN0ZXJlZCc7XG4gICAgYXV0aG9yaXplZFZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGF1dGhvcml6ZWRMb2dpbklucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIGF1dGhvcml6ZWRMb2dpbklucC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuICB9O1xuXG5cblxuICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQsCDQv9Cw0YDQvtC70Y9cbiAgYXV0aG9yaXplZFBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgaWYgKGF1dGhvcml6ZWRQYXNzd29yZFZhbHVlID09PSAnJykge1xuXG4gICAgYXV0aG9yaXplZFBhc3N3b3JkSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgYXV0aG9yaXplZFBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnRmlsbCBpbiB0aGUgZmllbGQnO1xuICAgIGF1dGhvcml6ZWRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKGF1dGhvcml6ZWRQYXNzd29yZFZhbHVlLmxlbmd0aCA8IDgpIHtcblxuICAgIGF1dGhvcml6ZWRQYXNzd29yZElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGF1dGhvcml6ZWRQYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ1Bhc3N3b3JkIGxlbmd0aCBtdXN0IGJlIG1vcmUgdGhhbiA4IGNoYXJhY3RlcnMnO1xuICAgIGF1dGhvcml6ZWRWYWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKGF1dGhvcml6ZWRQYXNzd29yZFZhbHVlICE9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclBhc3N3b3JkJykpIHtcblxuICAgIGF1dGhvcml6ZWRQYXNzd29yZElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGF1dGhvcml6ZWRQYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ3dyb25nIHBhc3N3b3JkJztcbiAgICBhdXRob3JpemVkVmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG5cbiAgfSBlbHNlIHtcblxuICAgIGF1dGhvcml6ZWRQYXNzd29yZElucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIGF1dGhvcml6ZWRQYXNzd29yZElucC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuXG4gIH07XG5cblxuXG4gIC8v0LXRgdC70Lgg0LXRgdGC0Ywg0L7RiNC40LHQutCwINCyINCy0LDQu9C40LTQsNGG0LjQuCwg0YLQviDQt9Cw0L3QvtCy0L4g0L/RgNC+0LnRgtC40YHRjCDQv9C+INCy0YHQtdC8INC30L3QsNGH0LXQvdC40Y/QvCDQuNC90L/Rg9GC0LDQvFxuICBpZiAoYXV0aG9yaXplZFZhbGlkYXRpb25SZXN1bHQgPT09IHRydWUpIHtcblxuICAgIHJldHVybjtcblxuICB9O1xuXG5cblxuICAvL9C/0L7RgdC70LUg0YPRgdC/0LXRiNC90L7QuSDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG5cbiAgLy/Qt9Cw0LrRgNGL0YLRjCDQvNC+0LTQsNC70LrRgyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XG4gIGF1dGhvcml6ZWRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY2xvc2VNb2RhbExvZ0luKCk7XG5cbiAgfSk7XG5cblxuXG4gIC8v0L/RgNC40L3Rg9C00LjRgtC10LvRjNC90L4g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQuNGC0Ywg0YHRgtGA0LDQvdC40YbRg1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcblxuXG5cbiAgLy/RgdC+0YXRgNCw0L3QuNGC0Ywg0LIg0JHQlCDQtNCw0YLRh9C40Log0YPRgdC/0LXRiNC90L7QuSDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4INGO0LfQtdGA0LBcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJBdXRob3JpemVkJywgdHJ1ZSk7XG5cblxuXG4gIC8v0YHQsdGA0L7RgdC40YLRjCDQstGB0LUg0LfQvdCw0YfQtdC90LjRjyDQuNC90L/Rg9GC0L7QslxuICBhdXRob3JpemVkTG9naW5JbnAudmFsdWUgPSAnJztcbiAgYXV0aG9yaXplZExvZ2luSW5wLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIGF1dGhvcml6ZWRMb2dpbklucC52YWx1ZSA9ICcnO1xuICBhdXRob3JpemVkTG9naW5JbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbn0pO1xuXG5cblxuXG5cbi8v0L7RgtC80LXQvdC40YLRjCDQtNC10YTQvtC70YLQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1INC60L3QvtC/0LrQuCDQv9GA0Lgg0YHQsNCx0LzQuNGC0LVcbmF1dGhvcml6ZWRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG59KTtcbiJdfQ==
