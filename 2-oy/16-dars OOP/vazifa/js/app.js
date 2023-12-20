// Food
function Food() {
  console.log(
    `Osh pishirish uchun ,asaliqlar ketma-ket ${this?.oil} , ${this.meat}, ${this.onion}, \n${this.carrot}, ${this.water}, ${this.rise} shu tartibda solinadi`
  );
}

let myFood = {
  oil: "catton oil",
  meat: "bull meat",
  onion: "onion",
  carrot: "yellow carrot",
  water: "fresh water",
  rise: "Lazer",
};
Food.call(myFood);

// Person
function Person(a, isMarried, hasCar) {
  console.log(
    `${this.name} ${this.age + a} yoshda. ${
      this.name
    } ${isMarried}. Unda mashina ${hasCar}`
  );
}

let Ahmadjon = { name: "Ahmadjon", age: 22 };
Person.call(Ahmadjon, 1, "Uylangan", "yo'q");

//   Animal
function Animal(animal, nav, eat) {
  this.animal = animal;
  this.nav = nav;
  this.eat = eat;
  this.info = () => {
    console.log(
      `Bu ${this.animal}. U ${this.nav} turga mansub. U ${this.eat} bilan oziqlanadi.`
    );
  };
}

let lion = new Animal("lion", "wild", "meat");
lion.info();

let Eagle = new Animal("Eagle", "perrot", "meat");
Eagle.info();

// Car
function Car(name, color, way, hasDocument, advise) {
  this.name = name;
  this.color = color;
  this.way = way;
  this.hasDocument = hasDocument;
  this.advise = advise;
}
Car.prototype.carInfo = function () {
  console.log(
    `${this.name} moshina ${this.color} rangda ${this.way} km yurgan. Documentlari ${this.hasDocument}`
  );
};
Car.prototype.advice = function () {
  console.log(`Bu ${this.name} olishni tavsiya ${this.advise} `);
};

let BMW = new Car("BMW", "Black", "230000", "no", "qilaman");
BMW.carInfo();
BMW.advice();

// Fruit
function Fruit(name, country, lifetime, fresh) {
  this.name = name;
  this.country = country;
  this.lifetime = lifetime;
  this.fresh = fresh;
}
Fruit.prototype.check = function () {
  if (this.fresh === "no") {
    console.log(
      `Bu ${this.name} ${this.country}dan olib kelingan. Saqlash muddati ${this.lifetime}.Uni yeb bo'lmaydi `
    );
  } else {
    console.log(
      `Bu ${this.name} ${this.country}dan olib kelingan. Saqlash muddati ${this.lifetime}.Uni yeb bo'ladi `
    );
  }
};
let Banan = new Fruit("Banan", "Afrika", "10.10.2023", "no");
Banan.check();
let Ananas = new Fruit("Ananas", "Mongol", "31.12.2023", "yes");
Ananas.check();
