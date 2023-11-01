const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const nameText = nameOutput.textContent;

nameInput.addEventListener("input", onNameInput);

function onNameInput(event) {
  console.log(nameText);
  nameOutput.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    nameOutput.textContent = nameText;
  }
}
