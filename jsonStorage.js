const inputName = document.querySelector("#inputName");
const form = document.querySelector("form");
const rowName = document.querySelector(".row");
const delButton = document.getElementById("delete");
let inputArr = [];
let seconds = 0;

class InputEvent {
  constructor(name) {
    this.eventName = name;
  }
}

const timer = () => {
  const timerP = document.getElementById("timer");
  timerP.classList.add("fs-6");
  timerP.classList.add("text-danger");
  sessionStorage.getItem("seconds", seconds);

  timerP.innerText = `${seconds} seconds`;
  seconds++;
};

const deleteName = () => {
  inputArr.pop();
  const lastChild = rowName.lastChild;
  rowName.removeChild(lastChild);
};

const displayName = (obj) => {
  const col = document.createElement("div");
  col.classList.add("col");
  rowName.appendChild(col);
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  ul.classList.add("list-group");
  li.classList.add("list-group-item");
  ul.appendChild(li);
  li.innerText = `${obj.eventName}`;
  col.appendChild(ul);
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
  setInterval(timer, 1000);
  const savedNames = localStorage.getItem("input-memory");
  if (savedNames) {
    const parsedNames = JSON.parse(savedNames);
    inputArr = parsedNames;
  } else {
    makeAlert();
  }
});
