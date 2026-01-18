let score = 0;
let time = 30;
let gameActive = false;

const box = document.getElementById("box");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const highScoreText = document.getElementById("highScore");
const startBtn = document.getElementById("startBtn");
const exitBtn = document.getElementById("exitBtn");

let highScore = localStorage.getItem("highScore") || 0;
highScoreText.textContent = highScore;

function moveBox() {
  const maxX = window.innerWidth - 60;
  const maxY = window.innerHeight - 60;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  box.style.left = randomX + "px";
  box.style.top = randomY + "px";
}

box.onclick = () => {
  if (!gameActive) return;

  score++;
  scoreText.textContent = score;
  moveBox();
};

let timer;

startBtn.onclick = () => {
  score = 0;
  time = 30;
  gameActive = true;

  scoreText.textContent = score;
  timeText.textContent = time;

  box.style.display = "block";
  moveBox();

  timer = setInterval(() => {
    time--;
    timeText.textContent = time;

    if (time === 0) {
      clearInterval(timer);
      gameActive = false;
      box.style.display = "none";

      if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        highScoreText.textContent = highScore;
      }

      alert("Oyun bitti! Skorun: " + score);
    }
  }, 1000);
};

exitBtn.onclick = () => {
  window.location.href = "../../index.html";
};
