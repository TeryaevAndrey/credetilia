import Swiper, {Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const reviewsSlider = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  slidesPerView: 1.3,
  modules: [Pagination]
});
