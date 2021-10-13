'use strict';

const tagInput = document.querySelector(".tag-input");

tagInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTag(tagInput.value);
  }
});

const addTag = (text) => {
  if (!text) return;

  const span = document.createElement("span");
  span.setAttribute("class", "tag-span");
  span.innerText = text;
  document.body.insertBefore(span, tagInput);
  tagInput.value = "";
}
