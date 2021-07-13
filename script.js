"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);
let score = 20;
let highscore = 0;

function showMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    showMessage("⛔️ No number!");
  } else if (guess === number) {
    showMessage("✔ Correct Number!");
    document.querySelector("body").style.backgroundColor = "#61B15A";
    document.querySelector(".number").textContent = number;
    if (highscore < score) highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess !== number) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      showMessage(guess > number ? "↗ Too High" : "↘ Too Low");
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = number;
      showMessage("💥 You lost the game!");
      document.querySelector("body").style.backgroundColor = "#D54C4C";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#393e46";
  //   console.log(number);
  showMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
