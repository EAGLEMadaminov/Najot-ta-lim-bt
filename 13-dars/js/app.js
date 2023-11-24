let questions = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Rome", "Berlin"],
    correctAswer: "Paris",
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Pablo Picasso", "Michelangelo", "Vincent van Gogh"],
    correctAswer: "Leonardo da Vinci",
  },
  {
    question: "What year was the first iPhone released?",
    answers: ["2005", "2008", "2010"],
    correctAswer: "2007",
  },
  {
    question: "What is the square root of 81?",
    answers: ["7", "8", "6"],
    correctAswer: "9",
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Saturn", "Mars", "Neptune"],
    correctAswer: "Jupiter",
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ["Ag", "Cu", "Pb"],
    correctAswer: "Au",
  },
  {
    question: "Who wrote the novel 'Pride and Prejudice'?",
    answers: ["Charles Dickens", "Charlotte Brontë", "Emily Brontë"],
    correctAswer: "Jane Austen",
  },
  {
    question: "What is the main language spoken in Brazil?",
    answers: ["Spanish", "French", "English"],
    correctAswer: "Portuguese",
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: ["K2", "Kangchenjunga", "Makalu"],
    correctAswer: "Mount Everest",
  },
  {
    question: "What is the symbol for the element oxygen?",
    answers: ["N", "C", "H"],
    correctAswer: "O",
  },
  {
    question: "Who wrote the play 'Hamlet'?",
    answers: ["Oscar Wilde", "George Bernard Shaw", "Samuel Beckett"],
    correctAswer: "William Shakespeare",
  },
  {
    question: "What is the currency of Japan?",
    answers: ["Euro", "Dollar", "Pound"],
    correctAswer: "Yen",
  },
  {
    question: "Who discovered gravity?",
    answers: ["Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    correctAswer: "Isaac Newton",
  },
  {
    question: "What is the tallest animal in the world?",
    answers: ["Elephant", "Gorilla", "Polar bear"],
    correctAswer: "Giraffe",
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Brisbane"],
    correctAswer: "Canberra",
  },
  {
    question: "What is the symbol for the element carbon?",
    answers: ["O", "H", "N"],
    correctAswer: "C",
  },
  {
    question: "Who painted the Sistine Chapel ceiling?",
    answers: ["Leonardo da Vinci", "Raphael", "Caravaggio"],
    correctAswer: "Michelangelo",
  },
  {
    question: "How many continents are there?",
    answers: ["5", "6", "8"],
    correctAswer: "7",
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAswer: "Pacific Ocean",
  },
  {
    question: "Who is the current President of the United States?",
    answers: ["Donald Trump", "Barack Obama", "George W. Bush"],
    correctAswer: "Joe Biden",
  },
  {
    question: "What is the chemical formula for water?",
    answers: ["CO2", "O2", "NaCl"],
    correctAswer: "H2O",
  },
  {
    question: "Who wrote the Harry Potter book series?",
    answers: ["Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
    correctAswer: "J.K. Rowling",
  },
  {
    question: "What is the national animal of Canada?",
    answers: ["Moose", "Polar bear", "Bald eagle"],
    correctAswer: "Beaver",
  },
  {
    question: "What is the capital of Spain?",
    answers: ["Barcelona", "Valencia", "Seville"],
    correctAswer: "Madrid",
  },
  {
    question: "What is the symbol for the element iron?",
    answers: ["Au", "Ag", "Cu"],
    correctAswer: "Fe",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: ["Oscar Wilde", "George Bernard Shaw", "Samuel Beckett"],
    correctAswer: "William Shakespeare",
  },
  {
    question: "What is the currency of the United Kingdom?",
    answers: ["Euro", "Yen", "Dollar"],
    correctAswer: "Pound",
  },
  {
    question: "What is the speed of light in a vacuum?",
    answers: [
      "100,000 kilometers per second",
      "1,000,000 miles per hour",
      "50,000 feet per second",
    ],
    correctAswer: "299,792,458 meters per second",
  },
  {
    question: "What is the largest animal in the world?",
    answers: ["Elephant", "Giraffe", "Hippopotus"],
    correctAswer: "Blue whale",
  },
  {
    question: "What is the capital of India?",
    answers: ["Mumbai", "Kolkata", "Chennai"],
    correctAswer: "New Delhi",
  },
  {
    question: "What is the symbol for the element sodium?",
    answers: ["O", "H", "C"],
    correctAswer: "Na",
  },
  {
    question: "Who painted 'Starry Night'?",
    answers: ["Pablo Picasso", "Salvador Dalí", "Claude Monet"],
    correctAswer: "Vincent van Gogh",
  },
  {
    question: "What is the largest country in the world by land area?",
    answers: ["Canada", "China", "United States"],
    correctAswer: "Russia",
  },
  {
    question: "What is the chemical formula for table salt?",
    answers: ["H2O", "CO2", "CaCO3"],
    correctAswer: "NaCl",
  },
  {
    question: "Who wrote the novel 'To Kill a Mockingbird'?",
    answers: ["F. Scott Fitzgerald", "J.D. Salinger", "Ernest Hemingway"],
    correctAswer: "Harper Lee",
  },
  {
    question: "What is the national animal of Australia?",
    answers: ["Koala", "Emu", "Platypus"],
    correctAswer: "Kangaroo",
  },
  {
    question: "What is the capital of Germany?",
    answers: ["Hamburg", "Munich", "Frankfurt"],
    correctAswer: "Berlin",
  },
  {
    question: "What is the symbol for the element hydrogen?",
    answers: ["He", "Li", "Be"],
    correctAswer: "H",
  },
  {
    question: "Who wrote the play 'Macbeth'?",
    answers: ["Oscar Wilde", "George Bernard Shaw", "Samuel Beckett"],
    correctAswer: "William Shakespeare",
  },
  {
    question: "What is the currency of Germany?",
    answers: ["Dollar", "Pound", "Yen"],
    correctAswer: "Euro",
  },
  {
    question: "What is the boiling point of water in Fahrenheit?",
    answers: ["100 degrees", "180 degrees", "32 degrees"],
    correctAswer: "212 degrees",
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: ["Venus", "Mars", "Earth"],
    correctAswer: "Mercury",
  },
];

let elQuestionsDiv = document.querySelector(".questions");
let n = 0;
let show = 0;

let rNum = Math.floor(Math.random() * 25) + 1;
let newA = questions.splice(rNum, 15);

newA.forEach((item, index) => {
  let randomNum = Math.floor(Math.random() * 4);
  let elQuestionTitle = document.createElement("h2");
  let oneQuestionDiv = document.createElement("div");
  elQuestionTitle.textContent = item.question;
  elQuestionTitle.classList = "title";
  let elAnswersDiv = document.createElement("div");
  elAnswersDiv.classList = "btn-box";
  let elCorrectBtn = document.createElement("button");
  elCorrectBtn.textContent = item.correctAswer;
  elCorrectBtn.addEventListener("click", () => {
    oneQuestionDiv.remove();
    n++;
    if (elQuestionsDiv.innerHTML === "") {
      let text = document.createElement("h1");
      text.textContent = `Siz ${n} ta to'g'ri topdingiz`;
      elQuestionsDiv.append(text);
    }
  });

  item.answers.forEach((one) => {
    let elBtn = document.createElement("button");
    elBtn.textContent = one;
    elAnswersDiv.append(elBtn);
    elBtn.addEventListener("click", () => {
      oneQuestionDiv.remove();
      show++;
      if (elQuestionsDiv.innerHTML === "") {
        let text = document.createElement("h1");
        text.textContent = `Siz ${n} ta to'g'ri topdingiz`;
        elQuestionsDiv.append(text);
      }
    });
  });

  elAnswersDiv.insertBefore(elCorrectBtn, elAnswersDiv.children[randomNum]);
  oneQuestionDiv.append(elQuestionTitle);
  oneQuestionDiv.append(elAnswersDiv);
  elQuestionsDiv.append(oneQuestionDiv);
});
