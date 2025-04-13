"use strict";
// DOM : Document Object Model
//structured represpentation of html document
//allow js to access html elements and styles to manipulate them (connction point between js and html)
// generated on html load
// document : object that is the entry point to the dom
// document.querySelector()

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No Number to Check 😡");
  } else if (guess === number) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    displayMessage("Correct Number 🤗");
    document.querySelector(".number").textContent = number;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      score--;
      guess > number
        ? displayMessage("Too High 🤔")
        : displayMessage("Too Small 🤔");
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      displayMessage("Game Over 😣");
    }
  }
});
