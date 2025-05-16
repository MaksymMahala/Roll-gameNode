//get document query
const newGameBtn = document.querySelector("newGameBtn");
const rollBtn = document.querySelector(".rollBtn");
const holdBtn = document.querySelector(".holdBtn");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const currentLabel1 = document.querySelector(".currentLabel1");
const currentLabel2 = document.querySelector(".currentLabel2");
const image = document.getElementById("imageDice");

const randomImage = [
  "/images/dice-1.png",
  "/images/dice-2.png",
  "/images/dice-3.png",
  "/images/dice-4.png",
  "/images/dice-5.png",
  "/images/dice-6.png",
];

var players = [1, 2];
let scoreResult = 0;

function randomPlayer() {
  const randomIndex = Math.floor(Math.random() * players.length);
  return players[randomIndex];
}

var currentPlayer = randomPlayer();
console.log(currentPlayer);

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * randomImage.length);
  getScoreIndex(randomIndex);
  return randomImage[randomIndex];
}

function shakeRollBtn() {
  rollBtn.classList.add("shake");

  setTimeout(function () {
    rollBtn.classList.remove("shake");
  }, 500);
}

function shakeHoldBtn() {
  holdBtn.classList.add("shake");

  setTimeout(function () {
    holdBtn.classList.remove("shake");
  }, 500);
}

function rotateImage() {
  image.classList.add("rotate");

  setTimeout(function () {
    image.classList.remove("rotate");
  }, 1000);
}

function getScoreIndex(randomIndex) {
  switch (randomIndex) {
    case 0:
      scoreResult = 1;
      break;
    case 1:
      scoreResult = 2;
      break;
    case 2:
      scoreResult = 3;
      break;
    case 3:
      scoreResult = 4;
      break;
    case 4:
      scoreResult = 5;
      break;
    case 5:
      scoreResult = 6;
      break;
  }
}

function getScore1() {
  score1.textContent = scoreResult;
}

function getScore2() {
  score2.textContent = scoreResult;
}

function calculateCurrentScore1() {
  let currentScore = Number(currentLabel1.textContent) || 0;
  currentScore += scoreResult;
  currentLabel1.textContent = currentScore;
}

function calculateCurrentScore2() {
  let currentScore = Number(currentLabel2.textContent) || 0;
  currentScore += scoreResult;
  currentLabel2.textContent = currentScore;
}

function reloadInfo() {
  const currentBox1 = document.getElementsByClassName("box-radius-1");
  const currentBox2 = document.getElementsByClassName("box-radius-2");

  if (currentPlayer == 1) {
    currentPlayer = 2;

    for (let i = 0; i < currentBox1.length; i++) {
      currentBox2[i].style.opacity = 0.8;
      currentBox1[i].style.opacity = 0.5;
    }
  } else if (currentPlayer == 2) {
    currentPlayer = 1;

    for (let i = 0; i < currentBox1.length; i++) {
      currentBox1[i].style.opacity = 0.8;
      currentBox2[i].style.opacity = 0.5;
    }
  }
}

function holdAction() {
  shakeHoldBtn();
  reloadInfo();
}

function rollAction() {
  const selectedImage = getRandomImage();
  image.src = selectedImage;

  shakeRollBtn();
  rotateImage();
  if (currentPlayer == 1) {
    getScore1();
    calculateCurrentScore1();
  } else if (currentPlayer == 2) {
    getScore2();
    calculateCurrentScore2();
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  reloadInfo();
});
holdBtn.addEventListener("click", holdAction);
rollBtn.addEventListener("click", rollAction);
newGameBtn.addEventListener("click", function () {
  location.reload();
});
