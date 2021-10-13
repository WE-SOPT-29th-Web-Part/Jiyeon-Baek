'use strict';

const tagInput = document.querySelector(".tag-input");
let filterArr = [];

tagInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if (filterArr.includes(e.target.value) || !e.target.value) {
      e.target.value = "";
      return;
    }
    filterArr.push(e.target.value);
    addTag(e.target.value);
  }
});

const addTag = (text) => {
  const span = document.createElement("span");
  span.setAttribute("class", "tag-span");
  span.innerText = text;
  document.body.insertBefore(span, tagInput);
  tagInput.value = "";

  span.addEventListener("click", () => {
    filterArr.splice(filterArr.indexOf(text), 1);
    span.remove();
  });
};