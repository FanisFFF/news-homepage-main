const iconClose = document.querySelector(".icon-close");
const iconMenu = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");
const bg = document.querySelector(".background");
console.log(iconClose);
console.log(iconMenu);
iconClose.addEventListener("click", () => {
  nav.classList.toggle("active");
  bg.classList.toggle("background-active");
});
iconMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
  bg.classList.toggle("background-active");
});
