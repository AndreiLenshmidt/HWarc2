'use strict';

// Класс ObjectIterator перебирает значения полей объекта:
// В конструкторе задаем нулевой индекс, массив ключей(имен полей) объекта и сам объект
// Метод next() возвращает значение поля объекта по ключу из массива ключей по индексу
// Метод hasNext() возращает true/false если есть следующий ключ/нет следующего ключа

class ObjectIterator {

	constructor(object) {
		this.index = 0;
		this.keys = Object.keys(object);
		this.elements = object;
	}
	
	next() {
		return this.elements[this.keys[this.index++]];	
	}

	hasNext() {
		return this.index < this.keys.length;
	}
}

// Реализация
const iterator = new ObjectIterator({hi1: "hello", 
			hi2: "good morning", 
			hi3: "good evening",
			hi4: "hi"});

while(iterator.hasNext()) {
	console.log(iterator.next())
}







