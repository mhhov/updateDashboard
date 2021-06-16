window.addEventListener("DOMContentLoaded", function () {
  let hamburger = document.querySelector(".header__hamburger"),
    headerLinks = document.querySelector(".header__links");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("header__hamburger--active");
    headerLinks.classList.toggle("header__links--active");
  });
});
