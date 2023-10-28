const validationInput = document.querySelector("#validation-input");
const dataLength = Number(validationInput.dataset.length);

validationInput.addEventListener("blur", onOffValidationInputEvent);

function onOffValidationInputEvent(event) {
  const currentLength = event.currentTarget.value.length;

  validationInput.classList.toggle("valid", currentLength === dataLength);

  validationInput.classList.toggle("invalid", currentLength !== dataLength);
}
