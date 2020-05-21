'use strict';

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputForRenderBoxes = document.querySelector('#controls > input');
const buttonRenderBoxes = document.querySelector('button[data-action="render"]');
const buttonDestroyBoxes = document.querySelector('button[data-action="destroy"]');
const outputForRenderBoxes = document.querySelector('#boxes');

buttonRenderBoxes.addEventListener('click', () => {
	const divElements = createBoxes(inputForRenderBoxes.value);
	outputForRenderBoxes.append(...divElements);
});

buttonDestroyBoxes.addEventListener('click', () => {
	destroyBoxes(outputForRenderBoxes, inputForRenderBoxes);
});

function createBoxes(amount) {
	const elements = [];
	const heightBox = 30;
	const widthBox = 30;

	for (let i = 0; i < amount; i += 1) {
		const div = document.createElement('div');
		div.style.backgroundColor = `#${Math.floor(Math.random() * 999 + 100)}`;
		div.style.height = `${heightBox + i * 10}px`;
		div.style.width = `${widthBox + i * 10}px`;
		elements.push(div);
	}

	return elements;
}

function destroyBoxes(targetToDestroy, targetToClear) {
	targetToDestroy.innerHTML = '';
	targetToClear.value = '';
}
