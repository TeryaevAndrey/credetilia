const rangeValue = document.getElementById("rangeValue");
const rangeInput = document.getElementById("rangeInput");
const rangeValueMin = document.querySelector(".range-value-item.min");
const rangeValueMax = document.querySelector(".range-value-item.max");
const submitRange = document.querySelector(".banner__form-btn");
const rangeMesesValue = document.getElementById("rangeMesesValue");
const rangeMesesInput = document.getElementById("rangeMesesInput");
const monthlyFee = document.getElementById("monthlyFee");
const totalDue = document.getElementById("totalDue");
const fastRangeValue = document.getElementById("fastRangeValue");
const fastRangeInput = document.getElementById("fastRangeInput");

const calcular = (duration, amount, tin, tae) => {
  var meses = duration;

  // var com_apertura=(fCom_apertura+fCom_estudio)/100;

  var cuotames =
    (amount * (tin / 100 / 12)) / (1 - Math.pow(1 + tin / 100 / 12, -meses));

  var fCuota_mes = cuotames;
  monthlyFee.textContent = "Cuota mensual: " + fCuota_mes.toFixed(2) + " €";

  var fImp_devol = cuotames * meses;
  totalDue.textContent = "Total adeudado: " + fImp_devol.toFixed(2) + " €";

  var fIntereses = cuotames * meses - amount;

  // var tae=(12*(Math.pow(1+(((fTinteres/100)+(2*com_apertura))/12),12)-1)+(meses-12)*(Math.pow(1+(fTinteres/100)/12,12)-1))/meses;
  var tae =
    (12 * (Math.pow(1 + tin / 100 / 12, 12) - 1) +
      (meses - 12) * (Math.pow(1 + tin / 100 / 12, 12) - 1)) /
    meses;
};

rangeValueMin.textContent = rangeInput.getAttribute("min");
rangeValueMax.textContent = rangeInput.getAttribute("max");

fastRangeInput.addEventListener("input", (e) => {
  fastRangeValue.value = parseInt(e.target.value);
});

fastRangeValue.addEventListener("input", (e) => {
  fastRangeInput.value = parseInt(e.target.value);
});

rangeInput.addEventListener("input", (e) => {
  rangeValue.value = e.target.value;
  calcular(rangeMesesInput.value, rangeInput.value, 9, 9);
});

rangeValue.addEventListener("input", (e) => {
  rangeInput.value = parseInt(e.target.value);
  calcular(rangeMesesInput.value, rangeInput.value, 9, 9);
});

rangeMesesInput.addEventListener("input", (e) => {
  rangeMesesValue.value = e.target.value;
  calcular(rangeMesesInput.value, rangeInput.value, 9, 9);
});

rangeMesesValue.addEventListener("input", (e) => {
  rangeMesesInput.value = parseInt(e.target.value);
  calcular(rangeMesesInput.value, rangeInput.value, 9, 9);
});

submitRange.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href = "form.html";
});
