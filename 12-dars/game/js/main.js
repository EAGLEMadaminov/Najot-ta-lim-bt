let currentScoreP1 = document.getElementById("current--0");
let currentScoreP2 = document.getElementById("current--1");
let elP1Score = document.querySelector("#score--0");
let elP2Score = document.querySelector("#score--1");
let elPlayer1Div = document.querySelector(".player--0");
let elPlayer2Div = document.querySelector(".player--1");

let elRandomImage = document.querySelector(".dice");
let btnRoll = document.querySelector(".btn--roll");
let elBtnHold = document.querySelector(".btn--hold");
let elNeGameBtn = document.querySelector(".btn--new");

let score, currentScore, activePlayer, playing;

let initGame = () => {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  elP1Score.textContent = 0;
  elP2Score.textContent = 0;
  currentScoreP1.textContent = 0;
  currentScoreP2.textContent = 0;
  elRandomImage.classList.add("hidden");

  elPlayer1Div.classList.remove("player-winner");
  elPlayer2Div.classList.remove("player-winner");

  elPlayer1Div.classList.add("active-player");
  elPlayer2Div.classList.remove("active-player");
};

initGame();

let switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  elPlayer1Div.classList.toggle("player--active");
  elPlayer2Div.classList.toggle("player--active");
};

btnRoll.addEventListener("click", () => {
  if (playing) {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    elRandomImage.classList.remove("hidden");
    elRandomImage.src = `./images/${randomNum}.jpg`;
    if (randomNum !== 1) {
      currentScore += randomNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

elBtnHold.addEventListener("click", () => {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] > 100) {
      playing = false;
      elRandomImage.classList.remove("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});
