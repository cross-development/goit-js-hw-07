'use strict';
// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients. Для создания DOM-узлов используй
// document.createElement().

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const listOfIngredients = document.querySelector('#ingredients');
const items = createListOfItems(ingredients);

listOfIngredients.append(...items);

function createListOfItems(list) {
	return list.map(item => createItem(item));
}

function createItem(text) {
	const item = document.createElement('li');
	item.textContent = text;
	return item;
}
