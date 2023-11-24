let str = "Lorem ipsum dolor sit amet. +99899";

// console.log(str.length);
// console.log(str.charAt(10));  //  e
// console.log(str.charCodeAt(22));  // 22 - indexdagi harfini asci dagi qiymatini qaytaradi.
// console.log(str.concat("Eshmat", "Toshmat"))  // Lorem ipsum dolor sit amet.EshmatToshmat
// console.log(str.endsWith("."));
// console.log(str.startsWith("l"));
// console.log(str.includes("j"));
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));
// console.log(str.padEnd(10, "0")); // bizda 10 raqam bo'lishi kk bo'lsa raqam yetmasa oxiriga 0 qo'shadi.
// console.log(str.padStart(10,"0"))  // yetmasa boshiga 0 qo'shadi
// console.log(str.repeat(3)) // berilgan stringni 3 marta takrorlab chiqarib beradi.
// console.log(str.replace("  ", "0"));
// console.log(str.replaceAll(" ", ","));
// console.log(str.search("ame"));  // so'z yoki harfni nechinchi  indexdan boshlashini aytadi.
// console.log(str.search(/\+998*9*/)); string va regex orqali
console.log(str.slice(14));
console.log(str.split(" "));
// console.log(str.startsWith("lorem")); // to'gri bo'sa true bo'lmasa false qaytaradi.
// console.log(str.toLocaleLowerCase())
// console.log(str.toUpperCase())
// console.log(str.trim()); // boshidagi va ohiragi bosh joylarni olib tashlaydi.
// console.log(str.trimStart());
// console.log(str.trimEnd());

// Array methodlari
let fruits = ["Apple", "Banana"]; 
// Asosiy arrayga ta'sir qilmaydigan methodlar

// console.log(fruits.length);
// console.log(fruits.concat(["Pear", "Lime"]));
// console.log(fruits.flat(2)); // ichma ich arraylarni bitta arrayga o'girib beradi.
// console.log(fruits.includes("apple"));
// console.log(fruits.indexOf("Apple"));
// console.log(fruits.lastIndexOf("Apple"));
// console.log(fruits.join(" "));
// console.log("fruits".split("").reverse().join("")); // string teskarisiga o'girish
// console.log(fruits.slice(1, 3));
// console.log(fruits.sort());
// console.log(fruits.sort().reverse());

// Arrayga ta'sir ko'rsatuvchi methodlar

// fruits.push("Pear");
// fruits.unshift("Pear");
// fruits.pop();
// fruits.shift();
// fruits.splice("")
// fruits.splice(fruits.length,0,"Pear") // ohiriga qo'shish
// fruits.splice(0,0,"Pear")   // boshiga qo'shish

let time = new Date();

// time.getTime()  // bu 1970yil 1 yanvardan hozzirgacha
//  qancha vaqt o'tganini millisecond o'tganini ko'rsatadi.

// Xurmatli vazifa ism yil oy kun So'rab ismni katta harflarda
//  nechichi yil umr ko'rgani nechchi kun nechhi soatni chiqarish

// let arr = [1, 2, 3, 4, 5, 10];

// console.log(arr.filter((a, b) => a - b));

// let arr2 = ["olma", "limon", "anor", "behi", "ananas"];
// console.log(arr2);
// let ask = prompt("Meva nomini kiriting");
// let ask2 = prompt("Nima qo'shmoqchisiz");
// let index = Number(prompt("Qaysi indexdan qo'shilsin sonda kiriting"));
// arr2.splice(arr2.indexOf(ask), 1);
// arr2.splice(index, 0, ask2);
// let ask3 = prompt("Qaysi mevani o'zgartirmoqchisan");
// let aks4 = prompt("Qaysi mevaga o'zgartirmoqchisan");
// arr2.splice(arr2.indexOf(ask3), 1, aks4);
// console.log(arr2);
