// let person = {
//   firstName: "Eshmat",
//   walk: function () {
//     console.log(this);
//   },
// };
// person.walk();

// function Person(firstName) {
//   this.firstName = firstName;
// }

// Person.prototype.talk = function () {
//   console.log(this);
// };
// Person.prototype.walk = () => {
//   console.log(this);
// };
// let eshmat = new Person("Eshmat");
// eshmat.talk();
// eshmat.walk();

// class Person {
//   firstName;
//   age;
//   constructor(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
//   }
//   walk() {}
//   talk() {}
// }

// let eshmat = new Person("Eshmat", 32);

// console.log(eshmat);

class Car {
  name;
  model;
  color;
  max_speed;
  company;
  isStarted = false;
  isMoving = false;
  currentSpeed = 0;
  gasSize;
  currentGase;
  #gasUsage = 0;
  gasUsageIntervalId;
  constructor(
    name,
    model,
    color,
    max_speed,
    company,
    gasSize = 40,
    currentGase
  ) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.max_speed = max_speed;
    this.company = company;
    this.gasSize = gasSize;
    this.currentGase = gasSize;
  }
  get() {
    return this.#gasUsage;
  }
  start() {
    if (this.isStarted) {
      console.log(this.name + " is already started no need to start again");
      return;
    }

    this.isStarted = true;
    console.log(this.name + " is started");
    this.#gasUsage++;
    this.gasUsageIntervalId = setInterval(() => {
      this.currentGase -= this.#gasUsage;
      console.log(`${this.name} has ${this.currentGase} l gas left`);
    }, 3_000);
    if (this.currentGase < 0) {
      console.log(`${this.name} no gas you should turn off car`);
      clearInterval(showGas);
      return;
    }
  }

  stop() {
    if (!this.isStarted) {
      console.log(`${this.name} is not started yet. No need to start`);
    }
    this.stopMowing();
    clearInterval(this.gasUsageIntervalId);
    this.#gasUsage = 0;
    this.isStarted = false;
  }
  move() {
    if (!this.isStarted) {
      console.log(this.name + " is not started yet, please start first");
      return;
    }
    this.currentSpeed += 10;
    this.#gasUsage++;
    if (this.isMoving) {
      console.log(
        `${this.name} is increased 10,  current speed ${this.currentSpeed}`
      );
      if (this.currentSpeed >= 60) {
        console.log("Further seeding is not recommendet as there might radar");
      }
      return;
    }
    this.isMoving = true;
    console.log(
      `${this.name} start moving current speed is ${this.currentSpeed}`
    );
  }
  stopMowing() {
    if (!this.isMoving) {
      console.log(`${this.name} is not moving anyways. No need to stop`);
      return;
    }
    this.isMoving = false;
    this.#gasUsage = 1;
    this.currentSpeed = 0;
    console.log(`${this.name} stop moving`);
  }
}

let bmw = new Car("My bmw", "X5", "black", "243", "BMW", 82);
let mers = new Car("My Mersedes", "222", "black", "250", "MERS", 100);
bmw.start();
bmw.move();
