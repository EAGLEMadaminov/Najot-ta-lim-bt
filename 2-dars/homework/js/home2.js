let fruits = ["Olma", "Anor", "Bexi"];
let ask = confirm(`Bizda ${fruits} mevalar bor. Yana meva qo'shmoqchimisiz?`);

if (ask) {
  let fruit = prompt("Meva nomini kirirting");
  fruits.push(fruit);
}
let ask2 = confirm("Boshidan o'chirmoqchimisiz ?");
if (ask2) {
  fruits.shift();
}
console.log(fruits);
