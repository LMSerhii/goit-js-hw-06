const remoteControl = document.querySelector("#font-size-control");
const getText = document.querySelector("#text");

remoteControl.addEventListener("input", onRemoteControlEvent);

function onRemoteControlEvent(event) {
  getText.style.fontSize = `${event.currentTarget.value}px`;
}
