import "./css/index.css";
import "./scripts/menu";

const accountRange = document.querySelector(".account__range");
const points = document.querySelectorAll(".account__range-point");
const value = document.querySelector(".account__range-value");

value.textContent = accountRange.value + "€";

accountRange.addEventListener("input", (e) => {
  value.textContent = e.target.value + "€";
});

points.forEach((point) => {
  point.addEventListener("click", (e) => {
    accountRange.value = e.target.dataset.value;
    value.textContent = e.target.dataset.value + "€";
  });
});
