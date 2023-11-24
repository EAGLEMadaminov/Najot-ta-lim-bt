// // 3-vazifa  cars
let cars = ["mersades", "cobalt", "matiz"];
let newCar = prompt("Moshina nomini kiriting").toLocaleLowerCase();

if (cars.includes(newCar)) {
  alert("Bu mashina bor");
} else {
  cars.push(newCar);
  alert("Sizda " + cars.join(", ") + " mashinalariz bor");
}
