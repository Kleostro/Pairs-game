const burger = document.querySelector(".burger");

if(burger) {

  const menu = document.querySelector(".header__nav");
  const menuLinks = menu.querySelectorAll(".nav__list-link");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("nav--active");
  });

  menuLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      burger.classList.toggle("burger--active");
      menu.classList.toggle("nav--active");
    });
  });
}


// Плавный скролл по якорям

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);
    const topOffset = 0;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

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

    // autoplay: {
    //   delay: 3000,
    // },ƒ

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

    pagination: {
      el: '.about__pagination',
      type: 'bullets',
      bulletActiveClass: 'about__pagination-bullet--active',
      bulletClass: 	'about__pagination-bullet',
      clickable: true,
    },
  });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnVyZ2VyLmpzIiwiY29tcG9uZW50cy9pbmRleC5qcyIsImNvbXBvbmVudHMvc3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XG5cbmlmKGJ1cmdlcikge1xuXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbmF2XCIpO1xuICBjb25zdCBtZW51TGlua3MgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19saXN0LWxpbmtcIik7XG5cbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJidXJnZXItLWFjdGl2ZVwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgfSk7XG5cbiAgbWVudUxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyLS1hY3RpdmVcIik7XG4gICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbiIsIi8vINCf0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQuyDQv9C+INGP0LrQvtGA0Y/QvFxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiJykuZm9yRWFjaChsaW5rID0+IHtcblxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyaW5nKDEpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZik7XG4gICAgY29uc3QgdG9wT2Zmc2V0ID0gMDtcbiAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSBzY3JvbGxUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnN0IG9mZnNldFBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uIC0gdG9wT2Zmc2V0O1xuXG4gICAgd2luZG93LnNjcm9sbEJ5KHtcbiAgICAgIHRvcDogb2Zmc2V0UG9zaXRpb24sXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG4vLyDQntC/0LjRgdCw0L3QuNC1IFBSXG5cbmNvbnNvbGUubG9nKGBcbiAgICAxLiBUYXNrOiAoaHR0cHM6Ly9naXRodWIuY29tL3JvbGxpbmctc2NvcGVzLXNjaG9vbC90YXNrcy9ibG9iL21hc3Rlci90YXNrcy9saWJyYXJ5L2xpYnJhcnktcGFydDEubWQpXG4gICAgXFxuXG4gICAgMi4gRGVwbG95OiAoaHR0cHM6Ly9yb2xsaW5nLXNjb3Blcy1zY2hvb2wuZ2l0aHViLmlvL2tsZW9zdHJvLUpTRkVQUkVTQ0hPT0wyMDIzUTIvbGlicmFyeS8pXG4gICAgXFxuXG4gICAgMy4gRG9uZSAxOS4wNy4yMDIzIC8gZGVhZGxpbmUgMzEuMDcuMjAyM1xuICAgIFxcblxuICAgIDQuIFNjb3JlOiAxMDAgLyAxMDBcbmApO1xuXG4vLyDQodC60YDQuNC/0YIg0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0LrQvtC70LjRh9C10YHRgtCy0LAg0YLQtdCz0L7QslxuXG5jb25zb2xlLmxvZyhgXG4gICAg0J3QtdCx0L7Qu9GM0YjQvtC5INCx0L7QvdGD0YEg0LTQu9GPINGA0LXQstGM0Y7QtdGA0L7QsiA6KVxuICAgIFxcblxuICAgINCh0L/QuNGB0L7QuiDQuNGB0L/QvtC70YzQt9GD0LXQvNGL0YUg0YLQtdCz0L7QsiDQsiDQstC10YDRgdGC0LrQtTpcbmApO1xuXG5zZWxlY3RvcnMgPSBbJ2hlYWRlcicsXG4gICdtYWluJyxcbiAgJ2Zvb3RlcicsXG4gICdzZWN0aW9uJyxcbiAgJ25hdicsXG4gICd1bCcsXG4gICdsaScsXG4gICdhJyxcbiAgJ2J1dHRvbicsXG4gICdmb3JtJyxcbiAgJ2lucHV0JyxcbiAgJ2xhYmVsJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ3AnLFxuICAnZGl2JyxcbiAgJ2FydGljbGUnLFxuICAnc3BhbicsXG4gICdpbWcnLFxuICAnc3ZnJyxcbiAgJ3RpbWUnLFxuXTtcblxubGV0IHRvdGFsID0gMDtcbnNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICBjb25zdCBjb3VudCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmxlbmd0aDtcbiAgY29uc29sZS5sb2coYCR7c2VsZWN0b3J9OiAgJHtjb3VudH1gKTtcbiAgaWYgKGNvdW50ID4gMCkgdG90YWwrKztcbn0pO1xuY29uc29sZS5sb2coJ1RvdGFsIHVuaXF1ZTogJywgdG90YWwpO1xuIiwiY29uc3Qgc3dpcGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXInKTtcblxuaWYoc3dpcGVycykge1xuICBuZXcgU3dpcGVyICgnLnN3aXBlcicsIHtcblxuICAgIC8vIGF1dG9wbGF5OiB7XG4gICAgLy8gICBkZWxheTogMzAwMCxcbiAgICAvLyB9LMaSXG5cbiAgICBicmVha3BvaW50czoge1xuICAgICAgMToge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNSxcbiAgICAgIH0sXG4gICAgICA3Njk6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjUsXG4gICAgICB9LFxuICAgICAgMTI3MDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNSxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuYWJvdXRfX3BhZ2luYXRpb24nLFxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgYnVsbGV0QWN0aXZlQ2xhc3M6ICdhYm91dF9fcGFnaW5hdGlvbi1idWxsZXQtLWFjdGl2ZScsXG4gICAgICBidWxsZXRDbGFzczogXHQnYWJvdXRfX3BhZ2luYXRpb24tYnVsbGV0JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn1cbiJdfQ==
