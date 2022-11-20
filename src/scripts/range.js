const rangeValue = document.getElementById("rangeValue");
const rangeInput = document.getElementById("rangeInput");
const rangeValueMin = document.querySelector(".range-value-item.min");
const rangeValueMax = document.querySelector(".range-value-item.max");
const submitRange = document.querySelector(".banner__form-btn");

rangeValueMin.textContent = rangeInput.getAttribute("min");
rangeValueMax.textContent = rangeInput.getAttribute("max");

rangeInput.addEventListener("input", (e) => {
  rangeValue.value = e.target.value + "€";
});

rangeValue.addEventListener("input", (e) => {
  rangeInput.value = parseInt(e.target.value);
});

submitRange.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href="form.html"
});
