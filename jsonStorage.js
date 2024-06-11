const inputName = document.querySelector("#inputName");
const form = document.querySelector("form");
const rowName = document.querySelector(".row");
const delButton = document.getElementById("delButton");

class InputEvent {
  constructor(name) {
    this.eventName = name;
  }
}

let inputArr = [];

const displayName = (obj) => {
  const col = document.createElement("div");
  col.classList.add("col");
  rowName.appendChild(col);
  const p = document.createElement("p");
  p.innerText = `${obj.eventName}`;
  col.appendChild(p);
};

const makeAlert = () => {};

const deleteName = (e) => {
  const col = e.currentTarget;
};

form.onsubmit = function (e) {
  e.preventDefault();
  const inputEvent = inputName.value;
  inputArr.push(inputEvent);
  localStorage.setItem("input-memory", JSON.stringify(inputArr));
  displayName(new InputEvent(inputEvent));
};

window.addEventListener("DOMContentLoaded", () => {
  const savedNames = localStorage.getItem("input-memory");
  if (savedNames) {
    const parsedNames = JSON.parse(savedNames);
    inputArr = parsedNames;
  } else {
    makeAlert();
  }
});
