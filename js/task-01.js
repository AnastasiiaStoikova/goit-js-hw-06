// ___________1 question
const categoryList = document.querySelector("#categories");
const itemList = categoryList.querySelectorAll(".item");
console.log(`Number of categories: ${itemList.length}`);

//___________2 question

itemList.forEach((item) => {
  const headerText = item.querySelector("h2").textContent;
  const numberOfElements = item.querySelectorAll("li").length;
  console.log(`Category: ${headerText}`);
  console.log(`Elements: ${numberOfElements}`);
});
