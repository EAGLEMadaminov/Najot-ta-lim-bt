// // let persons = {
// //   address: {
// //     city: "Toshkent",
// //     district: "Chilonzor",
// //     string: "Al Xorazmiy",
// //     building: 32,
// //     fullAddres() {
// //       console.log(this);
// //     },
// //   },
// //   displayPerson() {
// //     console.log(`${this.fName} ${this.age} yoshda`);
// //   },
// //   displayThis() {
// //     console.log(this);
// //   },
// // };
// // const person1 = { fName: "Firdavs", age: 24 };
// // // persons.displayPerson.call(person1);
// // // persons.displayPerson.apply(person1);
// // persons.address.fullAddres();
// // persons.displayThis();
// // persons.displayPerson();

// function createCounter(count = 0) {
//   let a = "Salom";
//   const b = true;
//   return {
//     get hello() {
//       return a;
//     },
//     set hello(value) {
//       if (
//         typeof value === "string" &&
//         value.length > 4 &&
//         value.toLocaleLowerCase().includes(a)
//       ) {
//         a = value;
//       }
//     },
//     get count() {
//       return count;
//     },

//     set count(value) {
//       if (value < 0) return;
//       count = value;
//     },
//     inc() {
//       return ++this.count;
//     },
//     dec() {
//       return --this.count;
//     },
//   };
// }

// let chances = createCounter(3);

// console.log(chances.hello);
// chances.hello = 233;
// console.log(chances.hello);
// chances.hello = "salom adcsdsdc";
// console.log(chances.hello);
// chances.hello = "asdsdsds";
// console.log(chances.hello);
// chances.hello = "asd";
// console.log(chances.hello);

// Call, apply, bind

// function createPerson() {
//   let person = {
//     fName: "Eshmat",
//     address: {
//       city: "Toshkent",
//       displayPersonWithAddress() {
//         console.log(`${this.fName} ${this.address.city}`);
//       },
//     },
//   };
//   person.address.displayPersonWithAddress =
//     person.address.displayPersonWithAddress.bind(person);
//   return person;
// }

// const person = createPerson();
// console.log(123);
// person.address.displayPersonWithAddress();

// let person1 = { name: "Ali", age: 28 };

// let showPerson = {
//   displayPerson(string) {
//     console.log(`${string} ${this.name} ${this.age} `);
//   },
// };

// showPerson.displayPerson.call(person1, "Salom");

// Constructor functon

function Person(fName, age) {
  this.fName = fName;
  this.age = age;
  this.address = {
    city: "toshkent",
  };
  this.walk = function () {
    console.log(`${this.fName} is walking`);
  };
}

Person.prototype.greeting = function () {
  console.log(`Salom! Mening ismim ${this.fName}. Yoshim ${this.age}da.`);
};

let eshmat = new Person("Eshmat", 32);
let toshmat = new Person("Toshmat", 28);

eshmat.greeting();
toshmat.greeting();
console.log(eshmat.greeting === toshmat.greeting);

function multiplyAndAdd(d) {
  console.log(`result = ${this.a * this.b + d}`);
}

let money = { a: 3, b: 4 };
let show = multiplyAndAdd.bind(money, 5);
show();

// function Car(inc, dec) {
//   console.log(`${this.name} ${this.speed}`);
//   Car.prototype.inc = function inc() {
//     console.log(this.speed + inc);
//   };
//   Car.prototype.dec = function dec() {
//     console.log(this.speed - 5);
//   };
// }
// const bmv = { name: "BMV", speed: 500 };
// Car.call(bmv, 5);
// Car.inc.call(bmv, 5);
// Car.call(bmv);
