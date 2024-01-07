const menuBtn = document.querySelector("#menu-icon-btn");
const menuClose = document.querySelector(".menu-close");
const menuLinks = document.querySelector(".menu-links");

menuBtn.addEventListener("click", () => {
  menuLinks.style.right = "0";
});
menuClose.addEventListener("click", () => {
  menuLinks.style.right = "-450px";
});
