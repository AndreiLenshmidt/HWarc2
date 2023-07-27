'use strict';

// класс который содержит метод позволяющий расширять функционал классов, 
// от него наследуются классы, чей функционал необходимо расширить
class Animal {
	accept(visitor) {
		visitor(this);
	}
}

// классы наследники
class Cat extends Animal {

	voice() {
		alert("Cat speek meow");
	}
}

class Dog extends Animal {


	voice() {
		alert("Dog speek gaff");
	}
}

// визитор который выводит метод .voice в консоль
function visitor1 (animal) {
	if(animal instanceof Cat)
		animal.log = console.log(animal.voice);
	if(animal instanceof Dog)
		animal.log = console.log(animal.voice);
}

// визитор который добавляет метод .go классам наследникам
function visitor2 (animal) {
	if(animal instanceof Cat)
		animal.go = alert("cat is going");
	if(animal instanceof Dog)
		animal.go = alert("dog is going");
}

// реализация
const catVasya = new Cat();
const dogPetya = new Dog();

catVasya.accept(visitor1);
dogPetya.accept(visitor2);








