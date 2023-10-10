
const categoriesList = document.querySelector('#categories');


const categoryItems = Array.from(categoriesList.querySelectorAll('li.item'));


console.log(`Number of categories: ${categoryItems.length}`);


categoryItems.forEach(categoryItem => {
  
  const categoryName = categoryItem.querySelector('h2').textContent;
  
 
  const categoryItemCount = categoryItem.querySelectorAll('li').length;
  
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemCount}`);
});