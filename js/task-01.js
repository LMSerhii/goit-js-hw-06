const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

const items = [...categories.children].forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
