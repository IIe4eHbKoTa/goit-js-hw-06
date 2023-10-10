const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.getElementById('ingredients');


const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const newLiElement = document.createElement('li');
  newLiElement.textContent = ingredient;
  newLiElement.classList.add('item');
  fragment.appendChild(newLiElement);
});


ulList.appendChild(fragment);
