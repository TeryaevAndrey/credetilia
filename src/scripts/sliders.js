import Swiper, {Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  slidesPerView: 1.3,
  modules: [Pagination],
  spaceBetween: 15,

  breakpoints: {
    600: {
      slidesPerView: 2.3
    },

    875: {
      slidesPerView: 3,
      spacebetween: "1"
    }
  }
});