const formTabs = document.querySelectorAll(".tab");
const next = document.querySelector(".form__arrows-item.right");
const back = document.querySelector(".form__arrows-item.left");
const progressBarValue = document.getElementById("formProgressValue");

let startWidthProgressBar = 30;
let currentTab = 0;
let widthProgressBar = (90 - startWidthProgressBar) / (formTabs.length - 1);
let step = 90 / formTabs.length;

if (currentTab === 0) {
  back.style.display = "none";
  next.style.marginLeft = "auto";
} else {
  back.style.display = "flex";
  next.style.marginLeft = "0";
}

if (currentTab === 2) {
  next.style.display = "none";
  back.style.marginRight = "auto";
} else {
  next.style.display = "flex";
  back.style.marginLeft = "0";
}

const nextTab = () => {
  if (currentTab < formTabs.length - 1) {
    currentTab += 1;
    widthProgressBar += step;
    progressBarValue.style.width = `${widthProgressBar}%`;
    formTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    formTabs[currentTab].classList.add("active");
    if (currentTab === 0) {
      back.style.display = "none";
      next.style.marginLeft = "auto";
    } else {
      back.style.display = "flex";
      next.style.marginLeft = "0";
    }

    if (currentTab === 2) {
      next.style.display = "none";
      back.style.marginRight = "auto";
    } else {
      next.style.display = "flex";
      back.style.marginLeft = "0";
    }
  }
};

const backTab = () => {
  if (currentTab !== 0) {
    widthProgressBar -= step;
    progressBarValue.style.width = `${widthProgressBar}%`;
    formTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    currentTab -= 1;
    formTabs[currentTab].classList.add("active");

    if (currentTab === 0) {
      back.style.display = "none";
      next.style.marginLeft = "auto";
    } else {
      back.style.display = "flex";
      next.style.marginLeft = "0";
    }

    if (currentTab === 2) {
      next.style.display = "none";
      back.style.marginRight = "auto";
    } else {
      next.style.display = "flex";
      back.style.marginLeft = "0";
    }
  }
};

next.addEventListener("click", nextTab);
back.addEventListener("click", backTab);
