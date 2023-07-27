'use strict';

// Класс который будет конструироваться в билдере
class Flat {

	constructor() {
		this.kitchen = 'kitchen';
		this.bedroom = 'bedroom';
		this.room1 = 'room1';
	}
}

// Класс конструктор, добавляет части в объект в необходимом порядке, 
//затем возращает его через build()
class FlatBuilder {
	
	constructor() {
		this.flat = new Flat();
	}
	
	addKitchen(yourKitchen) {
		this.flat.kitchen = yourKitchen;
		return this;
	}

	addBedroom(yourBedroom) {
		this.flat.bedroom = yourBedroom;
		return this;
	}

	addRoom1(yourRoom1) {
		this.flat.room1 = yourRoom1;
		return this;
	}

	addRoom2(yourRoom2) {
		this.flat.room2 = yourRoom2;
		return this;
	}

	addRoom3(yourRoom3) {
		this.flat.room3 = yourRoom3;
		return this;
	}

	build() {
		return this.flat;
	}
}

// Реализация
const flat = new FlatBuilder()
		.addKitchen("myKitchen")
		.addBedroom("myBedRoom")
		.addRoom1("myBathroom")
		.addRoom2("myHallway")
		.build();

console.log(flat);






