// 8 - vazifa;

let allway = 1100;
let choose = +prompt(
  "Xorazmga nimada bormoqchisiz ?   foot, bicycle, car, train, smalyot 1 dan 5 gacha tanlang"
);
switch (choose) {
  case 1:
    alert("Siz " + allway / 2 + " soatda yetib borasiz");
    break;
  case 2: {
    alert("Siz " + allway / 20 + " soatda yetib borasiz");
    break;
  }
  case 3:
    alert("Siz " + Math.round(allway / 70) + " soatda yetib borasiz");
    break;
  case 4: {
    alert("Siz " + Math.round(allway / 150) + " soatda yetib borasiz");
    break;
  }
  case 5: {
    alert("Siz " + Math.round(allway / 880) + " soatda yetib borasiz");
    break;
  }
  default:
    {
      alert("Iltimos 1 dan 5 gacha son kiriting");
    }
    break;
}
