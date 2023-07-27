'use strict';

// Класс Memento, нужен для создания объекта в котором будет хранится состояние
class Memento {
	constructor(value) {
		this.value = value;
	}

	toString() {
		return this.value;
	}
};

// Объект creator сохряняет/восстанавливает состояние
const creator = {
	save: val => new Memento(val),
	restore: memento => memento.value,
};

// Класс который хранит все сохраненные моменты
class Caretaker {
	constructor() {
		this.values = [];
	}

	addMemento(memento) {
		this.values.push(memento);
	}

	getMemento(index) {
		return this.values[index];
	}
};

// Реализация
const saver = new Caretaker();

saver.addMemento(creator.save("Your first value"));
saver.addMemento(creator.save("Your second value"));
saver.addMemento(creator.save("Your third value"));

console.log(creator.restore(saver.getMemento(1)));
