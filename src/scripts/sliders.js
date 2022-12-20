import Swiper, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".reviews .swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1.3,
  modules: [Pagination],
  spaceBetween: 15,

  breakpoints: {
    600: {
      slidesPerView: 2.3,
    },

    875: {
      slidesPerView: 3,
    },

    1150: {
      spaceBetween: 75,
      slidesPerView: 3,
    },
  },
});

const blogSwiper = new Swiper(".blog .swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1.2,
  modules: [Pagination],
  spaceBetween: 15,

  breakpoints: {
    600: {
      slidesPerView: 2.3,
    },

    875: {
      slidesPerView: 3,
    },

    1150: {
      spaceBetween: 75,
      slidesPerView: 3,
    },
  },
});
