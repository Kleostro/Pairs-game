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
