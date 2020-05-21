'use strict';
// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

import { images } from './images.js';

const gallery = document.querySelector('#gallery');

const markup = createGalleryListMarkup(images);
gallery.insertAdjacentHTML('afterbegin', markup);

function createGalleryListMarkup(listOfImages) {
	return listOfImages.map(item => createGalleryItemMarkup(item)).join('');
}

function createGalleryItemMarkup({ url, alt }) {
	const listItemMarkup = `
    <li class="gallery-item">
    <img src="${url}" alt="${alt}" class="gallery-img">
    </li>`;

	return listItemMarkup;
}
