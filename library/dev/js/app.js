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


const contactMap = document.getElementById('map');

if(contactMap) {
  ymaps.ready(init);
  function init(){
      // Создание карты.
      const myMap = new ymaps.Map("map", {
          center: [55.76, 37.64],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 14,
          controls: []
      });
  }
}

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnVyZ2VyLmpzIiwiY29tcG9uZW50cy9tYXAuanMiLCJjb21wb25lbnRzL3N3aXBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xuXG5pZihidXJnZXIpIHtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX25hdlwiKTtcbiAgY29uc3QgbWVudUxpbmtzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fbGlzdC1saW5rXCIpO1xuXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyLS1hY3RpdmVcIik7XG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LS1hY3RpdmVcIik7XG4gIH0pO1xuXG4gIG1lbnVMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlci0tYWN0aXZlXCIpO1xuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LS1hY3RpdmVcIik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4iLCJjb25zdCBjb250YWN0TWFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpO1xuXG5pZihjb250YWN0TWFwKSB7XG4gIHltYXBzLnJlYWR5KGluaXQpO1xuICBmdW5jdGlvbiBpbml0KCl7XG4gICAgICAvLyDQodC+0LfQtNCw0L3QuNC1INC60LDRgNGC0YsuXG4gICAgICBjb25zdCBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xuICAgICAgICAgIGNlbnRlcjogWzU1Ljc2LCAzNy42NF0sXG4gICAgICAgICAgLy8g0KPRgNC+0LLQtdC90Ywg0LzQsNGB0YjRgtCw0LHQuNGA0L7QstCw0L3QuNGPLiDQlNC+0L/Rg9GB0YLQuNC80YvQtSDQt9C90LDRh9C10L3QuNGPOlxuICAgICAgICAgIC8vINC+0YIgMCAo0LLQtdGB0Ywg0LzQuNGAKSDQtNC+IDE5LlxuICAgICAgICAgIHpvb206IDE0LFxuICAgICAgICAgIGNvbnRyb2xzOiBbXVxuICAgICAgfSk7XG4gIH1cbn1cbiIsImNvbnN0IHN3aXBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyJyk7XG5cbmlmKHN3aXBlcnMpIHtcbiAgbmV3IFN3aXBlciAoJy5hYm91dF9fc3dpcGVyJywge1xuXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiAzMDAwLFxuICAgIH0sXG5cbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMjUsXG5cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogJy5hYm91dF9fcGFnaW5hdGlvbicsXG4gICAgICB0eXBlOiAnYnVsbGV0cycsXG4gICAgICBidWxsZXRBY3RpdmVDbGFzczogJ2Fib3V0X19wYWdpbmF0aW9uLWJ1bGxldC0tYWN0aXZlJyxcbiAgICAgIGJ1bGxldENsYXNzOiBcdCdhYm91dF9fcGFnaW5hdGlvbi1idWxsZXQnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xufVxuIl19
