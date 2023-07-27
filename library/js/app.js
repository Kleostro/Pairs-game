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
  new Swiper ('.about__swiper', {

    autoplay: {
      delay: 3000,
    },

    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 25,

    pagination: {
      el: '.about__pagination',
      type: 'bullets',
      bulletActiveClass: 'about__pagination-bullet--active',
      bulletClass: 	'about__pagination-bullet',
      clickable: true,
    },
  });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnVyZ2VyLmpzIiwiY29tcG9uZW50cy9pbmRleC5qcyIsImNvbXBvbmVudHMvc3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcblxuaWYoYnVyZ2VyKSB7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19uYXZcIik7XG4gIGNvbnN0IG1lbnVMaW5rcyA9IG1lbnUucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX2xpc3QtbGlua1wiKTtcblxuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlci0tYWN0aXZlXCIpO1xuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi0tYWN0aXZlXCIpO1xuICB9KTtcblxuICBtZW51TGlua3MuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJidXJnZXItLWFjdGl2ZVwiKTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi0tYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuIiwiLy8g0J/Qu9Cw0LLQvdGL0Lkg0YHQutGA0L7Qu9C7INC/0L4g0Y/QutC+0YDRj9C8XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCInKS5mb3JFYWNoKGxpbmsgPT4ge1xuXG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHJpbmcoMSk7XG5cbiAgICBjb25zdCBzY3JvbGxUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmKTtcbiAgICBjb25zdCB0b3BPZmZzZXQgPSAwO1xuICAgIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IHNjcm9sbFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb24gLSB0b3BPZmZzZXQ7XG5cbiAgICB3aW5kb3cuc2Nyb2xsQnkoe1xuICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5cbi8vINCe0L/QuNGB0LDQvdC40LUgUFJcblxuY29uc29sZS5sb2coYFxuICAgIDEuIFRhc2s6IChodHRwczovL2dpdGh1Yi5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Rhc2tzL2Jsb2IvbWFzdGVyL3Rhc2tzL2xpYnJhcnkvbGlicmFyeS1wYXJ0MS5tZClcbiAgICBcXG5cbiAgICAyLiBEZXBsb3k6IChodHRwczovL3JvbGxpbmctc2NvcGVzLXNjaG9vbC5naXRodWIuaW8va2xlb3N0cm8tSlNGRVBSRVNDSE9PTDIwMjNRMi9saWJyYXJ5LylcbiAgICBcXG5cbiAgICAzLiBEb25lIDE5LjA3LjIwMjMgLyBkZWFkbGluZSAzMS4wNy4yMDIzXG4gICAgXFxuXG4gICAgNC4gU2NvcmU6IDEwMCAvIDEwMFxuYCk7XG5cbi8vINCh0LrRgNC40L/RgiDQtNC70Y8g0L/RgNC+0LLQtdGA0LrQuCDQutC+0LvQuNGH0LXRgdGC0LLQsCDRgtC10LPQvtCyXG5cbmNvbnNvbGUubG9nKGBcbiAgICDQndC10LHQvtC70YzRiNC+0Lkg0LHQvtC90YPRgSDQtNC70Y8g0YDQtdCy0YzRjtC10YDQvtCyIDopXG4gICAgXFxuXG4gICAg0KHQv9C40YHQvtC6INC40YHQv9C+0LvRjNC30YPQtdC80YvRhSDRgtC10LPQvtCyINCyINCy0LXRgNGB0YLQutC1OlxuYCk7XG5cbnNlbGVjdG9ycyA9IFsnaGVhZGVyJyxcbiAgJ21haW4nLFxuICAnZm9vdGVyJyxcbiAgJ3NlY3Rpb24nLFxuICAnbmF2JyxcbiAgJ3VsJyxcbiAgJ2xpJyxcbiAgJ2EnLFxuICAnYnV0dG9uJyxcbiAgJ2Zvcm0nLFxuICAnaW5wdXQnLFxuICAnbGFiZWwnLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAncCcsXG4gICdkaXYnLFxuICAnYXJ0aWNsZScsXG4gICdzcGFuJyxcbiAgJ2ltZycsXG4gICdzdmcnLFxuICAndGltZScsXG5dO1xuXG5sZXQgdG90YWwgPSAwO1xuc2VsZWN0b3JzLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG4gIGNvbnN0IGNvdW50ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkubGVuZ3RoO1xuICBjb25zb2xlLmxvZyhgJHtzZWxlY3Rvcn06ICAke2NvdW50fWApO1xuICBpZiAoY291bnQgPiAwKSB0b3RhbCsrO1xufSk7XG5jb25zb2xlLmxvZygnVG90YWwgdW5pcXVlOiAnLCB0b3RhbCk7XG4iLCJjb25zdCBzd2lwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcicpO1xuXG5pZihzd2lwZXJzKSB7XG4gIG5ldyBTd2lwZXIgKCcuYWJvdXRfX3N3aXBlcicsIHtcblxuICAgIGF1dG9wbGF5OiB7XG4gICAgICBkZWxheTogMzAwMCxcbiAgICB9LFxuXG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICBzcGFjZUJldHdlZW46IDI1LFxuXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuYWJvdXRfX3BhZ2luYXRpb24nLFxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgYnVsbGV0QWN0aXZlQ2xhc3M6ICdhYm91dF9fcGFnaW5hdGlvbi1idWxsZXQtLWFjdGl2ZScsXG4gICAgICBidWxsZXRDbGFzczogXHQnYWJvdXRfX3BhZ2luYXRpb24tYnVsbGV0JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxuICB9KTtcbn1cbiJdfQ==
