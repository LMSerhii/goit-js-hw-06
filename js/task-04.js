const increase = document.querySelector('[data-action="increment"]');
const decrease = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");

let counterValue = 0;

function add() {
  counterValue += 1;
  value.textContent = counterValue;
}

function sub() {
  counterValue -= 1;
  value.textContent = counterValue;
}

increase.addEventListener("click", add);
decrease.addEventListener("click", sub);
