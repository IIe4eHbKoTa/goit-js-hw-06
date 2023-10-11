
const categoriesList = document.querySelector('#categories');
const categoryItems = document.querySelectorAll('li.item')

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryItemCount = category.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemCount}`);
});