const increase = document.querySelector('[data-action="increment"]');
const decrease = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");

let counterValue = 0;

function onIncreaseEvent() {
  counterValue += 1;
  value.textContent = counterValue;
}

function onDecreaseEvent() {
  counterValue -= 1;
  value.textContent = counterValue;
}

increase.addEventListener("click", onIncreaseEvent);
decrease.addEventListener("click", onDecreaseEvent);
