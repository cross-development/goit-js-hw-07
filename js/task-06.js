'use strict';

// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputValidation = document.querySelector('#validation-input');
const inputLength = document.querySelector('input[data-length="6"]').dataset.length;

inputValidation.addEventListener('blur', checkInputValidation);

function checkInputValidation(e) {
	const input = e.currentTarget;

	input.value.length === Number(inputLength)
		? input.setAttribute('class', 'valid')
		: input.setAttribute('class', 'invalid');
}
