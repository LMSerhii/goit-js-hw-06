const remoteControl = document.querySelector("#font-size-control");
const getText = document.querySelector("#text");

remoteControl.addEventListener("input", getValue);

function getValue(event) {
  getText.style.fontSize = `${event.currentTarget.value}px`;
}
