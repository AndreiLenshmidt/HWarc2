'use strict';

// class receiver
class Car {
	
	constructor(model, power, speed, price) {
		this.model = model;
		this.power = power;
 		this.speed = speed;
		this.price = price;
	}

	buyCar() {
		alert(` You are buy the Car model: ${this.model} power: ${this.power}`);
	}

	sellCar() {
		alert(` You are sell the Car model: ${this.model} cost: ${this.price}`);
	}

	driveCar() {
		alert(` You are drive the Car power: ${this.power} speed: ${this.speed}`);
	}
}

// command bue car
class CarBuyer {
	
	constructor(car) {
		this.car = car;
	}

	buy() {
		this.car.buyCar();
	}
}

// command sell car
class CarSeller {
	
	constructor(car) {
		this.car = car;
	}

	sell() {
		this.car.sellCar();
	}
}

// command drive car
class CarDriver {

	constructor(car) {
		this.car = car;
	}

	drive() {
		this.car.driveCar();
	}
}

// class invoker
class Invoker {
	
	constructor(carDrive, carBuy, carSell) {
		this.carDrive = carDrive;
		this.carBuy = carBuy;
		this.carSell = carSell;
	}

	comandBuy() {
		this.carBuy.buy();
	}

	comandSell() {
		this.carSell.sell();
	}

	commandDrive() {
		this.carDrive.drive();
	}
}

// client
const simpleCar = new Car("Ford", "125 HP", "170 km", "400 000 rub");
const invoker1 = new Invoker(
	new CarDriver(simpleCar),
	new CarBuyer(simpleCar),
	new CarSeller(simpleCar)
);

invoker1.comandBuy();
invoker1.commandDrive();
invoker1.comandSell();










