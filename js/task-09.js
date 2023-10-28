function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector(".color");
const changeColorEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

changeColorEl.addEventListener("click", onChangeColorElEvent);

function onChangeColorElEvent() {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
}
