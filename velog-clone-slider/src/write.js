'use strict';

const tagInput = document.querySelector(".tag-input");
let set = new Set();

tagInput.addEventListener("keyup", (e) => {
  let targetValue = e.target.value;
  if (e.key === "Enter") {
    if (!targetValue || set.has(targetValue)) {
      e.target.value = "";
      return;
    }
    addTag(targetValue);
  }
});

const addTag = (text) => {
  set.add(text);

  const span = document.createElement("span");
  span.setAttribute("class", "tag-span");
  span.innerText = text;
  document.body.insertBefore(span, tagInput);
  tagInput.value = "";

  span.addEventListener("click", (e) => {
    set.delete(e.target.innerText);
    span.remove();
  });
};