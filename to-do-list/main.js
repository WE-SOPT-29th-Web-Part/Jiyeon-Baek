"use strict";

const dates = document.querySelectorAll('.todos__date');
const inputs = document.querySelectorAll('.todos__input');
const addBtns = document.querySelectorAll('.todos__add');
const allItems = document.querySelectorAll('.todos__items');
const nav = document.querySelector('.options');
const todos = document.querySelectorAll('.todos > section');
let i = 0;

const getDate = (str) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const today = `${year}년 ${month}월 ${day}일`;
  const tomorrow = `${year}년 ${month}월 ${day + 1}일`;
  const when = (str === "today" ? today : tomorrow);
  return when;
}
dates[0].innerText = getDate("today");
dates[1].innerText = getDate("tomorrow");

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

  span.innerText = inputs[index].value;

  allItems[index].appendChild(li);
  div.appendChild(checkbox);
  div.appendChild(label);
  div.appendChild(span);
  li.appendChild(div);
  li.appendChild(deleteBtn);

  i++;
  inputs[index].value = "";

  checkbox.addEventListener("click", (event) => {
    const checkTarget = event.target;
    if (checkTarget.checked) {
      span.style.textDecoration = "line-through";
      span.style.color = "#AAAAAA";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "black";
    }
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
};

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