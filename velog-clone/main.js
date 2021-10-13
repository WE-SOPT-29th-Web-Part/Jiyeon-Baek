'use strict';

const navPeriod = document.querySelector(".nav__period");
const navDropdown = document.querySelector(".nav__dropdown");
const navText = document.querySelector(".nav__text");
const items = document.querySelectorAll(".item");
const body = document.querySelector("body");
const modalBackground = document.querySelector(".modal__background");
const modalWrapper = document.querySelector(".modal__wrapper");
const modalContent = document.querySelector(".modal__content");
const closeBtn = document.querySelector(".modal__close");

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

items.forEach(item => {
  item.addEventListener("click", () => {
    body.style.overflow = "hidden";
    modalBackground.classList.add("show");
    modalWrapper.classList.add("show");

    const clone = item.cloneNode(true);
    modalContent.appendChild(clone);

    closeBtn.addEventListener("click", () => {
      body.style.overflow = "scroll";
      modalBackground.classList.remove("show");
      modalWrapper.classList.remove("show");
      clone.remove();
    });
  });
});
