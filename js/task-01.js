const categories = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${categories}`);

const items = document.querySelectorAll(".item").forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
