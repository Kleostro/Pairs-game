"use strict";var e=document.querySelector(".burger");if(e){var t=document.querySelector(".header__nav"),l=t.querySelectorAll(".nav__list-link");e.addEventListener("click",(function(){e.classList.toggle("burger--active"),t.classList.toggle("nav--active")})),l.forEach((function(l){l.addEventListener("click",(function(){e.classList.toggle("burger--active"),t.classList.toggle("nav--active")}))}))}document.querySelectorAll('a[href^="#"').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("href").substring(1),l=document.getElementById(t).getBoundingClientRect().top-0;window.scrollBy({top:l,behavior:"smooth"})}))})),console.log("\n    1. Task: (https://github.com/rolling-scopes-school/tasks/blob/master/tasks/library/library-part1.md)\n    \n\n    2. Deploy: (https://rolling-scopes-school.github.io/kleostro-JSFEPRESCHOOL2023Q2/library/)\n    \n\n    3. Done 19.07.2023 / deadline 31.07.2023\n    \n\n    4. Score: 100 / 100\n"),document.querySelector(".swiper")&&new Swiper(".about__swiper",{autoplay:{delay:3e3},slidesPerView:3,slidesPerGroup:1,spaceBetween:25,pagination:{el:".about__pagination",type:"bullets",bulletActiveClass:"about__pagination-bullet--active",bulletClass:"about__pagination-bullet",clickable:!0}});