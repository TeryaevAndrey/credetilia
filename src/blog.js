import "./css/index.css";
import "./css/blog.css";
import "./scripts/menu";

const navbarItemTitle = document.querySelectorAll(".navbar__item-title");
const navbarItemList = document.querySelectorAll(".navbar__item-list");

navbarItemTitle.forEach((item) => {
  navbarItemList.forEach((list) => {
    item.addEventListener("click", () => {
      if (item.dataset.item === list.dataset.item) {
        list.classList.toggle("active");
      }
    });
  });
});
