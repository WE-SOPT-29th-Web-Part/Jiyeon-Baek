"use strict";

const inputs = document.querySelectorAll('.todos__input');
const addBtns = document.querySelectorAll('.todos__add');
const allItems = document.querySelectorAll('.todos__items');
let i = 0;

addBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    onAdd(index);
  })
);

inputs.forEach((input, index) =>
  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      onAdd(index);
    }
  })
);

const onAdd = (index) => {
  if (!inputs[index].value) return;

  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  div.setAttribute("class", "todos__item--left");
  checkbox.setAttribute("class", "todos__check");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "check" + i);
  label.setAttribute("for", "check" + i);
  li.setAttribute("class", "todos__item");
  span.setAttribute("class", "todos__name");
  deleteBtn.setAttribute("class", "todos__delete");

  deleteBtn.innerText = "X";
  span.innerText = inputs[index].value;

  allItems[index].appendChild(li);
  div.appendChild(checkbox);
  div.appendChild(label);
  div.appendChild(span);
  li.appendChild(div);
  li.appendChild(deleteBtn);

  i++;
  inputs[index].value = "";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
};

const nav = document.querySelector('.options');
const todos = document.querySelectorAll('.todos > section');

nav.addEventListener("click", (event) => {
  if (event.target.className.includes("options__today")) {
    todos[0].classList.add("open");
    todos[1].classList.remove("open");
  } else if (event.target.className.includes("options__tomorrow")) {
    todos[1].classList.add("open");
    todos[0].classList.remove("open");
  } else if (event.target.className.includes("options__both")) {
    todos[0].classList.add("open");
    todos[1].classList.add("open");
  }
});