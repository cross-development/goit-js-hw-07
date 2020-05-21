'use strict';

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const counter = document.querySelector('#value');
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

// -----------------------Первый вариант реализации---------------------------

const increment = value => (value += 1);
const decrement = value => (value -= 1);

incrementButton.addEventListener('click', () => {
	counterValue = increment(counterValue);
	counter.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
	counterValue = decrement(counterValue);
	counter.textContent = counterValue;
});

// -----------------------Второй вариант реализации---------------------------
//Я не думаю, что так правильно обращаться из функции к глобальным переменным
//(без передачи их в качестве аргументов в параметры функции), но этот вариант короче и понятней

// incrementButton.addEventListener('click', increment);
// decrementButton.addEventListener('click', decrement);

// function increment() {
// 	counter.textContent = counterValue += 1;
// }

// function decrement() {
// 	counter.textContent = counterValue -= 1;
// }

// -----------------------Третий вариант реализации---------------------------
// class Counter {
// 	constructor(initialValue, step) {
// 		this.value = initialValue;
// 		this.step = step;
// 	}

// 	increment() {
// 		this.value += this.step;
// 	}

// 	decrement() {
// 		this.value -= this.step;
// 	}
// }

// const myCounter = new Counter(0, 1);

// incrementButton.addEventListener('click', () => {
// 	myCounter.increment();
// 	counter.textContent = myCounter.value;
// });

// decrementButton.addEventListener('click', () => {
// 	myCounter.decrement();
// 	counter.textContent = myCounter.value;
// });
