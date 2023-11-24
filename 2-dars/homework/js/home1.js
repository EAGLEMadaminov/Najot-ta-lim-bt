// let name = prompt("Ismingizni kiriting!").toLocaleUpperCase();
let year = 1997;
let month = 12;
let date = 30;

let bday = new Date(year, month - 1, date).getTime();
let now = new Date().getTime();
let oraliqKun = parseInt((now - bday) / 1000 / 60 / 60 / 24);
console.log(oraliqKun);
