const inputName = document.querySelector("#inputName");
const form = document.querySelector("form");
const rowName = document.querySelector(".row");
const delButton = document.getElementById("delete");
let inputArr = [];
const counter = 0;

class InputEvent {
  constructor(name) {
    this.eventName = name;
  }
}

const timer = setTimeout(() => {
  counter++;
}, 1000);

const deleteName = () => {
  inputArr.pop();
  const lastChild = rowName.lastChild;
  rowName.removeChild(lastChild);
};

const displayName = (obj) => {
  const col = document.createElement("div");
  col.classList.add("col");
  rowName.appendChild(col);
  const p = document.createElement("p");
  p.innerText = `${obj.eventName}`;
  col.appendChild(p);
  delButton.onclick = () => {
    deleteName();
  };
};

const makeAlert = () => {
  const container = document.querySelector(".container");
  const alert = document.createElement("div");
  alert.classList.add("alert alert-info");
  alert, (innerText = "Inserisci un nome");
  container.appendChild(alert);
};

form.onsubmit = function (e) {
  e.preventDefault();
  const inputEvent = new InputEvent(inputName.value);
  inputArr.push(inputEvent);
  localStorage.setItem("input-memory", JSON.stringify(inputArr));
  displayName(inputEvent);
};

window.addEventListener("DOMContentLoaded", () => {
  const savedNames = localStorage.getItem("input-memory");
  if (savedNames) {
    const parsedNames = JSON.parse(savedNames);
    inputArr = parsedNames;
  } else {
    makeAlert();
  }

  const timerP = document.getElementById("timer");
  timerP.innerText = timer();
});
