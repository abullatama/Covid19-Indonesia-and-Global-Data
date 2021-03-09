const toggle = document.querySelector(".header__btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const horizontalMenu = document.querySelector(".horizontal-menu");
const overflow = document.querySelector(".overflow");

toggle.addEventListener("click", function () {
  header.classList.add("open");
  body.classList.add("active");
  horizontalMenu.classList.remove("pop-out");
  horizontalMenu.classList.add("pop-in");
});

overflow.addEventListener("click", function () {
  header.classList.remove("open");
  body.classList.remove("active");
  horizontalMenu.classList.remove("pop-in");
  horizontalMenu.classList.add("pop-out");
});
