// // // let persons = {
// // //   address: {
// // //     city: "Toshkent",
// // //     district: "Chilonzor",
// // //     string: "Al Xorazmiy",
// // //     building: 32,
// // //     fullAddres() {
// // //       console.log(this);
// // //     },
// // //   },
// // //   displayPerson() {
// // //     console.log(`${this.fName} ${this.age} yoshda`);
// // //   },
// // //   displayThis() {
// // //     console.log(this);
// // //   },
// // // };
// // // const person1 = { fName: "Firdavs", age: 24 };
// // // // persons.displayPerson.call(person1);
// // // // persons.displayPerson.apply(person1);
// // // persons.address.fullAddres();
// // // persons.displayThis();
// // // persons.displayPerson();

// // function createCounter(count = 0) {
// //   let a = "Salom";
// //   const b = true;
// //   return {
// //     get hello() {
// //       return a;
// //     },
// //     set hello(value) {
// //       if (
// //         typeof value === "string" &&
// //         value.length > 4 &&
// //         value.toLocaleLowerCase().includes(a)
// //       ) {
// //         a = value;
// //       }
// //     },
// //     get count() {
// //       return count;
// //     },

// //     set count(value) {
// //       if (value < 0) return;
// //       count = value;
// //     },
// //     inc() {
// //       return ++this.count;
// //     },
// //     dec() {
// //       return --this.count;
// //     },
// //   };
// // }

// // let chances = createCounter(3);

// // console.log(chances.hello);
// // chances.hello = 233;
// // console.log(chances.hello);
// // chances.hello = "salom adcsdsdc";
// // console.log(chances.hello);
// // chances.hello = "asdsdsds";
// // console.log(chances.hello);
// // chances.hello = "asd";
// // console.log(chances.hello);

// // Call, apply, bind

// // function createPerson() {
// //   let person = {
// //     fName: "Eshmat",
// //     address: {
// //       city: "Toshkent",
// //       displayPersonWithAddress() {
// //         console.log(`${this.fName} ${this.address.city}`);
// //       },
// //     },
// //   };
// //   person.address.displayPersonWithAddress =
// //     person.address.displayPersonWithAddress.bind(person);
// //   return person;
// // }

// // const person = createPerson();
// // console.log(123);
// // person.address.displayPersonWithAddress();

// // let person1 = { name: "Ali", age: 28 };

// // let showPerson = {
// //   displayPerson(string) {
// //     console.log(`${string} ${this.name} ${this.age} `);
// //   },
// // };

// // showPerson.displayPerson.call(person1, "Salom");

// // Constructor functon

// function Person(fName, age) {
//   this.fName = fName;
//   this.age = age;
//   this.address = {
//     city: "toshkent",
//   };
//   this.walk = function () {
//     console.log(`${this.fName} is walking`);
//   };
// }

// Person.prototype.greeting = function () {
//   console.log(`Salom! Mening ismim ${this.fName}. Yoshim ${this.age}da.`);
// };

// let eshmat = new Person("Eshmat", 32);
// let toshmat = new Person("Toshmat", 28);

// eshmat.greeting();
// toshmat.greeting();
// console.log(eshmat.greeting === toshmat.greeting);

// function multiplyAndAdd(d) {
//   console.log(`result = ${this.a * this.b + d}`);
// }

// let money = { a: 3, b: 4 };
// let show = multiplyAndAdd.bind(money, 5);
// show();

// // function Car(inc, dec) {
// //   console.log(`${this.name} ${this.speed}`);
// //   Car.prototype.inc = function inc() {
// //     console.log(this.speed + inc);
// //   };
// //   Car.prototype.dec = function dec() {
// //     console.log(this.speed - 5);
// //   };
// // }
// // const bmv = { name: "BMV", speed: 500 };
// // Car.call(bmv, 5);
// // Car.inc.call(bmv, 5);
// // Car.call(bmv);

// PP => Procedural Programming
// Spagetti code

// let firstName1 = "Eshmat";
// let age1 = 32;
// let firstName2 = "Toshmat";
// let age2 = 28;

// function displayPerson1() {
//   console.log(`${firstName1} ${age1} yoshda`);
// }
// function displayPerson2() {
//   console.log(`${firstName2} ${age2} yoshda`);
// }

// displayPerson1();
// displayPerson2();

// FM => Functional Programming

// let firstName1 = "Eshmat";
// let age1 = 32;
// let firstName2 = "Toshmat";
// let age2 = 28;

