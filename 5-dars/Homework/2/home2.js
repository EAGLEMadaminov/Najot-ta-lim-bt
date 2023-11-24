// 2-vazifa  BMI
// bMI = weight / height / height;
function checkMy(height, weight) {
  let check = weight / (height * height);
  if (check < 18.5) {
    console.log("Under weight");
  } else if ((check >= 18, 5 && check < 25)) {
    console.log("Normal");
  } else if (check >= 25 && check < 30) {
    console.log("Over weight");
  } else if (check >= 30 && check < 35) {
    console.log("Obese");
  } else if (check >= 35) {
    console.log("Extra obess");
  }
}
// "You can check it in console"
// checkMy(1.75, 65);
