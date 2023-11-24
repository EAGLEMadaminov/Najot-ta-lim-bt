let elLettersList = document.querySelector(".letters");
let elGuesWorsBox = document.querySelector(".gues-words");
let elChanses = document.querySelector(".chanses");
let chanse = 10;
let elCheckWord = document.querySelector(".checked-word");
let englishAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const objectDescriptions = {
  book: "A collection of printed or written pages bound together, containing information or stories.",
  chair:
    "A piece of furniture with a raised surface for sitting, typically having a backrest and four legs.",
  smartphone:
    "A mobile phone that operates on an advanced operating system, providing various features and applications.",
  car: "A motor vehicle with four wheels, used for transportation of people and goods on roads.",
  "coffee mug":
    "A cylindrical cup with a handle, typically used for holding and drinking hot beverages like coffee or tea.",
  laptop:
    "A portable computer that can be used on a person's lap, designed for ease of use and mobility.",
  tree: "A tall perennial plant with a trunk and branches, usually producing leaves and bearing fruits or flowers.",
  bicycle:
    "A human-powered vehicle with two wheels, propelled by pedaling and commonly used for transportation.",
  sunglasses:
    "Eyewear designed to protect the eyes from sunlight or glare, typically having tinted or polarized lenses.",
  watch:
    "A small timekeeping device usually worn on the wrist or carried in a pocket.",
  backpack:
    "A bag with shoulder straps, typically used to carry belongings on one's back.",
  pen: "A device used for writing or drawing, consisting of a thin cylindrical shaft filled with ink.",
  wallet:
    "A small, flat case used to carry money, cards, and other personal items.",
  camera:
    "A device used to capture and record still images or moving pictures.",
  headphones:
    "A pair of small speakers worn over the ears, allowing the user to listen to audio privately.",
};

let randomNum = Math.floor(Math.random() * 15);

const keys = Object.keys(objectDescriptions);
const values = Object.values(objectDescriptions);
let elDescription = document.querySelector(".description");
let elDesText = document.createElement("p");
elDesText.classList.add("desc");
elDesText.textContent = values[randomNum];
word = keys[randomNum].split("");
elDescription.append(elDesText);
console.log(word);

englishAlphabet.forEach((item, index) => {
  let elOneLetter = document.createElement("button");
  elOneLetter.textContent = item;
  elOneLetter.classList.add(`button-${index}`);
  elLettersList.appendChild(elOneLetter);
});

word.forEach((item) => {
  console.log(item);
  let elInput = document.createElement("input");
  elInput.classList.add("gues-letter");
  elGuesWorsBox.appendChild(elInput);
});

elLettersList.addEventListener("click", (e) => {
  elCheckWord.classList.add("checked-word");
  elCheckWord.style.padding = "10px";
  let oneLet = e.target.textContent;
  e.target.classList.add("clicked");
  let foundLetersCount = 0;
  let index = word.indexOf(oneLet);
  let check = [];
  if (word.includes(oneLet)) {
    while (index !== -1) {
      elGuesWorsBox.children[index].value = oneLet;
      foundLetersCount++;
      elCheckWord.firstChild.textContent = "Correct letter";

      console.log(foundLetersCount);
      if (++foundLetersCount === word.length) {
        console.log(foundLetersCount);
      }
      index = word.indexOf(oneLet, index + 1);
    }
  } else {
    chanse--;
    elChanses.textContent = chanse;
    elCheckWord.firstChild.textContent = "Wrong letter";
    setTimeout(elCheckWord.classList.remove(".checked-word"), 1000);
    if (chanse === 0) {
      alert("Sorry you can't complete it ");
      location.reload();
    }
  }
});
