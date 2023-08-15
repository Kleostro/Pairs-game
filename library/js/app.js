const accountBtn = document.querySelector('.account__btn');
const accountList = document.querySelector('.account__list');

if (accountBtn) {

  accountBtn.addEventListener('click', () => {
    accountList.classList.toggle('account__list--active');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.account__btn') && !e.target.classList.contains('account__list')) {

      accountList.classList.remove('account__list--active');

    };
  });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudEJ0bi5qcyIsImNvbXBvbmVudHMvYnVyZ2VyLmpzIiwiY29tcG9uZW50cy9pbmRleC5qcyIsImNvbXBvbmVudHMvc3dpcGVyLmpzIiwiY29tcG9uZW50cy90YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhY2NvdW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2J0bicpO1xuY29uc3QgYWNjb3VudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fbGlzdCcpO1xuXG5pZiAoYWNjb3VudEJ0bikge1xuXG4gIGFjY291bnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWNjb3VudExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWNjb3VudF9fbGlzdC0tYWN0aXZlJyk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy5hY2NvdW50X19idG4nKSAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvdW50X19saXN0JykpIHtcblxuICAgICAgYWNjb3VudExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3VudF9fbGlzdC0tYWN0aXZlJyk7XG5cbiAgICB9O1xuICB9KTtcbn07XG4iLCJjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcblxuaWYgKGJ1cmdlcikge1xuXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcbiAgY29uc3QgbWVudUxpbmtzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fbGlzdC1saW5rXCIpO1xuXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJidXJnZXItLWFjdGl2ZVwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJzdG9wLXNjcm9sbFwiKTtcblxuICB9KTtcblxuICAgIG1lbnVMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlci0tYWN0aXZlXCIpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3RvcC1zY3JvbGxcIik7XG5cbiAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJ1cmdlclwiKSAmJiAhZS50YXJnZXQuY2xvc2VzdChcIi5uYXZfX2xpc3RcIikpIHtcblxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJidXJnZXItLWFjdGl2ZVwiKTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi0tYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3RvcC1zY3JvbGxcIik7XG5cbiAgICB9O1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMjcpIHtcblxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJidXJnZXItLWFjdGl2ZVwiKTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi0tYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3RvcC1zY3JvbGxcIik7XG5cbiAgICB9O1xuICB9KTtcbn07XG5cbiIsIi8vINCf0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQuyDQv9C+INGP0LrQvtGA0Y/QvFxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiJykuZm9yRWFjaChsaW5rID0+IHtcblxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyaW5nKDEpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZik7XG4gICAgLy8gY29uc3QgdG9wT2Zmc2V0ID0gOTA7XG4gICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gc2Nyb2xsVGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICBjb25zdCBvZmZzZXRQb3NpdGlvbiA9IGVsZW1lbnRQb3NpdGlvbjtcblxuICAgIHdpbmRvdy5zY3JvbGxCeSh7XG4gICAgICB0b3A6IG9mZnNldFBvc2l0aW9uLFxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuLy8g0J7Qv9C40YHQsNC90LjQtSBQUlxuXG5jb25zb2xlLmxvZyhgXG4gICAgMS4gVGFzazogKGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsaW5nLXNjb3Blcy1zY2hvb2wvdGFza3MvYmxvYi9tYXN0ZXIvdGFza3MvbGlicmFyeS9saWJyYXJ5LXBhcnQxLm1kKVxuICAgIFxcblxuICAgIDIuIERlcGxveTogKGh0dHBzOi8vcm9sbGluZy1zY29wZXMtc2Nob29sLmdpdGh1Yi5pby9rbGVvc3Ryby1KU0ZFUFJFU0NIT09MMjAyM1EyL2xpYnJhcnkvKVxuICAgIFxcblxuICAgIDMuIERvbmUgMTkuMDcuMjAyMyAvIGRlYWRsaW5lIDMxLjA3LjIwMjNcbiAgICBcXG5cbiAgICA0LiBTY29yZTogMTAwIC8gMTAwXG5gKTtcblxuLy8g0KHQutGA0LjQv9GCINC00LvRjyDQv9GA0L7QstC10YDQutC4INC60L7Qu9C40YfQtdGB0YLQstCwINGC0LXQs9C+0LJcblxuY29uc29sZS5sb2coYFxuICAgINCd0LXQsdC+0LvRjNGI0L7QuSDQsdC+0L3Rg9GBINC00LvRjyDRgNC10LLRjNGO0LXRgNC+0LIgOilcbiAgICBcXG5cbiAgICDQodC/0LjRgdC+0Log0LjRgdC/0L7Qu9GM0LfRg9C10LzRi9GFINGC0LXQs9C+0LIg0LIg0LLQtdGA0YHRgtC60LU6XG5gKTtcblxuc2VsZWN0b3JzID0gWydoZWFkZXInLFxuICAnbWFpbicsXG4gICdmb290ZXInLFxuICAnc2VjdGlvbicsXG4gICduYXYnLFxuICAndWwnLFxuICAnbGknLFxuICAnYScsXG4gICdidXR0b24nLFxuICAnZm9ybScsXG4gICdpbnB1dCcsXG4gICdsYWJlbCcsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdwJyxcbiAgJ2RpdicsXG4gICdhcnRpY2xlJyxcbiAgJ3NwYW4nLFxuICAnaW1nJyxcbiAgJ3N2ZycsXG4gICd0aW1lJyxcbl07XG5cbmxldCB0b3RhbCA9IDA7XG5zZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgY29uc3QgY291bnQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5sZW5ndGg7XG4gIGNvbnNvbGUubG9nKGAke3NlbGVjdG9yfTogICR7Y291bnR9YCk7XG4gIGlmIChjb3VudCA+IDApIHRvdGFsKys7XG59KTtcbmNvbnNvbGUubG9nKCdUb3RhbCB1bmlxdWU6ICcsIHRvdGFsKTtcbiIsImNvbnN0IHN3aXBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyJyk7XG5cbmlmKHN3aXBlcnMpIHtcbiAgbmV3IFN3aXBlciAoJy5zd2lwZXInLCB7XG5cbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDMwMDAsXG4gICAgfSxcblxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAxOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICBzcGFjZUJldHdlZW46IDI1LFxuICAgICAgfSxcbiAgICAgIDc2OToge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNSxcbiAgICAgIH0sXG4gICAgICAxMjcwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICBzcGFjZUJldHdlZW46IDI1LFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0LWFib3V0JyxcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYtYWJvdXQnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG5cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogJy5hYm91dF9fcGFnaW5hdGlvbicsXG4gICAgICB0eXBlOiAnYnVsbGV0cycsXG4gICAgICBidWxsZXRBY3RpdmVDbGFzczogJ2Fib3V0X19wYWdpbmF0aW9uLWJ1bGxldC0tYWN0aXZlJyxcbiAgICAgIGJ1bGxldENsYXNzOiBcdCdhYm91dF9fcGFnaW5hdGlvbi1idWxsZXQnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xufVxuIiwiY29uc3QgZmF2b3JpdGVzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdm9yaXRlcycpXG5cbmlmKGZhdm9yaXRlc1RhYikge1xubGV0IHRhYnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmF2b3JpdGVzX19sYWJlbCcpO1xubGV0IHRhYkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmF2b3JpdGVzX19saXN0LWl0ZW0nKTtcblxudGFic0J0bi5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cbiAgICBjb25zdCBwYXRoID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGF0aDtcblxuICAgIHRhYnNCdG4uZm9yRWFjaChmdW5jdGlvbihidG4peyBidG4uY2xhc3NMaXN0LnJlbW92ZSgnZmF2b3JpdGVzX19sYWJlbC0tYWN0aXZlJyl9KTtcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGVzX19sYWJlbC0tYWN0aXZlJyk7XG5cbiAgICB0YWJJdGVtLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmF2b3JpdGVzX19saXN0LWl0ZW0tLWFjdGl2ZScpfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2Zhdm9yaXRlc19fbGlzdC1pdGVtLS1hY3RpdmUnKSk7XG4gIH0pXG59KVxufVxuIl19
