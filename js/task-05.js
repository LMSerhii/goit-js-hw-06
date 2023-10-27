const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", putText);

function putText(event) {
  nameOutput.textContent = event.currentTarget.value;
}
