'use strict';

const navPeriod = document.querySelector(".nav__period");
const navDropdown = document.querySelector(".nav__dropdown");
const navText = document.querySelector(".nav__text");

navPeriod.addEventListener("click", () => {
  if (navDropdown.style.visibility == "hidden") {
    navDropdown.style.visibility = "visible";
    return;
  }
  navDropdown.style.visibility = "hidden";
});

navDropdown.addEventListener("click", (e) => {
  navText.innerText = e.target.innerText;

  Array.from(navDropdown.children).forEach((element) =>
    element.classList.remove("active")
  );
  e.target.classList.add("active");
});