// // Pure
// function displayPerson(firstName, age) {
//   console.log(`${firstName} ${age} yoshda`);
// }
// displayPerson(firstName1, age1);
// displayPerson(firstName2, age2);

// Impure function
// let count = 0;
// function inc() {
//   return ++count;
// }
// console.log(inc());
// console.log(inc());
// console.log(inc());

// OOP Object Oriented Programming
// let person1 = {
//   name: "Eshmat",
//   age: 32,
//   address: {
//     city: "Tashkent",
//     district: "Chilonzor",
//     street: "Al Xorazmiy",
//     building: 32,
//     fullAddress() {
//       console.log(this);
//     },
//   },
//   displayPerson() {
//     console.log(`${this.name} ${this.age} yoshda`);
//   },
//   displayThis() {
//     console.log(this);
//   },
// };
// let person2 = {
//   name: "Toshmat",
//   age: 28,
//   address: {
//     city: "Toshkent",
//     district: "Olmazor",
//     street: "Al Beruniy",
//     fullAddress() {
//       console.log(this);
//     },
//   },
//   displayPerson() {
//     console.log("Toshmat 28 yoshda");
//   },
// };

// person1.displayPerson();
// person1.age++;
// person1.displayPerson();
// // person2.displayPerson();
// person1.displayThis();

// person1.address.fullAddress();
// person2.address.fullAddress();

// // Factory function

// function createPerson(firtName, age, city, district, street, building) {
//   let person = {
//     firtName,
//     age,
//     address: {
//       city,
//       district,
//       street,
//       building,
//       fullAddress() {
//         console.log(
//           `Shahar: ${this.city} tuman: ${this.district} ko'cha ${this.street} bino: ${this.building}`
//         );
//       },
//     },
//     displayPerson() {
//       console.log(`${this.firtName} ${this.age} yoshda`);
//     },
//   };
//   return person;
// }

// const person1 = createPerson(
//   "Eshmat",
//   32,
//   "Toshkent",
//   "Chilonzor",
//   "Al Xoraxmiz",
//   23
// );
// person1.address.fullAddress();
// const person2 = createPerson(
//   "Toshmat",
//   28,
//   "Toshkent",
//   "Olmazor",
//   "Al Beruniy",
//   24
// );
// person2.address.fullAddress();

// Encapsulation
// function createCounter(count = 0) {
//   let a = "Salom";
//   return {
//     get hello() {
//       return a;
//     },
//     set hello(value) {
//       if (
//         typeof value === "string" &&
//         value.length > 4 &&
//         value.toLowerCase().includes("a")
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
//       return ++count;
//     },
//     dec() {
//       return --count;
//     },
//   };
// }

// let chances = createCounter();
// // console.log(chances.inc());
// chances.count = -5;
// console.log(chances.inc());
// chances.hello = "abcdssasas";
// console.log(chances.hello);
// console.log(chances.count);

// let person = { firstName: "Eshmat" };

// function displayName() {
//   console.log(`My name is ${this.firstName}`);
// }
// person.displayName = displayName;

// // displayName.apply(person);
// let a = displayName.bind(person);
// a();

// let chances = { count: 12 };
// function a(b, c, d) {
//   console.log(`${this.count + b + c + d}`);
// }

// a.apply(chances, [1, 3, 4]);

// const bindA = a.bind(chances, 2, 3, 4);
// bindA();

// function createPerson() {
//   let person = {
//     firstName: "Eshmat",
//     age: 32,
//     address: {
//       city: "Toshkent",
//       district: "Olmazor",
//       street: "Al Xorazmiy",
//       displayFullAddresWithName() {
//         console.log(`${this.firstName} ${this.address.city} da yashaydi`);
//       },
//     },
//   };
//   person.address.displayFullAddresWithName =
//     person.address.displayFullAddresWithName.bind(person);

//   return person;
// }
// const person = createPerson();
// person.address.displayFullAddresWithName();

// Constructor function

// function Person(firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// }
// Person.prototype.greating = function () {
//   console.log(`Mening ismim ${this.firstName} Yoshim ${this.age} da`);
// };
// let eshmat = new Person("Eshmat", 28);
// const toshmat = new Person("Toshmat", 32);
// // new calit so'zi constructor funksiyani bind qiladi va uni exucute qiladi
// console.log(eshmat);
// eshmat.greating();
// toshmat.greating();
// console.log(eshmat.greating === toshmat.greating);

// console.log(a);
// const a = 10;

// function person() {
//   var a = 10;
// }
// console.log(a);

setTimeout(() => {}, 2_000);


