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

if (modal) {
  const modalBtn = document.querySelector('.modal__btn');
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal__overlay');
  const modalContent = document.querySelector('.modal__content');

  function openModal() {
    modal.classList.add('modal--active');
    modalOverlay.classList.add('modal__overlay--active');
    modalContent.classList.add('modal__content--active');
    document.body.classList.add('stop-scroll');
  }

  function closeModal() {
    modal.classList.remove('modal--active');
    modalOverlay.classList.remove('modal__overlay--active');
    document.body.classList.remove('stop-scroll');
    modalContent.classList.remove('modal__content--active');
  }

  modalBtn.addEventListener('click', closeModal);

  // модалка для регистрации
  if(localStorage.getItem('userAuthorized') !== 'true') {
    const accountRegisterBtn = document.querySelector('.account__list-button-register');
    const CardRegisterBtn = document.querySelector('.card__right-btn-register');

    accountRegisterBtn.addEventListener('click', (e) => {
      openModal();
      e.stopPropagation();
      accountList.classList.remove('account__list--active');
    });

    CardRegisterBtn.addEventListener('click', (e) => {
      openModal();
      e.stopPropagation();
      accountList.classList.remove('account__list--active');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.modal__content')) {
        closeModal();
      };
    });
  }
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
}

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

  //юзер зарегистрирован И авторизован
    if(localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true') {
      let userNameInitial = localStorage.getItem('userName');
      let userSurNameInitial = localStorage.getItem('userSurName');
      let userInitials = `${userNameInitial[0].toUpperCase()}${userSurNameInitial[0].toUpperCase()}`;

      if(localStorage.getItem('userName')) {
        accountBtn.innerHTML = userInitials;
        accountBtn.setAttribute('title', `${localStorage.getItem('userName')} ${localStorage.getItem('userSurName')}`)
        accountBtn.classList.add('account__btn-after-register');

        accountList.innerHTML = `
        <strong class="account__list-text">${localStorage.getItem('cardNumber')}</strong>
        <li class="account__list-item"><button class="account__list-button account__list-button-my-profile btn-reset">My profile</button></li>
        <li class="account__list-item"><button class="account__list-button account__list-button-logout btn-reset">Log Out</button></li>
      `
      };
    };

//юзер зарегистрирован, НО не авторизован
    const logOutBtn = document.querySelector('.account__list-button-logout');

    if(logOutBtn) {
      logOutBtn.addEventListener('click', () => {
        localStorage.removeItem('userAuthorized');
        location.reload();
      });
    };

// валидация формы регистрации
const registerForm = document.getElementById('register-form');

const nameInp = document.querySelector('.register-modal__input-name');
const surNameInp = document.querySelector('.register-modal__input-surname');
const emailInp = document.querySelector('.register-modal__input-email');
const passwordInp = document.querySelector('.register-modal__input-password');

const nameError = document.querySelector('.error-text-name');
const surNameError = document.querySelector('.error-text-surname');
const emailError = document.querySelector('.error-text-email');
const passwordError = document.querySelector('.error-text-password');

const registerFormBtn = document.querySelector('.register-modal__btn');


registerFormBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  document.body.classList.add('stop-scroll');
  let nameValue = nameInp.value;
  let surNameValue = surNameInp.value;
  let emailValue = emailInp.value;
  let passwordValue = passwordInp.value;

  let result = false;

  nameError.textContent = '';
  if (nameValue === '') {
    nameInp.classList.add('error');
    nameError.textContent = 'Заполните поле';
    result = true;
  } else if (nameValue.length < 3) {
    nameInp.classList.add('error');
    nameError.textContent = 'Длина имени должна быть больше 3 символов';
    result = true;
  } else {
    localStorage.setItem('userName', nameValue);
    nameInp.classList.remove('error');
    nameInp.classList.add('complete');
  };



  surNameError.textContent = '';
  if (surNameValue === '') {
    surNameInp.classList.add('error');
    surNameError.textContent = 'Заполните поле';
    result = true;
  } else if (surNameValue.length < 3) {
    surNameInp.classList.add('error');
    surNameError.textContent = 'Длина фамилии должна быть больше 3 символов';
    result = true;
  } else {
    localStorage.setItem('userSurName', surNameValue);
    surNameInp.classList.remove('error');
    surNameInp.classList.add('complete');
  };



  emailError.textContent = '';
  if (emailValue === '') {
    emailInp.classList.add('error');
    emailError.textContent = 'Заполните поле';
    result = true;
  } else if (emailValue.length < 3) {
    emailInp.classList.add('error')
    emailError.textContent = 'Длина почты должна быть больше 3 символов';
    result = true;
  } else if (emailValue.includes('@') !== true) {
    emailInp.classList.add('error');
    emailError.textContent = 'В почте должен быть знак \'@\'';
    result = true;
  } else {
    localStorage.setItem('userEmail', emailValue);
    emailInp.classList.remove('error');
    emailInp.classList.add('complete');
  };



  passwordError.textContent = '';
  if (passwordValue === '') {
    passwordInp.classList.add('error');
    passwordError.textContent = 'Заполните поле';
    result = true;
  } else if (passwordValue.length < 8) {
    passwordInp.classList.add('error');
    passwordError.textContent = 'Длина пароля должна быть больше 8 символов';
    result = true;
  } else {
    localStorage.setItem('userPassword', passwordValue);
    passwordInp.classList.remove('error');
    passwordInp.classList.add('complete');
  };


  if (result === true) {
    return;
  };


  //после успешной регистрации

  //закрыть модалку регистрации
  closeModal();
  location.reload();
  //сброс всех полей ввода
  nameInp.value = '';
  nameInp.classList.remove('complete');
  surNameInp.value = '';
  surNameInp.classList.remove('complete');
  emailInp.value = '';
  emailInp.classList.remove('complete');
  passwordInp.value = '';
  passwordInp.classList.remove('complete');

  //сгенерировать случайное девятизначное число
  let randomNumber = Math.floor(Math.random() * 900000000) + 100000000;

  //сконвертировать число в 16-ричную систему
  let hexNumber = randomNumber.toString(16).toUpperCase();

  //добавить ведущие нули, если необходимо
  while (hexNumber.length < 9) {
    hexNumber = "0" + hexNumber;
  };

  localStorage.setItem('cardNumber', hexNumber);

  //юзер успешно зарегистрирован И авторизован
  localStorage.setItem('userRegistered', true);
  localStorage.setItem('userAuthorized', true);
});



registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudEJ0bi5qcyIsImNvbXBvbmVudHMvYnVyZ2VyLmpzIiwiY29tcG9uZW50cy9pbmRleC5qcyIsImNvbXBvbmVudHMvbW9kYWwuanMiLCJjb21wb25lbnRzL3N3aXBlci5qcyIsImNvbXBvbmVudHMvdGFicy5qcyIsImNvbXBvbmVudHMvdXNlckFmdGVyUmVnaXN0ZXIuanMiLCJjb21wb25lbnRzL3ZhbGlkYXRpb25Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhY2NvdW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2J0bicpO1xuY29uc3QgYWNjb3VudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fbGlzdCcpO1xuXG5pZiAoYWNjb3VudEJ0bikge1xuXG4gIGFjY291bnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWNjb3VudF9fbGlzdCcpICYmICFlLnRhcmdldC5jbG9zZXN0KCcuYWNjb3VudF9fbGlzdCcpICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY291bnRfX2J0bicpKSB7XG5cbiAgICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICAgIH07XG4gIH0pO1xufTtcblxuXG5cbmlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyUmVnaXN0ZXJlZCcpICE9PSAndHJ1ZScgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJBdXRob3JpemVkJykgIT09ICd0cnVlJyB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclJlZ2lzdGVyZWQnKSA9PT0gJ3RydWUnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyQXV0aG9yaXplZCcpICE9PSAndHJ1ZScpIHtcblxuICBhY2NvdW50QnRuLmlubmVySFRNTCA9IGBcbiAgPHN2Zz5cbiAgICA8dXNlIHhsaW5rOmhyZWY9XCJpbWcvc3ByaXRlLnN2ZyNhY2NvdW50XCI+PC91c2U+XG4gIDwvc3ZnPlxuICBgXG4gIGFjY291bnRMaXN0LmlubmVySFRNTCA9IGBcbiAgICA8c3Ryb25nIGNsYXNzPVwiYWNjb3VudF9fbGlzdC10ZXh0XCI+UHJvZmlsZTwvc3Ryb25nPlxuICAgIDxsaSBjbGFzcz1cImFjY291bnRfX2xpc3QtaXRlbVwiPjxidXR0b24gY2xhc3M9XCJhY2NvdW50X19saXN0LWJ1dHRvbiBhY2NvdW50X19saXN0LWJ1dHRvbi1sb2dpbiBidG4tcmVzZXRcIj5Mb2cgSW48L2J1dHRvbj48L2xpPlxuICAgIDxsaSBjbGFzcz1cImFjY291bnRfX2xpc3QtaXRlbVwiPjxidXR0b24gY2xhc3M9XCJhY2NvdW50X19saXN0LWJ1dHRvbiBhY2NvdW50X19saXN0LWJ1dHRvbi1yZWdpc3RlciBidG4tcmVzZXRcIj5SZWdpc3RlcjwvYnV0dG9uPjwvbGk+XG4gIGBcbn07XG4iLCJjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcblxuaWYgKGJ1cmdlcikge1xuXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcbiAgY29uc3QgbWVudUxpbmtzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fbGlzdC1saW5rXCIpO1xuXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJidXJnZXItLWFjdGl2ZVwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJzdG9wLXNjcm9sbFwiKTtcblxuICB9KTtcblxuICAgIG1lbnVMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlci0tYWN0aXZlXCIpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3RvcC1zY3JvbGxcIik7XG5cbiAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJ1cmdlclwiKSAmJiAhZS50YXJnZXQuY2xvc2VzdChcIi5uYXZfX2xpc3RcIikpIHtcblxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJidXJnZXItLWFjdGl2ZVwiKTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi0tYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3RvcC1zY3JvbGxcIik7XG5cbiAgICB9O1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMjcpIHtcblxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJidXJnZXItLWFjdGl2ZVwiKTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi0tYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3RvcC1zY3JvbGxcIik7XG5cbiAgICB9O1xuICB9KTtcbn07XG5cbiIsIi8vINCf0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQuyDQv9C+INGP0LrQvtGA0Y/QvFxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiJykuZm9yRWFjaChsaW5rID0+IHtcblxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyaW5nKDEpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZik7XG4gICAgLy8gY29uc3QgdG9wT2Zmc2V0ID0gOTA7XG4gICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gc2Nyb2xsVGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICBjb25zdCBvZmZzZXRQb3NpdGlvbiA9IGVsZW1lbnRQb3NpdGlvbjtcblxuICAgIHdpbmRvdy5zY3JvbGxCeSh7XG4gICAgICB0b3A6IG9mZnNldFBvc2l0aW9uLFxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuLy8g0J7Qv9C40YHQsNC90LjQtSBQUlxuXG5jb25zb2xlLmxvZyhgXG4gICAgMS4gVGFzazogKGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsaW5nLXNjb3Blcy1zY2hvb2wvdGFza3MvYmxvYi9tYXN0ZXIvdGFza3MvbGlicmFyeS9saWJyYXJ5LXBhcnQxLm1kKVxuICAgIFxcblxuICAgIDIuIERlcGxveTogKGh0dHBzOi8vcm9sbGluZy1zY29wZXMtc2Nob29sLmdpdGh1Yi5pby9rbGVvc3Ryby1KU0ZFUFJFU0NIT09MMjAyM1EyL2xpYnJhcnkvKVxuICAgIFxcblxuICAgIDMuIERvbmUgMTkuMDcuMjAyMyAvIGRlYWRsaW5lIDMxLjA3LjIwMjNcbiAgICBcXG5cbiAgICA0LiBTY29yZTogMTAwIC8gMTAwXG5gKTtcblxuLy8g0KHQutGA0LjQv9GCINC00LvRjyDQv9GA0L7QstC10YDQutC4INC60L7Qu9C40YfQtdGB0YLQstCwINGC0LXQs9C+0LJcblxuY29uc29sZS5sb2coYFxuICAgINCd0LXQsdC+0LvRjNGI0L7QuSDQsdC+0L3Rg9GBINC00LvRjyDRgNC10LLRjNGO0LXRgNC+0LIgOilcbiAgICBcXG5cbiAgICDQodC/0LjRgdC+0Log0LjRgdC/0L7Qu9GM0LfRg9C10LzRi9GFINGC0LXQs9C+0LIg0LIg0LLQtdGA0YHRgtC60LU6XG5gKTtcblxuc2VsZWN0b3JzID0gWydoZWFkZXInLFxuICAnbWFpbicsXG4gICdmb290ZXInLFxuICAnc2VjdGlvbicsXG4gICduYXYnLFxuICAndWwnLFxuICAnbGknLFxuICAnYScsXG4gICdidXR0b24nLFxuICAnZm9ybScsXG4gICdpbnB1dCcsXG4gICdsYWJlbCcsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdwJyxcbiAgJ2RpdicsXG4gICdhcnRpY2xlJyxcbiAgJ3NwYW4nLFxuICAnaW1nJyxcbiAgJ3N2ZycsXG4gICd0aW1lJyxcbl07XG5cbmxldCB0b3RhbCA9IDA7XG5zZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgY29uc3QgY291bnQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5sZW5ndGg7XG4gIGNvbnNvbGUubG9nKGAke3NlbGVjdG9yfTogICR7Y291bnR9YCk7XG4gIGlmIChjb3VudCA+IDApIHRvdGFsKys7XG59KTtcbmNvbnNvbGUubG9nKCdUb3RhbCB1bmlxdWU6ICcsIHRvdGFsKTtcbiIsImNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbmlmIChtb2RhbCkge1xuICBjb25zdCBtb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYnRuJyk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fb3ZlcmxheScpO1xuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRlbnQnKTtcblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtLWFjdGl2ZScpO1xuICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fb3ZlcmxheS0tYWN0aXZlJyk7XG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsX19jb250ZW50LS1hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3N0b3Atc2Nyb2xsJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKTtcbiAgICBtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX292ZXJsYXktLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX2NvbnRlbnQtLWFjdGl2ZScpO1xuICB9XG5cbiAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcblxuICAvLyDQvNC+0LTQsNC70LrQsCDQtNC70Y8g0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckF1dGhvcml6ZWQnKSAhPT0gJ3RydWUnKSB7XG4gICAgY29uc3QgYWNjb3VudFJlZ2lzdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2xpc3QtYnV0dG9uLXJlZ2lzdGVyJyk7XG4gICAgY29uc3QgQ2FyZFJlZ2lzdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX3JpZ2h0LWJ0bi1yZWdpc3RlcicpO1xuXG4gICAgYWNjb3VudFJlZ2lzdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIG9wZW5Nb2RhbCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgQ2FyZFJlZ2lzdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIG9wZW5Nb2RhbCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGFjY291bnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY291bnRfX2xpc3QtLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcubW9kYWxfX2NvbnRlbnQnKSkge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59O1xuIiwiY29uc3Qgc3dpcGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXInKTtcblxuaWYoc3dpcGVycykge1xuICBuZXcgU3dpcGVyICgnLnN3aXBlcicsIHtcblxuICAgIGF1dG9wbGF5OiB7XG4gICAgICBkZWxheTogMzAwMCxcbiAgICB9LFxuXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDE6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjUsXG4gICAgICB9LFxuICAgICAgNzY5OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICBzcGFjZUJldHdlZW46IDI1LFxuICAgICAgfSxcbiAgICAgIDEyNzA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjUsXG4gICAgICB9XG4gICAgfSxcblxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQtYWJvdXQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldi1hYm91dCcsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcblxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiAnLmFib3V0X19wYWdpbmF0aW9uJyxcbiAgICAgIHR5cGU6ICdidWxsZXRzJyxcbiAgICAgIGJ1bGxldEFjdGl2ZUNsYXNzOiAnYWJvdXRfX3BhZ2luYXRpb24tYnVsbGV0LS1hY3RpdmUnLFxuICAgICAgYnVsbGV0Q2xhc3M6IFx0J2Fib3V0X19wYWdpbmF0aW9uLWJ1bGxldCcsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbiAgfSk7XG59XG4iLCJjb25zdCBmYXZvcml0ZXNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzJylcblxuaWYoZmF2b3JpdGVzVGFiKSB7XG5sZXQgdGFic0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZXNfX2xhYmVsJyk7XG5sZXQgdGFiSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZXNfX2xpc3QtaXRlbScpO1xuXG50YWJzQnRuLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcblxuICAgIGNvbnN0IHBhdGggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wYXRoO1xuXG4gICAgdGFic0J0bi5mb3JFYWNoKGZ1bmN0aW9uKGJ0bil7IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmYXZvcml0ZXNfX2xhYmVsLS1hY3RpdmUnKX0pO1xuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZXNfX2xhYmVsLS1hY3RpdmUnKTtcblxuICAgIHRhYkl0ZW0uZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXsgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmYXZvcml0ZXNfX2xpc3QtaXRlbS0tYWN0aXZlJyl9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZmF2b3JpdGVzX19saXN0LWl0ZW0tLWFjdGl2ZScpKTtcbiAgfSlcbn0pXG59XG4iLCIgIC8v0Y7Qt9C10YAg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9INCYINCw0LLRgtC+0YDQuNC30L7QstCw0L1cbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclJlZ2lzdGVyZWQnKSA9PT0gJ3RydWUnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyQXV0aG9yaXplZCcpID09PSAndHJ1ZScpIHtcbiAgICAgIGxldCB1c2VyTmFtZUluaXRpYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKTtcbiAgICAgIGxldCB1c2VyU3VyTmFtZUluaXRpYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclN1ck5hbWUnKTtcbiAgICAgIGxldCB1c2VySW5pdGlhbHMgPSBgJHt1c2VyTmFtZUluaXRpYWxbMF0udG9VcHBlckNhc2UoKX0ke3VzZXJTdXJOYW1lSW5pdGlhbFswXS50b1VwcGVyQ2FzZSgpfWA7XG5cbiAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyTmFtZScpKSB7XG4gICAgICAgIGFjY291bnRCdG4uaW5uZXJIVE1MID0gdXNlckluaXRpYWxzO1xuICAgICAgICBhY2NvdW50QnRuLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKX0gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclN1ck5hbWUnKX1gKVxuICAgICAgICBhY2NvdW50QnRuLmNsYXNzTGlzdC5hZGQoJ2FjY291bnRfX2J0bi1hZnRlci1yZWdpc3RlcicpO1xuXG4gICAgICAgIGFjY291bnRMaXN0LmlubmVySFRNTCA9IGBcbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cImFjY291bnRfX2xpc3QtdGV4dFwiPiR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmROdW1iZXInKX08L3N0cm9uZz5cbiAgICAgICAgPGxpIGNsYXNzPVwiYWNjb3VudF9fbGlzdC1pdGVtXCI+PGJ1dHRvbiBjbGFzcz1cImFjY291bnRfX2xpc3QtYnV0dG9uIGFjY291bnRfX2xpc3QtYnV0dG9uLW15LXByb2ZpbGUgYnRuLXJlc2V0XCI+TXkgcHJvZmlsZTwvYnV0dG9uPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImFjY291bnRfX2xpc3QtaXRlbVwiPjxidXR0b24gY2xhc3M9XCJhY2NvdW50X19saXN0LWJ1dHRvbiBhY2NvdW50X19saXN0LWJ1dHRvbi1sb2dvdXQgYnRuLXJlc2V0XCI+TG9nIE91dDwvYnV0dG9uPjwvbGk+XG4gICAgICBgXG4gICAgICB9O1xuICAgIH07XG5cbi8v0Y7Qt9C10YAg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9LCDQndCeINC90LUg0LDQstGC0L7RgNC40LfQvtCy0LDQvVxuICAgIGNvbnN0IGxvZ091dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19saXN0LWJ1dHRvbi1sb2dvdXQnKTtcblxuICAgIGlmKGxvZ091dEJ0bikge1xuICAgICAgbG9nT3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlckF1dGhvcml6ZWQnKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9KTtcbiAgICB9O1xuIiwiLy8g0LLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC80Ysg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuY29uc3QgcmVnaXN0ZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWZvcm0nKTtcblxuY29uc3QgbmFtZUlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9faW5wdXQtbmFtZScpO1xuY29uc3Qgc3VyTmFtZUlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9faW5wdXQtc3VybmFtZScpO1xuY29uc3QgZW1haWxJbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXItbW9kYWxfX2lucHV0LWVtYWlsJyk7XG5jb25zdCBwYXNzd29yZElucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1tb2RhbF9faW5wdXQtcGFzc3dvcmQnKTtcblxuY29uc3QgbmFtZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLXRleHQtbmFtZScpO1xuY29uc3Qgc3VyTmFtZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLXRleHQtc3VybmFtZScpO1xuY29uc3QgZW1haWxFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci10ZXh0LWVtYWlsJyk7XG5jb25zdCBwYXNzd29yZEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLXRleHQtcGFzc3dvcmQnKTtcblxuY29uc3QgcmVnaXN0ZXJGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLW1vZGFsX19idG4nKTtcblxuXG5yZWdpc3RlckZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3N0b3Atc2Nyb2xsJyk7XG4gIGxldCBuYW1lVmFsdWUgPSBuYW1lSW5wLnZhbHVlO1xuICBsZXQgc3VyTmFtZVZhbHVlID0gc3VyTmFtZUlucC52YWx1ZTtcbiAgbGV0IGVtYWlsVmFsdWUgPSBlbWFpbElucC52YWx1ZTtcbiAgbGV0IHBhc3N3b3JkVmFsdWUgPSBwYXNzd29yZElucC52YWx1ZTtcblxuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgbmFtZUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gIGlmIChuYW1lVmFsdWUgPT09ICcnKSB7XG4gICAgbmFtZUlucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIG5hbWVFcnJvci50ZXh0Q29udGVudCA9ICfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUnO1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH0gZWxzZSBpZiAobmFtZVZhbHVlLmxlbmd0aCA8IDMpIHtcbiAgICBuYW1lSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgbmFtZUVycm9yLnRleHRDb250ZW50ID0gJ9CU0LvQuNC90LAg0LjQvNC10L3QuCDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0LHQvtC70YzRiNC1IDMg0YHQuNC80LLQvtC70L7Qsic7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlck5hbWUnLCBuYW1lVmFsdWUpO1xuICAgIG5hbWVJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICBuYW1lSW5wLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gIH07XG5cblxuXG4gIHN1ck5hbWVFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAoc3VyTmFtZVZhbHVlID09PSAnJykge1xuICAgIHN1ck5hbWVJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBzdXJOYW1lRXJyb3IudGV4dENvbnRlbnQgPSAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1JztcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHN1ck5hbWVWYWx1ZS5sZW5ndGggPCAzKSB7XG4gICAgc3VyTmFtZUlucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIHN1ck5hbWVFcnJvci50ZXh0Q29udGVudCA9ICfQlNC70LjQvdCwINGE0LDQvNC40LvQuNC4INC00L7Qu9C20L3QsCDQsdGL0YLRjCDQsdC+0LvRjNGI0LUgMyDRgdC40LzQstC+0LvQvtCyJztcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyU3VyTmFtZScsIHN1ck5hbWVWYWx1ZSk7XG4gICAgc3VyTmFtZUlucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIHN1ck5hbWVJbnAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcbiAgfTtcblxuXG5cbiAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAoZW1haWxWYWx1ZSA9PT0gJycpIHtcbiAgICBlbWFpbElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1JztcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGVtYWlsVmFsdWUubGVuZ3RoIDwgMykge1xuICAgIGVtYWlsSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJ9CU0LvQuNC90LAg0L/QvtGH0YLRiyDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0LHQvtC70YzRiNC1IDMg0YHQuNC80LLQvtC70L7Qsic7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChlbWFpbFZhbHVlLmluY2x1ZGVzKCdAJykgIT09IHRydWUpIHtcbiAgICBlbWFpbElucC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAn0JIg0L/QvtGH0YLQtSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LfQvdCw0LogXFwnQFxcJyc7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckVtYWlsJywgZW1haWxWYWx1ZSk7XG4gICAgZW1haWxJbnAuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICBlbWFpbElucC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuICB9O1xuXG5cblxuICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gIGlmIChwYXNzd29yZFZhbHVlID09PSAnJykge1xuICAgIHBhc3N3b3JkSW5wLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUnO1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH0gZWxzZSBpZiAocGFzc3dvcmRWYWx1ZS5sZW5ndGggPCA4KSB7XG4gICAgcGFzc3dvcmRJbnAuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ9CU0LvQuNC90LAg0L/QsNGA0L7Qu9GPINC00L7Qu9C20L3QsCDQsdGL0YLRjCDQsdC+0LvRjNGI0LUgOCDRgdC40LzQstC+0LvQvtCyJztcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyUGFzc3dvcmQnLCBwYXNzd29yZFZhbHVlKTtcbiAgICBwYXNzd29yZElucC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIHBhc3N3b3JkSW5wLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gIH07XG5cblxuICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgcmV0dXJuO1xuICB9O1xuXG5cbiAgLy/Qv9C+0YHQu9C1INGD0YHQv9C10YjQvdC+0Lkg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuXG4gIC8v0LfQsNC60YDRi9GC0Ywg0LzQvtC00LDQu9C60YMg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBjbG9zZU1vZGFsKCk7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAvL9GB0LHRgNC+0YEg0LLRgdC10YUg0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gIG5hbWVJbnAudmFsdWUgPSAnJztcbiAgbmFtZUlucC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICBzdXJOYW1lSW5wLnZhbHVlID0gJyc7XG4gIHN1ck5hbWVJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgZW1haWxJbnAudmFsdWUgPSAnJztcbiAgZW1haWxJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgcGFzc3dvcmRJbnAudmFsdWUgPSAnJztcbiAgcGFzc3dvcmRJbnAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcblxuICAvL9GB0LPQtdC90LXRgNC40YDQvtCy0LDRgtGMINGB0LvRg9GH0LDQudC90L7QtSDQtNC10LLRj9GC0LjQt9C90LDRh9C90L7QtSDRh9C40YHQu9C+XG4gIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAwMDAwMDApICsgMTAwMDAwMDAwO1xuXG4gIC8v0YHQutC+0L3QstC10YDRgtC40YDQvtCy0LDRgtGMINGH0LjRgdC70L4g0LIgMTYt0YDQuNGH0L3Rg9GOINGB0LjRgdGC0LXQvNGDXG4gIGxldCBoZXhOdW1iZXIgPSByYW5kb21OdW1iZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cbiAgLy/QtNC+0LHQsNCy0LjRgtGMINCy0LXQtNGD0YnQuNC1INC90YPQu9C4LCDQtdGB0LvQuCDQvdC10L7QsdGF0L7QtNC40LzQvlxuICB3aGlsZSAoaGV4TnVtYmVyLmxlbmd0aCA8IDkpIHtcbiAgICBoZXhOdW1iZXIgPSBcIjBcIiArIGhleE51bWJlcjtcbiAgfTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FyZE51bWJlcicsIGhleE51bWJlcik7XG5cbiAgLy/RjtC30LXRgCDRg9GB0L/QtdGI0L3QviDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L0g0Jgg0LDQstGC0L7RgNC40LfQvtCy0LDQvVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclJlZ2lzdGVyZWQnLCB0cnVlKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJBdXRob3JpemVkJywgdHJ1ZSk7XG59KTtcblxuXG5cbnJlZ2lzdGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcbiJdfQ==
