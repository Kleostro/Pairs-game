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

  link.addEventListener('click', function(e) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnVyZ2VyLmpzIiwiY29tcG9uZW50cy9pbmRleC5qcyIsImNvbXBvbmVudHMvc3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XG5cbmlmKGJ1cmdlcikge1xuXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbmF2XCIpO1xuICBjb25zdCBtZW51TGlua3MgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19saXN0LWxpbmtcIik7XG5cbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJidXJnZXItLWFjdGl2ZVwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgfSk7XG5cbiAgbWVudUxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyLS1hY3RpdmVcIik7XG4gICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtLWFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbiIsIi8vINCf0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQuyDQv9C+INGP0LrQvtGA0Y/QvFxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiJykuZm9yRWFjaChsaW5rID0+IHtcblxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyaW5nKDEpO1xuXG4gICAgICBjb25zdCBzY3JvbGxUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmKTtcbiAgICAgIGNvbnN0IHRvcE9mZnNldCA9IDA7XG4gICAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSBzY3JvbGxUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb24gLSB0b3BPZmZzZXQ7XG5cbiAgICAgIHdpbmRvdy5zY3JvbGxCeSh7XG4gICAgICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICB9KTtcbn0pO1xuXG5cbi8vINCe0L/QuNGB0LDQvdC40LUgUFJcblxuY29uc29sZS5sb2coYFxuICAgIDEuIFRhc2s6IChodHRwczovL2dpdGh1Yi5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Rhc2tzL2Jsb2IvbWFzdGVyL3Rhc2tzL2xpYnJhcnkvbGlicmFyeS1wYXJ0MS5tZClcbiAgICBcXG5cbiAgICAyLiBEZXBsb3k6IChodHRwczovL3JvbGxpbmctc2NvcGVzLXNjaG9vbC5naXRodWIuaW8va2xlb3N0cm8tSlNGRVBSRVNDSE9PTDIwMjNRMi9saWJyYXJ5LylcbiAgICBcXG5cbiAgICAzLiBEb25lIDE5LjA3LjIwMjMgLyBkZWFkbGluZSAzMS4wNy4yMDIzXG4gICAgXFxuXG4gICAgNC4gU2NvcmU6IDEwMCAvIDEwMFxuYCk7XG5cbiIsImNvbnN0IHN3aXBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyJyk7XG5cbmlmKHN3aXBlcnMpIHtcbiAgbmV3IFN3aXBlciAoJy5hYm91dF9fc3dpcGVyJywge1xuXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiAzMDAwLFxuICAgIH0sXG5cbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMjUsXG5cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogJy5hYm91dF9fcGFnaW5hdGlvbicsXG4gICAgICB0eXBlOiAnYnVsbGV0cycsXG4gICAgICBidWxsZXRBY3RpdmVDbGFzczogJ2Fib3V0X19wYWdpbmF0aW9uLWJ1bGxldC0tYWN0aXZlJyxcbiAgICAgIGJ1bGxldENsYXNzOiBcdCdhYm91dF9fcGFnaW5hdGlvbi1idWxsZXQnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xufVxuIl19
