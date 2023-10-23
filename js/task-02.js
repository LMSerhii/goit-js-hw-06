const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
console.dir(ingredientsEl);

const el1 = document.createElement("li");
el1.textContent = ingredients[0];
el1.classList.add("item");

const el2 = document.createElement("li");
el2.textContent = ingredients[1];
el2.classList.add("item");

const el3 = document.createElement("li");
el3.textContent = ingredients[2];
el3.classList.add("item");

const el4 = document.createElement("li");
el4.textContent = ingredients[3];
el4.classList.add("item");

const el5 = document.createElement("li");
el5.textContent = ingredients[4];
el5.classList.add("item");

const el6 = document.createElement("li");
el6.textContent = ingredients[5];
el6.classList.add("item");

ingredientsEl.append(el1, el2, el3, el4, el5, el6);
