function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const inputElement = controls.children[0];
const createBtn = controls.children[1];
const destroyBtn = controls.children[2];
const boxes = controls.nextElementSibling;

createBtn.addEventListener("click", onCreateBtn);
destroyBtn.addEventListener("click", onDestroyBtn);

function onCreateBtn() {
  destroyBoxes();
  createBoxes(inputElement.value);
}

function onDestroyBtn() {
  destroyBoxes();
}

function createBoxes(amount) {
  const MAX_ELEMENTS = amount;
  let size = 30;
  let iterCounter = 0;

  while (iterCounter < MAX_ELEMENTS) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="
      background-color: ${getRandomHexColor()}; 
      width: ${size}px; 
      height: ${size}px">
      </div>`
    );

    size += 10;
    iterCounter += 1;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
