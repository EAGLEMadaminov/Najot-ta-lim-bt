let weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let elDay = document.querySelector(".day");
let elTime = document.querySelector(".time");
let elSecond = document.querySelector(".second");
let elDays = document.querySelector(".days");
let elMonth = document.querySelector(".month");
let elMin = document.querySelector(".min");
let elWeek = document.querySelector(".week");
const elements = [elTime, elMin, elSecond, elDays, elMonth];

let getChangetClock = () => {
  let date = new Date();
  let time = String(date.getHours()).padStart(2, "0");
  let days = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let min = String(date.getMinutes()).padStart(2, "0");
  let second = String(date.getSeconds()).padStart(2, "0");
  let week = date.getDay();
  elWeek.textContent = weeks[week];
  const values = [time, min, second, days, month];
  elements.forEach((item, index) => {
    item.textContent = values[index];
  });

  if (+time > 12) {
    elDay.textContent = "PM";
  } else {
    elDay.textContent = "AM";
  }
};
setInterval(getChangetClock, 1000);
getChangetClock();
