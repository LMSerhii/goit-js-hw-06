const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elements = [];

for (const item of ingredients) {
  const element = document.createElement("li");
  element.textContent = item;
  element.classList.add("item");
  elements.push(element);
}

ingredientsEl.append(...elements);
