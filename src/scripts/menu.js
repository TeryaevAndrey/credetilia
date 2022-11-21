const burger = document.querySelector(".burger");
const headerAuth = document.querySelector(".header__auth");
const headerLinks = document.querySelectorAll(".header__auth-link");

burger.addEventListener("click", () => {
  headerAuth.classList.toggle("active");
});

headerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerAuth.classList.remove("active");
  });
});
